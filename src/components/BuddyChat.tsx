'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const BUDDY_SKINS = {
  luna:    { name: 'Luna',    emoji: '🦄', color: '#EC4899' },
  pablo:   { name: 'Pablo',   emoji: '🐧', color: '#64748B' },
  bambou:  { name: 'Bambou',  emoji: '🐼', color: '#6366F1' },
  drago:   { name: 'Drago',   emoji: '🐉', color: '#22C55E' },
  fantome: { name: 'Fantôme', emoji: '👻', color: '#9333EA' },
} as const

type SkinKey = keyof typeof BUDDY_SKINS
type Step = 'idle' | 'skin-pick' | 'intro' | 'chatting'

interface ChatMessage {
  id: string
  session_id: string
  created_at: string
  content: string
  sender: 'visitor' | 'admin'
  read: boolean
}

const SESSION_KEY = 'buddy_chat_session_id'

export default function BuddyChat() {
  const [step, setStep] = useState<Step>('idle')
  const [selectedSkin, setSelectedSkin] = useState<SkinKey | null>(null)
  const [visitorName, setVisitorName] = useState('')
  const [visitorEmail, setVisitorEmail] = useState('')
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const initialized = useRef(false)

  // Restore session from localStorage
  useEffect(() => {
    if (initialized.current) return
    initialized.current = true
    const saved = localStorage.getItem(SESSION_KEY)
    if (saved) {
      setSessionId(saved)
      setStep('chatting')
      setSelectedSkin('luna') // fallback; will be correct from DB ideally
    }
  }, [])

  const fetchMessages = useCallback(async (sid: string) => {
    const { data } = await supabase
      .from('chat_messages')
      .select('*')
      .eq('session_id', sid)
      .order('created_at', { ascending: true })

    if (data) {
      setMessages(data as ChatMessage[])
      if (step !== 'chatting') {
        const unread = (data as ChatMessage[]).filter((m) => m.sender === 'admin' && !m.read).length
        setUnreadCount(unread)
      } else {
        setUnreadCount(0)
      }
    }
  }, [step])

  // Poll messages when chatting or idle with a session
  useEffect(() => {
    if (pollRef.current) clearInterval(pollRef.current)
    if (!sessionId) return

    fetchMessages(sessionId)
    pollRef.current = setInterval(() => fetchMessages(sessionId), 3000)

    return () => {
      if (pollRef.current) clearInterval(pollRef.current)
    }
  }, [sessionId, fetchMessages])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const skin = selectedSkin ? BUDDY_SKINS[selectedSkin] : { name: 'Buddy', emoji: '🤝', color: '#6366F1' }

  const handleStartChat = async (skip = false) => {
    if (!selectedSkin) return

    const name = skip ? null : visitorName.trim() || null
    const email = skip ? null : visitorEmail.trim() || null

    const { data, error } = await supabase
      .from('chat_sessions')
      .insert({ buddy_skin: selectedSkin, visitor_name: name, visitor_email: email })
      .select()
      .single()

    if (error || !data) return

    const sid = data.id as string
    setSessionId(sid)
    localStorage.setItem(SESSION_KEY, sid)
    setStep('chatting')
  }

  const handleSend = async () => {
    if (!input.trim() || !sessionId || sending) return
    setSending(true)

    const content = input.trim()
    setInput('')

    await supabase.from('chat_messages').insert({
      session_id: sessionId,
      content,
      sender: 'visitor',
    })

    await supabase
      .from('chat_sessions')
      .update({ last_message_at: new Date().toISOString() })
      .eq('id', sessionId)

    await fetchMessages(sessionId)
    setSending(false)
  }

  const handleOpen = () => {
    if (step === 'idle') {
      setStep('skin-pick')
      setUnreadCount(0)
    } else if (step === 'chatting') {
      setStep('idle')
    }
  }

  const welcomeMessage = selectedSkin
    ? `Salut ! Je suis ${skin.name} 👋 L'équipe Buddy va te répondre dès que possible !`
    : ''

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

        {/* Skin picker panel */}
        {step === 'skin-pick' && (
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-80 p-5 space-y-4">
            <h3 className="text-base font-bold text-gray-900 text-center">Choisis ton Buddy ! 👋</h3>
            <div className="grid grid-cols-5 gap-2">
              {(Object.entries(BUDDY_SKINS) as [SkinKey, typeof BUDDY_SKINS[SkinKey]][]).map(([key, s]) => (
                <button
                  key={key}
                  onClick={() => setSelectedSkin(key)}
                  className={`flex flex-col items-center gap-1 p-2 rounded-xl border-2 transition-all ${
                    selectedSkin === key ? 'scale-105' : 'border-gray-100 hover:border-gray-300'
                  }`}
                  style={selectedSkin === key ? { borderColor: s.color, backgroundColor: s.color + '18' } : {}}
                >
                  <span className="text-3xl">{s.emoji}</span>
                  {selectedSkin === key && <span className="text-xs font-bold" style={{ color: s.color }}>✓</span>}
                  <span className="text-xs text-gray-600 leading-tight text-center">{s.name}</span>
                </button>
              ))}
            </div>
            <button
              disabled={!selectedSkin}
              onClick={() => setStep('intro')}
              className="w-full py-2.5 rounded-xl text-sm font-bold text-white transition-colors disabled:opacity-40"
              style={{ backgroundColor: selectedSkin ? BUDDY_SKINS[selectedSkin].color : '#6366F1' }}
            >
              Continuer →
            </button>
          </div>
        )}

        {/* Intro form */}
        {step === 'intro' && selectedSkin && (
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-80 overflow-hidden">
            {/* Header */}
            <div
              className="flex items-center gap-3 px-5 py-4"
              style={{ backgroundColor: skin.color }}
            >
              <span className="text-3xl">{skin.emoji}</span>
              <p className="text-white font-bold text-sm">{skin.name}</p>
            </div>
            <div className="p-5 space-y-4">
              {/* Buddy message bubble */}
              <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-2.5">
                <p className="text-sm text-gray-800">
                  Bonjour ! Je suis {skin.name}, comment puis-je t&apos;aider ?
                </p>
              </div>
              <input
                type="text"
                value={visitorName}
                onChange={(e) => setVisitorName(e.target.value)}
                placeholder="Ton prénom (optionnel)"
                className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2"
                style={{ '--tw-ring-color': skin.color } as React.CSSProperties}
              />
              <input
                type="email"
                value={visitorEmail}
                onChange={(e) => setVisitorEmail(e.target.value)}
                placeholder="Ton email (optionnel)"
                className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2"
              />
              <button
                onClick={() => handleStartChat(false)}
                className="w-full py-2.5 rounded-xl text-sm font-bold text-white"
                style={{ backgroundColor: skin.color }}
              >
                Démarrer la conversation →
              </button>
              <button
                onClick={() => handleStartChat(true)}
                className="w-full text-center text-xs text-gray-400 hover:text-gray-600 underline"
              >
                Passer
              </button>
            </div>
          </div>
        )}

        {/* Chat interface */}
        {step === 'chatting' && selectedSkin && (
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-80 overflow-hidden flex flex-col" style={{ height: '460px' }}>
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3 flex-shrink-0"
              style={{ backgroundColor: skin.color }}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">{skin.emoji}</span>
                <p className="text-white font-bold text-sm">Chat avec {skin.name}</p>
              </div>
              <button
                onClick={() => setStep('idle')}
                className="text-white opacity-80 hover:opacity-100 text-lg leading-none font-bold"
              >
                ×
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {/* Welcome message */}
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%]">
                  <p className="text-xs text-gray-800">{welcomeMessage}</p>
                </div>
              </div>

              {messages.map((msg) => {
                const isVisitor = msg.sender === 'visitor'
                return (
                  <div key={msg.id} className={`flex ${isVisitor ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`px-3 py-2 rounded-2xl text-xs max-w-[85%] ${
                        isVisitor ? 'rounded-br-sm text-white' : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                      }`}
                      style={isVisitor ? { backgroundColor: skin.color } : {}}
                    >
                      {msg.content}
                    </div>
                  </div>
                )
              })}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-3 py-2 border-t border-gray-100 flex gap-2 flex-shrink-0">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend() } }}
                placeholder="Ton message…"
                disabled={sending}
                className="flex-1 text-xs px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || sending}
                className="px-3 py-2 rounded-lg text-xs font-bold text-white disabled:opacity-40"
                style={{ backgroundColor: skin.color }}
              >
                ➤
              </button>
            </div>
          </div>
        )}

        {/* Floating action button */}
        <button
          onClick={handleOpen}
          className="w-16 h-16 rounded-full shadow-xl flex items-center justify-center text-2xl relative transition-transform hover:scale-105 active:scale-95"
          style={{ backgroundColor: selectedSkin ? BUDDY_SKINS[selectedSkin].color : '#6366F1' }}
          aria-label="Ouvrir le chat"
        >
          {selectedSkin ? BUDDY_SKINS[selectedSkin].emoji : '🤝'}
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </button>
      </div>
    </>
  )
}

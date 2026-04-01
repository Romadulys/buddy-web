'use client'

import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { createClient } from '@/lib/supabase/client'

// ── Themes ───────────────────────────────────────────────────────────────────
const BUDDY_THEMES = {
  luna: {
    name: 'Luna',
    emoji: '🦄',
    color: '#EC4899',
    gradient: 'linear-gradient(135deg, #BE185D 0%, #F472B6 100%)',
    chatBg: '#FFF0F7',
    particles: ['🌸', '✨', '💫', '🦋', '⭐'] as const,
    rgb: '236,72,153',
  },
  pablo: {
    name: 'Pablo',
    emoji: '🐧',
    color: '#3B82F6',
    gradient: 'linear-gradient(135deg, #1D4ED8 0%, #60A5FA 100%)',
    chatBg: '#EFF6FF',
    particles: ['❄️', '🐟', '🌊', '💙', '⛄'] as const,
    rgb: '59,130,246',
  },
  bambou: {
    name: 'Bambou',
    emoji: '🐼',
    color: '#4F46E5',
    gradient: 'linear-gradient(135deg, #3730A3 0%, #818CF8 100%)',
    chatBg: '#EEF2FF',
    particles: ['🎋', '🌿', '🌱', '☘️', '🍃'] as const,
    rgb: '79,70,229',
  },
  drago: {
    name: 'Drago',
    emoji: '🐉',
    color: '#16A34A',
    gradient: 'linear-gradient(135deg, #14532D 0%, #4ADE80 100%)',
    chatBg: '#F0FDF4',
    particles: ['🔥', '⚡', '✨', '💥', '🌟'] as const,
    rgb: '22,163,74',
  },
  fantome: {
    name: 'Fantôme',
    emoji: '👻',
    color: '#7C3AED',
    gradient: 'linear-gradient(135deg, #4C1D95 0%, #C084FC 100%)',
    chatBg: '#FAF5FF',
    particles: ['👻', '🌙', '⭐', '💜', '🔮'] as const,
    rgb: '124,58,237',
  },
} as const

type SkinKey = keyof typeof BUDDY_THEMES
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
const SKIN_KEY = 'buddy_chat_skin'

// ── Floating Particles ────────────────────────────────────────────────────────
function FloatingParticles({ particles }: { particles: readonly string[] }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((emoji, i) => (
        <span
          key={i}
          className="absolute text-xl select-none"
          style={{
            left: `${8 + i * 18}%`,
            top: `${15 + ((i * 37) % 65)}%`,
            animation: `buddyFloat ${3.5 + i * 0.4}s ease-in-out ${i * 0.6}s infinite`,
            opacity: 0.15,
          }}
        >
          {emoji}
        </span>
      ))}
    </div>
  )
}

// ── Typing Indicator ──────────────────────────────────────────────────────────
function TypingIndicator({ color }: { color: string }) {
  return (
    <div className="flex justify-start" style={{ animation: 'buddySlideLeft 0.3s ease-out' }}>
      <div className="bg-white border border-gray-100 shadow-sm rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5 items-center">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full block"
            style={{
              backgroundColor: color,
              animation: `buddyDot 1.2s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function BuddyChat() {
  const supabase = useMemo(() => createClient(), [])

  const [step, setStep] = useState<Step>('idle')
  const [selectedSkin, setSelectedSkin] = useState<SkinKey>('luna')
  const [visitorName, setVisitorName] = useState('')
  const [visitorEmail, setVisitorEmail] = useState('')
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)
  const [showTyping, setShowTyping] = useState(false)

  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const initialized = useRef(false)
  const isChatOpen = step === 'chatting'

  // Restore session + skin from localStorage (no auto-open)
  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const savedSkin = localStorage.getItem(SKIN_KEY) as SkinKey | null
    const savedSession = localStorage.getItem(SESSION_KEY)

    if (savedSkin && savedSkin in BUDDY_THEMES) {
      setSelectedSkin(savedSkin)
    }
    if (savedSession) {
      setSessionId(savedSession)
      // Don't auto-open — FAB shows unread badge, user clicks to reopen
    }
  }, [])

  const fetchMessages = useCallback(
    async (sid: string, isOpen: boolean) => {
      const { data } = await supabase
        .from('chat_messages')
        .select('*')
        .eq('session_id', sid)
        .order('created_at', { ascending: true })

      if (data) {
        setMessages(data as ChatMessage[])
        if (!isOpen) {
          const unread = (data as ChatMessage[]).filter(
            (m) => m.sender === 'admin' && !m.read
          ).length
          setUnreadCount(unread)
        } else {
          setUnreadCount(0)
        }
      }
    },
    [supabase]
  )

  // Poll messages whenever sessionId or open state changes
  useEffect(() => {
    if (pollRef.current) clearInterval(pollRef.current)
    if (!sessionId) return

    fetchMessages(sessionId, isChatOpen)
    pollRef.current = setInterval(() => fetchMessages(sessionId, isChatOpen), 3000)

    return () => {
      if (pollRef.current) clearInterval(pollRef.current)
    }
  }, [sessionId, isChatOpen, fetchMessages])

  // Auto-scroll on new messages or typing indicator
  useEffect(() => {
    if (isChatOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, showTyping, isChatOpen])

  const theme = BUDDY_THEMES[selectedSkin]

  const handleOpen = () => {
    if (step === 'idle') {
      if (sessionId) {
        // Restore existing session directly
        setStep('chatting')
      } else {
        setStep('skin-pick')
      }
      setUnreadCount(0)
    } else {
      setStep('idle')
    }
  }

  const handleStartChat = async (skip = false) => {
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
    localStorage.setItem(SKIN_KEY, selectedSkin)
    setStep('chatting')
  }

  const handleSend = async () => {
    if (!input.trim() || !sessionId || sending) return
    setSending(true)

    const content = input.trim()
    setInput('')

    try {
      const res = await fetch(`/api/chat/visitor-message/${sessionId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      })

      const json = await res.json()

      if (json.autoReply) {
        // Show typing indicator, then reveal auto-reply after a natural delay
        setShowTyping(true)
        await fetchMessages(sessionId, true) // show our own message immediately
        setTimeout(async () => {
          setShowTyping(false)
          await fetchMessages(sessionId, true)
        }, 1800)
      } else {
        await fetchMessages(sessionId, true)
      }
    } catch {
      await fetchMessages(sessionId, true)
    }

    setSending(false)
  }

  const welcomeMessage = `Salut ! Je suis ${theme.name} 👋 L'équipe Buddy va te répondre dès que possible !`

  return (
    <>
      {/* ── Injected keyframe animations (magicui-inspired) ── */}
      <style>{`
        @keyframes buddyFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.15; }
          50% { transform: translateY(-18px) rotate(8deg); opacity: 0.3; }
        }
        @keyframes buddyDot {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes buddySlideLeft {
          from { transform: translateX(-16px); opacity: 0; }
          to   { transform: translateX(0);     opacity: 1; }
        }
        @keyframes buddySlideRight {
          from { transform: translateX(16px); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        @keyframes buddyPop {
          0%   { transform: scale(0.85) translateY(16px); opacity: 0; }
          65%  { transform: scale(1.03) translateY(-2px); opacity: 1; }
          100% { transform: scale(1)    translateY(0);    opacity: 1; }
        }
        @keyframes buddyBounce {
          0%, 100% { transform: translateY(0)   scale(1);    }
          50%       { transform: translateY(-4px) scale(1.06); }
        }
        @keyframes buddyShimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
      `}</style>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

        {/* ── Skin Picker ─────────────────────────────────────────────── */}
        {step === 'skin-pick' && (
          <div
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-80 p-5 space-y-4"
            style={{ animation: 'buddyPop 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards' }}
          >
            <div className="text-center space-y-0.5">
              <h3 className="text-base font-black text-gray-900">Choisis ton Buddy ! 👋</h3>
              <p className="text-xs text-gray-400">Chaque personnage a son propre univers</p>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {(Object.entries(BUDDY_THEMES) as [SkinKey, (typeof BUDDY_THEMES)[SkinKey]][]).map(
                ([key, t]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedSkin(key)}
                    className="flex flex-col items-center gap-1 p-2 rounded-xl border-2 transition-all hover:scale-105 active:scale-95"
                    style={
                      selectedSkin === key
                        ? { borderColor: t.color, backgroundColor: t.color + '1A', transform: 'scale(1.07)' }
                        : { borderColor: '#F3F4F6' }
                    }
                  >
                    <span className="text-2xl leading-none">{t.emoji}</span>
                    <span
                      className="text-[10px] font-semibold leading-tight text-center"
                      style={{ color: selectedSkin === key ? t.color : '#9CA3AF' }}
                    >
                      {t.name}
                    </span>
                  </button>
                )
              )}
            </div>

            <button
              onClick={() => setStep('intro')}
              className="w-full py-2.5 rounded-xl text-sm font-black text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: theme.gradient }}
            >
              Continuer avec {theme.name} →
            </button>
          </div>
        )}

        {/* ── Intro Form ──────────────────────────────────────────────── */}
        {step === 'intro' && (
          <div
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-80 overflow-hidden"
            style={{ animation: 'buddyPop 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards' }}
          >
            {/* Themed header with particles */}
            <div
              className="relative px-5 py-4 overflow-hidden"
              style={{ background: theme.gradient }}
            >
              <FloatingParticles particles={theme.particles} />
              <div className="relative z-10 flex items-center gap-3">
                <span
                  className="text-3xl leading-none"
                  style={{ animation: 'buddyBounce 2s ease-in-out infinite' }}
                >
                  {theme.emoji}
                </span>
                <div>
                  <p className="text-white font-black text-sm">{theme.name}</p>
                  <p className="text-white/70 text-xs">Buddy est là pour toi !</p>
                </div>
              </div>
            </div>

            <div className="p-5 space-y-3">
              {/* Welcome bubble */}
              <div
                className="rounded-2xl rounded-tl-sm px-4 py-2.5"
                style={{ backgroundColor: theme.chatBg }}
              >
                <p className="text-sm text-gray-700">
                  Bonjour ! Je suis {theme.name} — comment puis-je t&apos;aider ?
                </p>
              </div>

              <input
                type="text"
                value={visitorName}
                onChange={(e) => setVisitorName(e.target.value)}
                placeholder="Ton prénom (optionnel)"
                className="w-full text-sm px-3 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 transition-all"
                style={{ '--tw-ring-color': theme.color + '40' } as React.CSSProperties}
              />
              <input
                type="email"
                value={visitorEmail}
                onChange={(e) => setVisitorEmail(e.target.value)}
                placeholder="Ton email (optionnel)"
                className="w-full text-sm px-3 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 transition-all"
              />
              <button
                onClick={() => handleStartChat(false)}
                className="w-full py-2.5 rounded-xl text-sm font-black text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: theme.gradient }}
              >
                Démarrer la conversation →
              </button>
              <button
                onClick={() => handleStartChat(true)}
                className="w-full text-center text-xs text-gray-400 hover:text-gray-600 transition-colors"
              >
                Passer sans s&apos;identifier
              </button>
            </div>
          </div>
        )}

        {/* ── Chat Interface ───────────────────────────────────────────── */}
        {step === 'chatting' && (
          <div
            className="rounded-2xl shadow-2xl border border-gray-100 w-80 overflow-hidden flex flex-col"
            style={{
              height: '480px',
              backgroundColor: theme.chatBg,
              animation: 'buddyPop 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards',
            }}
          >
            {/* Themed header */}
            <div
              className="relative px-4 py-3 flex-shrink-0 overflow-hidden"
              style={{ background: theme.gradient }}
            >
              <FloatingParticles particles={theme.particles} />
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="text-xl leading-none"
                    style={{ animation: 'buddyBounce 3s ease-in-out infinite' }}
                  >
                    {theme.emoji}
                  </span>
                  <div>
                    <p className="text-white font-black text-sm">Chat avec {theme.name}</p>
                    <p className="text-white/70 text-[10px]">Équipe Buddy · Répond bientôt</p>
                  </div>
                </div>
                <button
                  onClick={() => setStep('idle')}
                  className="text-white/80 hover:text-white text-xl font-bold leading-none hover:scale-110 transition-transform"
                  aria-label="Fermer"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {/* Welcome bubble */}
              <div className="flex justify-start" style={{ animation: 'buddySlideLeft 0.4s ease-out' }}>
                <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%] shadow-sm">
                  <p className="text-xs text-gray-700">{welcomeMessage}</p>
                </div>
              </div>

              {messages.map((msg) => {
                const isVisitor = msg.sender === 'visitor'
                return (
                  <div
                    key={msg.id}
                    className={`flex ${isVisitor ? 'justify-end' : 'justify-start'}`}
                    style={{
                      animation: isVisitor
                        ? 'buddySlideRight 0.3s ease-out'
                        : 'buddySlideLeft 0.3s ease-out',
                    }}
                  >
                    <div
                      className={`px-3 py-2 rounded-2xl text-xs max-w-[85%] ${
                        isVisitor
                          ? 'text-white rounded-br-sm shadow-sm'
                          : 'bg-white text-gray-700 rounded-bl-sm shadow-sm'
                      }`}
                      style={isVisitor ? { background: theme.gradient } : {}}
                    >
                      {msg.content}
                    </div>
                  </div>
                )
              })}

              {showTyping && <TypingIndicator color={theme.color} />}
              <div ref={messagesEndRef} />
            </div>

            {/* Input bar */}
            <div className="px-3 py-2.5 bg-white border-t border-gray-100 flex gap-2 flex-shrink-0">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    handleSend()
                  }
                }}
                placeholder="Ton message…"
                disabled={sending}
                className="flex-1 text-xs px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 bg-gray-50 transition-all"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || sending}
                className="px-3 py-2 rounded-xl text-xs font-black text-white disabled:opacity-40 hover:scale-105 active:scale-95 transition-transform"
                style={{ background: theme.gradient }}
                aria-label="Envoyer"
              >
                ➤
              </button>
            </div>
          </div>
        )}

        {/* ── Floating Action Button ───────────────────────────────────── */}
        <button
          onClick={handleOpen}
          className="w-16 h-16 rounded-full shadow-xl flex items-center justify-center text-2xl relative"
          style={{
            background: theme.gradient,
            animation: 'buddyBounce 3s ease-in-out infinite',
          }}
          aria-label="Ouvrir le chat Buddy"
        >
          {theme.emoji}
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center shadow-md">
              {unreadCount}
            </span>
          )}
        </button>
      </div>
    </>
  )
}

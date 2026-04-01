import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// ── French stopwords (excluded from keyword matching) ─────────────────────────
const STOPWORDS = new Set([
  'le','la','les','de','du','des','un','une','et','en','au','aux',
  'je','tu','il','elle','nous','vous','ils','elles','me','te','se',
  'mon','ton','son','ma','ta','sa','nos','vos','leurs',
  'est','sont','a','ont','pas','ne','plus','ou','si','car','mais',
  'que','qui','quoi','comment','quand','pourquoi','quel','quelle',
  'ce','cet','cette','ces','y','on','pour','par','sur','dans','avec',
  'je','tu','cela','ça','ca','aussi','tres','bien','bonjour','salut',
])

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // strip accents
    .replace(/[^a-z0-9\s]/g, ' ')
    .trim()
}

function getKeywords(text: string): string[] {
  return normalizeText(text)
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOPWORDS.has(w))
}

interface FaqItem {
  question: string
  answer: string
}

function matchFAQ(userText: string, faqs: FaqItem[]): FaqItem | null {
  const userWords = getKeywords(userText)
  if (userWords.length === 0) return null

  let bestMatch: FaqItem | null = null
  let bestScore = 0

  for (const faq of faqs) {
    const faqWords = getKeywords(faq.question)
    const matchedWords = userWords.filter((w) =>
      faqWords.some((fw) => fw.includes(w) || w.includes(fw))
    )
    const score = matchedWords.length / userWords.length

    if (score >= 0.3 && matchedWords.length >= 2 && score > bestScore) {
      bestScore = score
      bestMatch = faq
    }
  }

  return bestMatch
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ sessionId: string }> }
) {
  const { sessionId } = await params
  const body = await req.json()
  const { content } = body as { content: string }

  if (!content?.trim()) {
    return NextResponse.json({ error: 'content is required' }, { status: 400 })
  }

  // Use service role for server-side operations (insert as admin for auto-reply)
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  )

  // 1. Insert the visitor message
  const { error: insertError } = await supabase.from('chat_messages').insert({
    session_id: sessionId,
    content: content.trim(),
    sender: 'visitor',
    read: false,
  })

  if (insertError) {
    return NextResponse.json({ error: insertError.message }, { status: 500 })
  }

  // 2. Update session last_message_at
  await supabase
    .from('chat_sessions')
    .update({ last_message_at: new Date().toISOString() })
    .eq('id', sessionId)

  // 3. Try FAQ auto-reply (fail gracefully if table doesn't exist)
  let autoReply = false
  try {
    const { data: faqs } = await supabase
      .from('faq_items')
      .select('question, answer')
      .eq('published', true)

    if (faqs && faqs.length > 0) {
      const match = matchFAQ(content.trim(), faqs as FaqItem[])
      if (match) {
        await supabase.from('chat_messages').insert({
          session_id: sessionId,
          content: match.answer,
          sender: 'admin',
          read: false,
        })
        // Update session again with auto-reply timestamp
        await supabase
          .from('chat_sessions')
          .update({ last_message_at: new Date().toISOString() })
          .eq('id', sessionId)
        autoReply = true
      }
    }
  } catch {
    // faq_items table may not exist yet — silently skip
  }

  return NextResponse.json({ ok: true, autoReply }, { status: 201 })
}

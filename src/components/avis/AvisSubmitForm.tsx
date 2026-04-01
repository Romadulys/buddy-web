'use client'

import { useState, useMemo } from 'react'
import { createClient } from '@/lib/supabase/client'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

function StarPicker({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const [hovered, setHovered] = useState(0)

  return (
    <div className="flex gap-1" onMouseLeave={() => setHovered(0)}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          onMouseEnter={() => setHovered(star)}
          className="text-3xl transition-transform hover:scale-110"
        >
          <span className={(hovered || value) >= star ? 'text-yellow-400' : 'text-zinc-200'}>
            ★
          </span>
        </button>
      ))}
    </div>
  )
}

export function AvisSubmitForm() {
  const supabase = useMemo(() => createClient(), [])
  const [formState, setFormState] = useState<FormState>('idle')
  const [authorName, setAuthorName] = useState('')
  const [authorRole, setAuthorRole] = useState('')
  const [content, setContent] = useState('')
  const [rating, setRating] = useState(5)
  const [coqueName, setCoqueName] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!authorName.trim() || !content.trim() || rating < 1) return

    setFormState('submitting')

    const { error } = await supabase.from('reviews').insert({
      author_name: authorName.trim(),
      author_role: authorRole.trim() || null,
      content: content.trim(),
      rating,
      coque_name: coqueName.trim() || null,
      published: false,
      featured: false,
      display_order: 999,
    })

    if (error) {
      setFormState('error')
      return
    }

    setFormState('success')
    setAuthorName('')
    setAuthorRole('')
    setContent('')
    setRating(5)
    setCoqueName('')
  }

  if (formState === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-3xl p-10 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-xl font-black text-green-800 mb-2">Merci pour ton avis !</h3>
        <p className="text-green-700 text-sm max-w-sm mx-auto">
          Ton témoignage a bien été reçu et sera publié après vérification par notre équipe.
        </p>
        <button
          onClick={() => setFormState('idle')}
          className="mt-6 text-sm text-green-600 underline hover:text-green-800"
        >
          Soumettre un autre avis
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl border border-zinc-100 shadow-sm p-8 space-y-6 max-w-xl mx-auto"
    >
      <div className="text-center">
        <h3 className="text-xl font-black text-zinc-900">Partagez votre expérience</h3>
        <p className="text-zinc-500 text-sm mt-1">Votre avis aide d&apos;autres familles à découvrir Buddy</p>
      </div>

      {/* Rating */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-zinc-700">Votre note *</label>
        <StarPicker value={rating} onChange={setRating} />
      </div>

      {/* Name */}
      <div className="space-y-1.5">
        <label className="text-sm font-semibold text-zinc-700" htmlFor="author_name">
          Votre prénom *
        </label>
        <input
          id="author_name"
          type="text"
          required
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Sophie M."
          className="w-full px-4 py-2.5 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#9333EA]/30 focus:border-[#9333EA]"
        />
      </div>

      {/* Role */}
      <div className="space-y-1.5">
        <label className="text-sm font-semibold text-zinc-700" htmlFor="author_role">
          Votre situation <span className="font-normal text-zinc-400">(optionnel)</span>
        </label>
        <input
          id="author_role"
          type="text"
          value={authorRole}
          onChange={(e) => setAuthorRole(e.target.value)}
          placeholder="Maman de Lucas, 6 ans"
          className="w-full px-4 py-2.5 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#9333EA]/30 focus:border-[#9333EA]"
        />
      </div>

      {/* Content */}
      <div className="space-y-1.5">
        <label className="text-sm font-semibold text-zinc-700" htmlFor="content">
          Votre témoignage *
        </label>
        <textarea
          id="content"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Partagez votre expérience avec Buddy..."
          rows={4}
          className="w-full px-4 py-2.5 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#9333EA]/30 focus:border-[#9333EA] resize-none"
        />
      </div>

      {/* Coque */}
      <div className="space-y-1.5">
        <label className="text-sm font-semibold text-zinc-700" htmlFor="coque_name">
          Coque choisie <span className="font-normal text-zinc-400">(optionnel)</span>
        </label>
        <input
          id="coque_name"
          type="text"
          value={coqueName}
          onChange={(e) => setCoqueName(e.target.value)}
          placeholder="Luna la Licorne, Pablo le Pingouin…"
          className="w-full px-4 py-2.5 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#9333EA]/30 focus:border-[#9333EA]"
        />
      </div>

      {formState === 'error' && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-2.5">
          Une erreur s&apos;est produite. Veuillez réessayer.
        </p>
      )}

      <button
        type="submit"
        disabled={formState === 'submitting' || !authorName.trim() || !content.trim()}
        className="w-full py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#9333EA] to-[#EC4899] hover:opacity-90 transition-opacity disabled:opacity-40 shadow-md"
      >
        {formState === 'submitting' ? 'Envoi en cours…' : 'Envoyer mon avis →'}
      </button>

      <p className="text-xs text-zinc-400 text-center">
        Votre avis sera publié après modération par l&apos;équipe Buddy.
      </p>
    </form>
  )
}

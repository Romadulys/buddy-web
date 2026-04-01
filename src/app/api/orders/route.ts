import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      customer_name,
      customer_email,
      items,
      total_amount,
      shipping_address,
      notes,
      promo_code,
    } = body

    if (!customer_email || !items || items.length === 0) {
      return NextResponse.json({ error: 'Données manquantes' }, { status: 400 })
    }

    const { data, error } = await supabase
      .from('orders')
      .insert({
        customer_name,
        customer_email,
        items,
        total_amount,
        shipping_address,
        notes: promo_code ? `Code promo: ${promo_code}${notes ? ` | ${notes}` : ''}` : notes,
        status: 'pending',
        source: 'web',
      })
      .select('id')
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ orderId: data.id }, { status: 201 })
  } catch (err) {
    console.error('Order API error:', err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

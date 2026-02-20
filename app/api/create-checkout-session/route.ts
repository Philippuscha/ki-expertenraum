import { NextResponse } from 'next/server'
import Stripe from 'stripe'

// Stripe Secret Key - MUSS durch deinen echten Key ersetzt werden
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_xxx', {
  apiVersion: '2023-10-16',
})

export async function POST(request: Request) {
  try {
    const { courseId, courseName, price } = await request.json()

    // Stripe Checkout Session erstellen
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: courseName,
              description: `Online-Kurs: ${courseName}`,
            },
            unit_amount: price * 100, // Stripe erwartet Cent
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/kurse/${courseId}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/kurse/${courseId}`,
      metadata: {
        courseId,
      },
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error('Stripe error:', error)
    return NextResponse.json(
      { error: 'Checkout konnte nicht erstellt werden' },
      { status: 500 }
    )
  }
}
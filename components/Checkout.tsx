import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { CreditCard, Lock, CheckCircle } from 'lucide-react'

// Stripe Public Key - MUSS durch deinen echten Key ersetzt werden
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_xxx')

interface CheckoutButtonProps {
  courseId: string
  courseName: string
  price: number
  buttonText?: string
  variant?: 'primary' | 'secondary' | 'outline'
}

export default function CheckoutButton({ 
  courseId, 
  courseName, 
  price,
  buttonText = 'Jetzt kaufen',
  variant = 'primary'
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)
    
    try {
      // In Produktion: API-Call zu deinem Backend
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          courseId,
          courseName,
          price,
        }),
      })

      const { sessionId } = await response.json()
      
      const stripe = await stripePromise
      if (stripe) {
        await stripe.redirectToCheckout({ sessionId })
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Es ist ein Fehler aufgetreten. Bitte versuche es erneut.')
    } finally {
      setLoading(false)
    }
  }

  const baseClasses = "relative flex items-center justify-center space-x-2 font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 hover:from-cyan-400 hover:to-blue-500 glow-cyan",
    secondary: "glass text-white px-8 py-4 hover:bg-white/10",
    outline: "border-2 border-cyan-500 text-cyan-400 px-8 py-4 hover:bg-cyan-500/10"
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {loading ? (
        <>
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          <span>Wird verarbeitet...</span>
        </>
      ) : (
        <>
          <CreditCard className="w-5 h-5" />
          <span>{buttonText}</span>
          <Lock className="w-4 h-4 opacity-70" />
        </>
      )}
    </button>
  )
}

// Preis-Anzeige Komponente
export function PriceTag({ price, originalPrice }: { price: number; originalPrice?: number }) {
  return (
    <div className="flex items-baseline space-x-3">
      <span className="text-4xl font-bold text-white">{price}€</span>
      {originalPrice && (
        <>
          <span className="text-xl text-gray-500 line-through">{originalPrice}€</span>
          <span className="text-sm text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">
            {Math.round((1 - price/originalPrice) * 100)}% sparen
          </span>
        </>
      )}
    </div>
  )
}

// Checkout-Seite Komponente
export function CheckoutPage({ course }: { course: any }) {
  return (
    <div className="min-h-screen bg-dark-bg pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="glass-card p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Linke Seite - Kurs-Info */}
            <div>
              <h1 className="text-3xl font-bold text-white mb-4">{course.title}</h1>
              <p className="text-gray-400 mb-6">{course.description}</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span>Sofortiger Zugriff nach Kauf</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span>14 Tage Geld-zurück-Garantie</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span>Lebenslanger Zugriff</span>
                </div>
              </div>

              <PriceTag price={course.price} originalPrice={course.originalPrice} />
            </div>

            {/* Rechte Seite - Checkout */}
            <div className="space-y-6">
              <div className="glass p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-4">Zahlung</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Sichere Zahlung via Stripe. Akzeptiert: Visa, Mastercard, American Express
                </p>
                <CheckoutButton 
                  courseId={course.id}
                  courseName={course.title}
                  price={course.price}
                  buttonText={`Jetzt für ${course.price}€ kaufen`}
                />
              </div>

              <div className="text-center text-gray-500 text-sm">
                <Lock className="w-4 h-4 inline mr-1" />
                SSL-verschlüsselte Zahlung
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
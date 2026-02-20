import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KI Expertenraum | Dein Zugang zur KI-Elite',
  description: 'Praxisnahe KI-Kurse für Unternehmer und Fachkräfte. Von EU AI Act Compliance bis zu No-Code Automatisierung. Werde Teil der KI-Elite.',
  keywords: 'KI Kurse, EU AI Act, ChatGPT, KI für Unternehmen, KI Schulung, KI Compliance, KI Expertenraum',
  authors: [{ name: 'Philipp Zerna' }],
  openGraph: {
    title: 'KI Expertenraum | Dein Zugang zur KI-Elite',
    description: 'Praxisnahe KI-Kurse für Unternehmer. Werde Teil der KI-Elite.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="dark">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}

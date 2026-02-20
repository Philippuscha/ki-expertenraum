import Link from 'next/link'
import { 
  Brain, 
  Zap, 
  Shield, 
  Users, 
  ArrowRight, 
  Sparkles,
  TrendingUp,
  Clock
} from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold text-white">KI Expertenraum</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#kurse" className="text-gray-300 hover:text-white transition">Kurse</Link>
              <Link href="/tools" className="text-gray-300 hover:text-white transition">Tools</Link>
              <Link href="/blog" className="text-gray-300 hover:text-white transition">Blog</Link>
              <Link href="#kontakt" className="text-gray-300 hover:text-white transition">Kontakt</Link>
            </div>
            <button className="btn-primary text-sm">
              Kurse entdecken
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300">Dein Zugang zur KI-Elite</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Meistere die </span>
              <span className="text-gradient">KI-Revolution</span>
              <br />
              <span className="text-white">praxisnah & ohne Hype</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              Von EU AI Act Compliance bis zu No-Code Automatisierung. 
              Werde Teil der KI-Elite – mit Kursen, die sofort wirken.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="btn-primary text-lg px-8 py-4">
                Alle Kurse ansehen
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Kostenlose Vorschau
              </button>
            </div>
            
            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="glass-card p-4">
                <div className="text-3xl font-bold text-cyan-400">22</div>
                <div className="text-sm text-gray-400">Expert-Kurse</div>
              </div>
              <div className="glass-card p-4">
                <div className="text-3xl font-bold text-purple-400">2.5h</div>
                <div className="text-sm text-gray-400">Ø Kursdauer</div>
              </div>
              <div className="glass-card p-4">
                <div className="text-3xl font-bold text-pink-400">100%</div>
                <div className="text-sm text-gray-400">Praxisnah</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Warum KI Expertenraum anders ist
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Kein theoretisches Geflüster. Kein Fachchinesisch. 
              Nur praxiserprobte Strategien von Experten für Profis.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 hover-lift glow-cyan">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Sofort umsetzbar</h3>
              <p className="text-gray-400">
                Jedes Konzept wird direkt mit praktischen Beispielen erklärt. 
                Wissen, das du heute lernst, morgen anwenden kannst.
              </p>
            </div>
            
            <div className="glass-card p-8 hover-lift glow-purple">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Rechtssicher</h3>
              <p className="text-gray-400">
                EU AI Act, DSGVO, Haftung – wir decken alle rechtlichen Aspekte ab, 
                damit du KI risikofrei nutzt.
              </p>
            </div>
            
            <div className="glass-card p-8 hover-lift">
              <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expert-Level</h3>
              <p className="text-gray-400">
                Ob KMU-Geschäftsführer oder Entscheider – unsere Kurse sind 
                für Profis aufbereitet, die Ergebnisse erwarten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kurs-Kategorien Preview */}
      <section id="kurse" className="py-20 bg-gradient-to-b from-dark-bg to-dark-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Entdecke unsere Expert-Kurse
            </h2>
            <p className="text-gray-400">
              22 Kurse in 6 Kategorien – von Compliance bis No-Code
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'EU AI Act & Compliance', count: '4 Kurse', icon: Shield, color: 'cyan' },
              { title: 'KI-Strategie & Governance', count: '5 Kurse', icon: TrendingUp, color: 'purple' },
              { title: 'Praxis-Tools & Automation', count: '6 Kurse', icon: Zap, color: 'pink' },
              { title: 'Datenschutz & Recht', count: '3 Kurse', icon: Shield, color: 'cyan' },
              { title: 'KI für Spezialisten', count: '2 Kurse', icon: Brain, color: 'purple' },
              { title: 'Schnellstart-Kurse', count: '2 Kurse', icon: Clock, color: 'pink' },
            ].map((category, index) => (
              <div key={index} className="glass-card p-6 cursor-pointer hover:border-cyan-500/50 transition-all duration-300">
                <div className={`w-10 h-10 bg-${category.color}-500/20 rounded-lg flex items-center justify-center mb-4`}>
                  <category.icon className={`w-5 h-5 text-${category.color}-400`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{category.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{category.count}</p>
                <Link href="#" className="text-cyan-400 text-sm flex items-center hover:underline">
                  Kurse ansehen <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="btn-primary">
              Alle 22 Kurse entdecken
              <ArrowRight className="inline ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
            
            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Die besten KI-Tools – kuratiert von Experten
                </h2>
                <p className="text-gray-400 mb-6">
                  Wir haben die besten Tools getestet. Von ChatGPT über Notion 
                  bis zu spezialisierten KI-Lösungen. Mit Affiliate-Links, die dich nichts extra kosten.
                </p>
                <Link href="/tools" className="btn-secondary inline-block">
                  Tool-Übersicht ansehen
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['ChatGPT', 'Claude', 'Notion', 'Canva', 'Zapier', 'Perplexity'].map((tool) => (
                  <div key={tool} className="glass p-3 rounded-lg text-center text-gray-300 text-sm">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Bereit für die KI-Elite?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Starte jetzt mit unseren Expert-Kursen. 
            14 Tage Geld-zurück-Garantie bei allen Kursen.
          </p>
          <button className="btn-primary text-lg px-10 py-5">
            Jetzt Kurs starten
            <ArrowRight className="inline ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-dark-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="w-6 h-6 text-cyan-400" />
                <span className="text-lg font-bold text-white">KI Expertenraum</span>
              </div>
              <p className="text-gray-400 text-sm">
                Dein Zugang zur KI-Elite. Praxisnahe Kurse für Unternehmer und Fachkräfte.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Kurse</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="#" className="hover:text-white">EU AI Act</Link></li>
                <li><Link href="#" className="hover:text-white">KI-Strategie</Link></li>
                <li><Link href="#" className="hover:text-white">Automation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Ressourcen</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/tools" className="hover:text-white">Tools</Link></li>
                <li><Link href="#" className="hover:text-white">Newsletter</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Kontakt</h4>
              <p className="text-gray-400 text-sm">zerna.philipp@gmail.com</p>
            </div>
          </div>
          <div className="border-t border-dark-border pt-8 text-center text-gray-400 text-sm">
            © 2026 KI Expertenraum. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </main>
  )
}
import Link from 'next/link'
import { 
  Brain, 
  Zap, 
  Shield, 
  Users, 
  ArrowRight, 
  Sparkles,
  TrendingUp,
  Clock,
  ChevronRight,
  Play,
  Star,
  Lock,
  Cpu,
  Network
} from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                <Brain className="relative w-8 h-8 text-primary" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                KI <span className="text-primary">Expertenraum</span>
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#kurse" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Kurse</Link>
              <Link href="/tools" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Tools</Link>
              <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Blog</Link>
              <Link href="#kontakt" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Kontakt</Link>
            </div>
            <button className="btn-primary text-sm px-6 py-2.5">
              Kurse entdecken
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 grid-bg-fine opacity-20" />
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-500/5 rounded-full blur-[150px]" />
        
        {/* Gradient Lines */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-40 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-gray-300">Premium KI-Ausbildung</span>
              <div className="w-1 h-1 rounded-full bg-primary/50" />
              <span className="text-sm text-primary">22 Expert-Kurse</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
              <span className="block text-white mb-2">Meistere die</span>
              <span className="block text-gradient mb-2">KI-Revolution</span>
              <span className="block text-white/90 text-3xl md:text-5xl lg:text-6xl font-medium">
                praxisnah & ohne Hype
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Von <span className="text-white">EU AI Act Compliance</span> bis zu 
              <span className="text-white"> No-Code Automatisierung</span>. 
              Premium-Kurse für Entscheider, die vorne bleiben wollen.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button className="btn-primary text-base px-8 py-4 flex items-center gap-2">
                <Play className="w-5 h-5" />
                Alle Kurse ansehen
              </button>
              <button className="btn-secondary text-base px-8 py-4">
                Kostenlose Vorschau
              </button>
            </div>
            
            {/* Premium Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="glass-card-hover p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">22</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Expert-Kurse</div>
              </div>
              <div className="glass-card-hover p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient-purple mb-2">2.5h</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Ø Kursdauer</div>
              </div>
              <div className="glass-card-hover p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient-cyan mb-2">100%</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Praxisnah</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-primary/50 to-transparent" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="badge-ai mb-6">
              <Star className="w-4 h-4" />
              Warum wir anders sind
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Kein Theorie-Bullshit.<br />
              <span className="text-gradient">Nur Ergebnisse.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Wir haben die KI-Kurse getestet, die da draußen kursieren. 
              90% sind Müll. Wir machen die anderen 10%.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Zap, 
                title: 'Sofort umsetzbar', 
                desc: 'Jedes Konzept wird direkt mit praktischen Beispielen erklärt. Wissen, das du heute lernst, morgen anwenden kannst.',
                color: 'cyan'
              },
              { 
                icon: Lock, 
                title: 'Rechtssicher', 
                desc: 'EU AI Act, DSGVO, Haftung – wir decken alle rechtlichen Aspekte ab, damit du KI risikofrei nutzt.',
                color: 'purple'
              },
              { 
                icon: Cpu, 
                title: 'Expert-Level', 
                desc: 'Ob KMU-Geschäftsführer oder Entscheider – unsere Kurse sind für Profis aufbereitet, die Ergebnisse erwarten.',
                color: 'pink'
              },
            ].map((feature, index) => (
              <div key={index} className="card-premium p-8 group hover:border-primary/30 transition-all duration-500">
                <div className={`w-14 h-14 rounded-xl bg-${feature.color}-500/10 border border-${feature.color}-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className={`w-7 h-7 text-${feature.color}-400`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section id="kurse" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-neutral-900/30 to-dark-bg" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="badge-ai mb-6">
              <Network className="w-4 h-4" />
              Kursübersicht
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              22 Kurse in 6 Kategorien
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Von Compliance bis Automation – alles, was du brauchst, 
              um KI in deinem Unternehmen zu etablieren.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'EU AI Act & Compliance', count: '4 Kurse', icon: Shield, color: 'primary', desc: 'Rechtssichere KI-Nutzung' },
              { title: 'KI-Strategie & Governance', count: '5 Kurse', icon: TrendingUp, color: 'purple', desc: 'Strategische Implementierung' },
              { title: 'Praxis-Tools & Automation', count: '6 Kurse', icon: Zap, color: 'pink', desc: 'No-Code & Low-Code Lösungen' },
              { title: 'Datenschutz & Recht', count: '3 Kurse', icon: Lock, color: 'primary', desc: 'DSGVO-konform arbeiten' },
              { title: 'KI für Spezialisten', count: '2 Kurse', icon: Cpu, color: 'purple', desc: 'Branchenspezifisch' },
              { title: 'Schnellstart-Kurse', count: '2 Kurse', icon: Clock, color: 'pink', desc: 'In 30 Minuten startklar' },
            ].map((category, index) => (
              <div key={index} className="glass-card-hover p-8 cursor-pointer group">
                <div className={`w-12 h-12 rounded-lg bg-${category.color}/10 border border-${category.color}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className={`w-6 h-6 text-${category.color}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{category.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{category.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{category.count}</span>
                  <Link href="#" className={`text-${category.color} text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    Entdecken <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button className="btn-primary px-10 py-4 flex items-center gap-2 mx-auto">
              Alle 22 Kurse entdecken
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Premium Tools Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="gradient-border p-1">
            <div className="bg-neutral-950 rounded-[calc(1rem-1px)] p-8 md:p-16 relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
              
              <div className="relative grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="badge-ai mb-6">
                    <Sparkles className="w-4 h-4" />
                    Tools & Ressourcen
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    Die besten KI-Tools.<br />
                    <span className="text-gradient">Getestet. Kuratiert.</span>
                  </h2>
                  <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                    Wir haben die besten Tools getestet. Von ChatGPT über Notion 
                    bis zu spezialisierten KI-Lösungen. Mit Affiliate-Links, 
                    die dich nichts extra kosten.
                  </p>
                  <Link href="/tools" className="btn-secondary inline-flex items-center gap-2">
                    Tool-Übersicht ansehen
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'ChatGPT', category: 'LLM', color: 'primary' },
                    { name: 'Claude', category: 'LLM', color: 'purple' },
                    { name: 'Notion', category: 'Productivity', color: 'gray' },
                    { name: 'Canva', category: 'Design', color: 'pink' },
                    { name: 'Zapier', category: 'Automation', color: 'primary' },
                    { name: 'Perplexity', category: 'Research', color: 'purple' },
                  ].map((tool, index) => (
                    <div key={index} className="glass-card-hover p-4 flex flex-col items-center text-center group">
                      <div className={`w-10 h-10 rounded-lg bg-${tool.color}/10 flex items-center justify-center mb-3`}>
                        <span className={`text-${tool.color} font-bold text-sm`}>{tool.name[0]}</span>
                      </div>
                      <span className="text-white font-medium text-sm">{tool.name}</span>
                      <span className="text-gray-500 text-xs mt-1">{tool.category}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.03] to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="badge-ai mb-8 mx-auto w-fit">
            <Sparkles className="w-4 h-4" />
            Bereit für den nächsten Schritt?
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Werde Teil der<br />
            <span className="text-gradient">KI-Elite</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Starte jetzt mit unseren Premium-Kursen. 
            14 Tage Geld-zurück-Garantie bei allen Kursen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary text-lg px-12 py-5 flex items-center gap-2">
              Jetzt starten
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-secondary text-lg px-12 py-5">
              Beratungstermin buchen
            </button>
          </div>
          
          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-8 mt-16 text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm">SSL-gesichert</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              <span className="text-sm">DSGVO-konform</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span className="text-sm">14 Tage Garantie</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Brain className="w-7 h-7 text-primary" />
                <span className="text-lg font-bold text-white">
                  KI <span className="text-primary">Expertenraum</span>
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Premium KI-Ausbildung für Unternehmer und Fachkräfte. 
                Praxisnah, rechtssicher, sofort umsetzbar.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Kurse</h4>
              <ul className="space-y-3 text-gray-500 text-sm">
                <li><Link href="#" className="hover:text-primary transition-colors">EU AI Act</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">KI-Strategie</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Automation</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Alle Kurse</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Ressourcen</h4>
              <ul className="space-y-3 text-gray-500 text-sm">
                <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                <li><Link href="/tools" className="hover:text-primary transition-colors">Tools</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Newsletter</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Über uns</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Kontakt</h4>
              <p className="text-gray-500 text-sm mb-2">Philipp Zerna</p>
              <a href="mailto:zerna.philipp@gmail.com" className="text-primary text-sm hover:underline">
                zerna.philipp@gmail.com
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm">
              © 2026 KI Expertenraum. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-6 text-gray-600 text-sm">
              <Link href="#" className="hover:text-gray-400 transition-colors">Impressum</Link>
              <Link href="#" className="hover:text-gray-400 transition-colors">Datenschutz</Link>
              <Link href="#" className="hover:text-gray-400 transition-colors">AGB</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

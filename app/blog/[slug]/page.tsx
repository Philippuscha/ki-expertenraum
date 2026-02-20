import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Linkedin } from 'lucide-react'

// In Produktion: Dynamisch aus MDX laden
export default function BlogPost({ params }: { params: { slug: string } }) {
  // Beispiel-Daten - in Produktion aus MDX-Datei laden
  const post = {
    title: 'EU AI Act für KMU: Das müssen Sie 2026 wissen',
    date: '20. Februar 2026',
    readTime: '5 Minuten',
    author: 'Philipp Zerna',
    tags: ['EU AI Act', 'Compliance', 'KMU', 'KI-Recht'],
    content: `
      <p>Der EU AI Act ist nicht mehr nur ein Gesetzesvorhaben – er ist seit August 2024 in Kraft und betrifft ab Februar 2026 auch direkt kleine und mittlere Unternehmen.</p>
      
      <h2>Die wichtigsten Fristen</h2>
      <ul>
        <li><strong>August 2024:</strong> Verordnung in Kraft getreten</li>
        <li><strong>Februar 2026:</strong> Verbotene Praktiken müssen gestoppt werden</li>
        <li><strong>August 2026:</strong> High-Risk Pflichten vollständig umgesetzt</li>
      </ul>
      
      <h2>Was ist der EU AI Act?</h2>
      <p>Der EU AI Act ist das weltweit erste umfassende KI-Gesetz. Er folgt einem risikobasierten Ansatz mit vier Risikostufen.</p>
      
      <h2>Konkrete Pflichten für KMU</h2>
      <p>Unternehmen müssen eine KI-Inventarisierung durchführen, Risikobewertungen erstellen und umfassende Dokumentation führen.</p>
      
      <h2>Fazit</h2>
      <p>Der EU AI Act ist kein Papier­tiger. Aber mit systematischer Vorgehensweise ist Compliance für KMU machbar.</p>
    `,
    relatedCourses: [
      {
        title: 'EU AI Act für KMU: Praxisumsetzung 2026',
        price: 39,
        slug: 'eu-ai-act-kmu',
      }
    ]
  }

  return (
    <main className="min-h-screen bg-dark-bg pt-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zurück zum Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map(tag => (
              <span key={tag} className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between py-6 border-y border-dark-border">
            <div className="flex items-center space-x-6 text-gray-400">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime} Lesezeit
              </span>
              <span>Von {post.author}</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="p-2 glass rounded-lg hover:bg-white/10 transition">
                <Twitter className="w-4 h-4 text-gray-400" />
              </button>
              <button className="p-2 glass rounded-lg hover:bg-white/10 transition">
                <Linkedin className="w-4 h-4 text-gray-400" />
              </button>
              <button className="p-2 glass rounded-lg hover:bg-white/10 transition">
                <Share2 className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div 
          className="prose prose-invert prose-lg max-w-none mb-12
            prose-headings:text-white prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
            prose-p:text-gray-300 prose-p:leading-relaxed
            prose-ul:text-gray-300 prose-li:marker:text-cyan-400
            prose-strong:text-white prose-strong:font-semibold
            prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA Box */}
        <div className="glass-card p-8 my-12 border-cyan-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">
            Wollen Sie mehr erfahren?
          </h3>
          <p className="text-gray-400 mb-6">
            Mein Kurs führt Sie Schritt für Schritt durch die EU AI Act Umsetzung – 
            speziell für kleine und mittlere Unternehmen.
          </p>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-3xl font-bold text-white">39€</span>
              <span className="text-gray-500 ml-2 line-through">79€</span>
            </div>
            <button className="btn-primary">
              Zum Kurs
            </button>
          </div>
        </div>

        {/* Tags */}
        <div className="flex items-center space-x-2 py-8 border-t border-dark-border">
          <span className="text-gray-500">Tags:</span>
          {post.tags.map(tag => (
            <Link 
              key={tag} 
              href={`/blog/tag/${tag.toLowerCase().replace(' ', '-')}`}
              className="text-cyan-400 hover:underline"
            >
              {tag}
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="glass-card p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            KI-Updates erhalten
          </h3>
          <p className="text-gray-400 mb-6">
            Melden Sie sich für unseren Newsletter an und erhalten Sie die neuesten 
            Entwicklungen zu KI und Compliance direkt in Ihr Postfach.
          </p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Ihre E-Mail-Adresse"
              className="flex-1 bg-dark-bg border border-dark-border rounded-l-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
            />
            <button className="btn-primary rounded-l-none">
              Anmelden
            </button>
          </div>
        </div>
      </article>
    </main>
  )
}
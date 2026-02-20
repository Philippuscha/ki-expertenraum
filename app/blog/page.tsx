import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'

// In Produktion: Diese Daten aus MDX-Dateien laden
const blogPosts = [
  {
    slug: 'eu-ai-act-kmu-2026',
    title: 'EU AI Act für KMU: Das müssen Sie 2026 wissen',
    excerpt: 'Der EU AI Act ist seit 2025 verbindlich. Erfahren Sie, welche Pflichten kleine und mittlere Unternehmen erfüllen müssen.',
    date: '20. Februar 2026',
    readTime: '5 Min.',
    tags: ['EU AI Act', 'Compliance', 'KMU'],
    featured: true,
  },
  {
    slug: 'chatgpt-excel-automatisierung',
    title: 'ChatGPT für Excel: So automatisieren Sie Formeln',
    excerpt: 'Lernen Sie, wie Sie mit ChatGPT komplexe Excel-Formeln generieren und Ihre Datenanalyse beschleunigen.',
    date: '15. Februar 2026',
    readTime: '8 Min.',
    tags: ['ChatGPT', 'Excel', 'Produktivität'],
    featured: false,
  },
  {
    slug: 'ki-risikoanlage-leitfaden',
    title: 'KI-Risikoanalyse: Der komplette Leitfaden für Unternehmen',
    excerpt: 'Systematische Identifikation und Bewertung von KI-Risiken nach EU AI Act. Mit praktischer Scorecard-Vorlage.',
    date: '10. Februar 2026',
    readTime: '12 Min.',
    tags: ['Risikomanagement', 'EU AI Act', 'Compliance'],
    featured: false,
  },
]

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <main className="min-h-screen bg-dark-bg pt-20">
      {/* Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              KI-<span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Praxisnahe Guides, aktuelle Entwicklungen und Expertentipps rund um Künstliche Intelligenz im Unternehmen.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={`/blog/${featuredPost.slug}`} className="block">
              <div className="glass-card overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl h-64 flex items-center justify-center">
                    <span className="text-6xl">📝</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      {featuredPost.tags.map(tag => (
                        <span key={tag} className="text-gray-400 text-sm">{tag}</span>
                      ))}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-400 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center space-x-6 text-gray-500 text-sm">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Alle Artikel</h2>
            
            {/* Filter Tags */}
            <div className="flex space-x-2">
              {['Alle', 'EU AI Act', 'ChatGPT', 'Produktivität'].map((tag, index) => (
                <button
                  key={tag}
                  className={`px-4 py-2 rounded-full text-sm transition ${
                    index === 0 
                      ? 'bg-cyan-500/20 text-cyan-400' 
                      : 'glass text-gray-400 hover:text-white'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <div className="glass-card h-full hover:border-cyan-500/30 transition-all duration-300">
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 h-48 rounded-t-2xl flex items-center justify-center">
                    <span className="text-5xl">📚</span>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-gray-500 text-sm">
                      <span>{post.date}</span>
                      <span className="flex items-center text-cyan-400 group-hover:translate-x-1 transition">
                        Lesen <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12 space-x-2">
            <button className="glass px-4 py-2 rounded-lg text-gray-400 hover:text-white disabled:opacity-50" disabled>
              ← Zurück
            </button>
            <button className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-lg">1</button>
            <button className="glass px-4 py-2 rounded-lg text-gray-400 hover:text-white">2</button>
            <button className="glass px-4 py-2 rounded-lg text-gray-400 hover:text-white">3</button>
            <button className="glass px-4 py-2 rounded-lg text-gray-400 hover:text-white">
              Weiter →
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
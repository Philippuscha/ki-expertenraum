import Link from 'next/link'
import { Search, Star, ExternalLink } from 'lucide-react'
import { useState } from 'react'

interface Tool {
  name: string
  description: string
  url: string
  icon: string
  featured?: boolean
}

interface ToolCategory {
  id: string
  title: string
  icon: string
  tools: Tool[]
}

const toolCategories: ToolCategory[] = [
  {
    id: 'ki-tools',
    title: 'KI-Tools',
    icon: '🤖',
    tools: [
      { name: 'ChatGPT', description: 'Der Klassiker für Texte, Brainstorming & Analyse', url: 'https://openai.com', icon: '💬' },
      { name: 'Claude', description: 'Alternative zu ChatGPT, besonders gut für lange Dokumente', url: 'https://anthropic.com', icon: '🧠', featured: true },
      { name: 'Perplexity AI', description: 'KI-Suche mit Quellenangaben', url: 'https://perplexity.ai', icon: '🔍' },
      { name: 'Notion AI', description: 'KI direkt in deinem Notion-Workspace', url: 'https://notion.so', icon: '📝' },
    ]
  },
  {
    id: 'produktivitaet',
    title: 'Produktivität & Organisation',
    icon: '📋',
    tools: [
      { name: 'Notion', description: 'Wissensmanagement, Projekte, Datenbanken', url: 'https://notion.so', icon: '📊', featured: true },
      { name: 'Trello', description: 'Kanban-Boards, einfache Projekte', url: 'https://trello.com', icon: '🎯' },
      { name: 'Obsidian', description: 'Lokales Notizen-System, vernetztes Denken', url: 'https://obsidian.md', icon: '🧩' },
      { name: 'Todoist', description: 'Aufgabenverwaltung, nichts vergessen', url: 'https://todoist.com', icon: '☑️' },
    ]
  },
  {
    id: 'design',
    title: 'Design & Visualisierung',
    icon: '🎨',
    tools: [
      { name: 'Canva', description: 'Grafiken, Präsentationen, Social Media', url: 'https://canva.com', icon: '🖼️', featured: true },
      { name: 'Adobe Express', description: 'Schnelle Designs, Videos', url: 'https://adobe.com/express', icon: '🎬' },
      { name: 'Remove.bg', description: 'Hintergründe automatisch entfernen', url: 'https://remove.bg', icon: '✂️' },
      { name: 'Coolors', description: 'Farbpaletten erstellen', url: 'https://coolors.co', icon: '🌈' },
    ]
  },
  {
    id: 'texte',
    title: 'Texte & Inhalte',
    icon: '✍️',
    tools: [
      { name: 'Grammarly', description: 'Rechtschreibung & Stil verbessern', url: 'https://grammarly.com', icon: '✅' },
      { name: 'Hemingway Editor', description: 'Texte klarer & verständlicher machen', url: 'https://hemingwayapp.com', icon: '📝' },
      { name: 'DeepL', description: 'Bessere Übersetzungen als Google', url: 'https://deepl.com', icon: '🌍' },
      { name: 'Otter.ai', description: 'Sprache zu Text transkribieren', url: 'https://otter.ai', icon: '🎤' },
    ]
  },
  {
    id: 'unternehmer',
    title: 'Für Unternehmer & KMU',
    icon: '🏢',
    tools: [
      { name: 'Mailchimp', description: 'Newsletter & E-Mail-Marketing', url: 'https://mailchimp.com', icon: '📧' },
      { name: 'Calendly', description: 'Terminbuchung ohne Hin-und-Her', url: 'https://calendly.com', icon: '📅', featured: true },
      { name: 'Loom', description: 'Bildschirmvideos aufnehmen', url: 'https://loom.com', icon: '🎥' },
      { name: 'Zapier', description: 'Apps automatisieren & verbinden', url: 'https://zapier.com', icon: '⚡' },
    ]
  },
  {
    id: 'sicherheit',
    title: 'Sicherheit & Datenschutz',
    icon: '🔒',
    tools: [
      { name: '1Password', description: 'Passwort-Chaos & Hacks', url: 'https://1password.com', icon: '🔐', featured: true },
      { name: 'ProtonMail', description: 'Datenschutz-freundliche E-Mails', url: 'https://proton.me', icon: '🔏' },
      { name: 'NordVPN', description: 'Sicheres Surfen & Geo-Sperren', url: 'https://nordvpn.com', icon: '🛡️' },
      { name: 'SimpleLogin', description: 'Wegwerf-E-Mail-Adressen', url: 'https://simplelogin.io', icon: '📨' },
    ]
  },
  {
    id: 'weiterbildung',
    title: 'Weiterbildung',
    icon: '📚',
    tools: [
      { name: 'Udemy', description: 'Tausende Kurse zu allen Themen', url: 'https://udemy.com', icon: '🎓' },
      { name: 'YouTube', description: 'Kostenlose Tutorials', url: 'https://youtube.com/learning', icon: '▶️' },
      { name: 'Coursera', description: 'Kurse von Universitäten', url: 'https://coursera.org', icon: '🏛️' },
      { name: 'KI-Podcast', description: 'Bleib auf dem Laufenden', url: 'https://spotify.com', icon: '🎧' },
    ]
  },
]

const quickStartTools = [
  { name: 'Notion', icon: '📊', url: 'https://notion.so' },
  { name: 'ChatGPT/Claude', icon: '💬', url: 'https://openai.com' },
  { name: 'Canva', icon: '🖼️', url: 'https://canva.com' },
]

const freeAlternatives = [
  { paid: 'Notion', free: 'Google Docs + Sheets' },
  { paid: 'Canva Pro', free: 'Canva Free Version' },
  { paid: '1Password', free: 'Bitwarden (Open Source)' },
  { paid: 'Otter', free: 'Whisper (OpenAI, selbst hosten)' },
  { paid: 'Zapier', free: 'Make.com (kostenloser Plan)' },
]

const filters = [
  { id: 'alle', label: 'Alle' },
  { id: 'ki-tools', label: 'KI-Tools' },
  { id: 'produktivitaet', label: 'Produktivität & Organisation' },
  { id: 'design', label: 'Design & Visualisierung' },
  { id: 'texte', label: 'Texte & Inhalte' },
  { id: 'unternehmer', label: 'Für Unternehmer & KMU' },
  { id: 'sicherheit', label: 'Sicherheit & Datenschutz' },
  { id: 'weiterbildung', label: 'Weiterbildung' },
]

export default function ToolsPage() {
  const [activeFilter, setActiveFilter] = useState('alle')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCategories = activeFilter === 'alle' 
    ? toolCategories 
    : toolCategories.filter(cat => cat.id === activeFilter)

  return (
    <main className="min-h-screen bg-dark-bg pt-20">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]" />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center text-3xl">
                  🧰
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">KI Tools & Ressourcen</h1>
                  <p className="text-gray-400 mt-1">Von Experten getestet, für die KI-Elite kuratiert</p>
                </div>
              </div>
              
              {/* Search */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Tools suchen..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-dark-bg border border-dark-border rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'glass text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-12">
        {/* Quick Start */}
        <div className="glass-card p-6 border-cyan-500/20">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🚀</span>
            <h2 className="text-xl font-bold text-white">Schnellstart-Checkliste</h2>
          </div>
          <p className="text-gray-400 mb-6">Die ersten 3 Tools, die du dir heute anschauen solltest:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickStartTools.map((tool) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 glass rounded-xl hover:border-cyan-500/30 transition-all"
              >
                <span className="text-2xl">{tool.icon}</span>
                <span className="font-medium text-white">{tool.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Tool Categories */}
        {filteredCategories.map((category) => (
          <div key={category.id}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{category.icon}</span>
              <div>
                <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                <span className="text-sm text-gray-500">{category.tools.length} Tools</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.tools.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-5 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <h3 className="font-bold text-white group-hover:text-cyan-400 transition">{tool.name}</h3>
                      {tool.featured && (
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      )}
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition" />
                  </div>
                  <p className="text-gray-400 text-sm">{tool.description}</p>
                </a>
              ))}
            </div>
          </div>
        ))}

        {/* Free Alternatives */}
        <div className="glass-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">💡</span>
            <h2 className="text-xl font-bold text-white">Kostenlose Alternativen</h2>
          </div>
          <p className="text-gray-400 mb-6">Wenn du Budget sparen willst:</p>
          <div className="space-y-3">
            {freeAlternatives.map((alt) => (
              <div key={alt.paid} className="flex items-center gap-4 p-3 glass rounded-lg">
                <span className="text-gray-400 line-through">{alt.paid}</span>
                <span className="text-gray-600">→</span>
                <span className="text-cyan-400 font-medium">{alt.free}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Affiliate Disclaimer */}
        <div className="glass-card p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-gray-300 font-medium">Affiliate-Links</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Bei Kauf über diese Links erhalte ich eine kleine Provision. Du zahlst keinen Cent mehr – 
            unterstützt aber meine Arbeit.
          </p>
          <a 
            href="mailto:zerna.philipp@gmail.com" 
            className="inline-flex items-center gap-2 text-cyan-400 hover:underline"
          >
            ✉️ zerna.philipp@gmail.com
          </a>
          <p className="text-gray-500 text-xs mt-4">Letzte Aktualisierung: Februar 2026</p>
        </div>
      </div>
    </main>
  )
}
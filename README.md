# KI Expertenraum

**Dein Zugang zur KI-Elite**

Moderne KI-Website mit Next.js, Stripe-Zahlung und Blog-System.
URL: https://ki-expertenraum.de

## 🚀 Features

- ⚡ **Next.js 14** mit App Router
- 🎨 **Modernes Dark Design** mit Tailwind CSS
- 💳 **Stripe Integration** für Kurs-Verkäufe
- 📝 **Blog-System** mit SEO-Optimierung
- 🛠️ **Tools & Ressourcen** Seite (Affiliate-Marketing)
- 📱 **100% Responsive**
- 🔍 **SEO-freundlich** (Meta-Tags, Sitemap)
- ✨ **Animationen** mit Framer Motion

## 📁 Projektstruktur

```
ki-website/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes (Stripe Checkout)
│   ├── blog/              # Blog-Seiten
│   ├── tools/             # Tools & Ressourcen Seite
│   ├── layout.tsx         # Root Layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global Styles
├── components/            # React Komponenten
│   └── Checkout.tsx       # Stripe Checkout
├── content/              # Blog-Inhalte (MDX)
│   └── blog/
├── data/                 # Daten
│   └── courses.ts        # Alle 22 Kurse
├── lib/                  # Utility-Funktionen
├── public/               # Statische Dateien
└── next.config.js        # Next.js Konfiguration
```

## 🚀 Quick Deploy (3 Schritte)

### 1. GitHub Repository erstellen
```bash
# Lokal im Projektordner:
git init
git add .
git commit -m "Initial commit: KI Expertenraum"
git branch -M main
git remote add origin https://github.com/DEIN_USERNAME/ki-expertenraum.git
git push -u origin main
```

### 2. Vercel verbinden
1. Gehe zu [vercel.com](https://vercel.com)
2. "Add New Project"
3. GitHub Account verbinden
4. Repository "ki-expertenraum" auswählen
5. "Deploy"

### 3. Domain verknüpfen
1. In Vercel: Settings → Domains
2. "Add" → `ki-expertenraum.de`
3. DNS-Records bei Hostinger eintragen:
   - Type: A | Name: @ | Value: 76.76.21.21
   - Type: CNAME | Name: www | Value: cname.vercel-dns.com

## 🛠️ Lokale Entwicklung

```bash
# Dependencies installieren
npm install

# Dev-Server starten
npm run dev

# Build erstellen
npm run build
```

## 🔑 Umgebungsvariablen

`.env.local` erstellen:
```env
# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Domain
NEXT_PUBLIC_URL=https://ki-expertenraum.de

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📝 Blog-Posts hinzufügen

1. Neue `.mdx` Datei in `content/blog/` erstellen
2. Frontmatter:
```md
---
title: "Titel"
description: "Meta-Beschreibung"
date: "2026-02-20"
author: "Philipp Zerna"
tags: ["Tag1", "Tag2"]
---

Inhalt hier...
```

## 💳 Stripe einrichten

1. [stripe.com](https://stripe.com) Account erstellen
2. Produkte für Kurse anlegen
3. Preis-IDs in `data/courses.ts` eintragen
4. Webhook-Endpunkt: `/api/webhooks/stripe`

## 🔗 Affiliate-Links einfügen

In `app/tools/page.tsx` unter `toolCategories`:
```typescript
{
  name: 'Notion',
  description: '...',
  url: 'https://affiliate.notion.so/DEINID',  // ← Hier ändern
  icon: '📊'
}
```

## 📧 Kontakt

Philipp Zerna
Email: zerna.philipp@gmail.com

---

© 2026 KI Expertenraum. Alle Rechte vorbehalten.
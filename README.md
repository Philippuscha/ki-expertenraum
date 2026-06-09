# KI-Expertenraum Website

Premium KI-Beratung für den Mittelstand. Praxiserprobt, DSGVO-konform, messbar erfolgreich.

## Neue Struktur (Refactored)

### Layout-System

Die Website verwendet jetzt ein **einheitliches Layout-System** mit geteilten Komponenten:

```
ki-expertenraum-repo/
├── layouts/
│   └── base.html              # Basis-Template (nicht direkt verwendet)
├── assets/
│   ├── css/
│   │   └── main.css           # Haupt-Stylesheet (9KB)
│   └── js/
│       └── main.js            # Shared JavaScript (3.5KB)
├── index.html                 # Homepage
├── kontakt.html              # Kontaktseite
├── kurse/
│   └── index.html            # Kurse-Übersicht
├── services/
│   └── index.html            # Services
├── artikel/
│   └── index.html            # Artikel-Übersicht
├── glossar/
│   └── index.html            # KI-Glossar
├── impressum/
│   └── index.html            # Impressum
├── datenschutz/
│   └── index.html            # Datenschutz
└── blog/                     # Blog-Artikel
└── artikel/                  # Detail-Artikel
```

### Design-System

**Farben:**
- `--bg-primary: #0a0a0a` - Haupt-Hintergrund
- `--bg-secondary: #111111` - Sekundärer Hintergrund
- `--bg-card: #141414` - Karten-Hintergrund
- `--accent: #c9a962` - Gold-Akzent
- `--text-primary: #ffffff` - Primärer Text
- `--text-secondary: rgba(255,255,255,0.7)` - Sekundärer Text

**Typography:**
- Headlines: `Playfair Display` (Serif)
- Body: `Inter` (Sans-Serif)

**Breakpoints:**
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px

## Navigation

Alle Seiten verwenden die **identische Navigation**:

```html
<nav class="nav" id="nav">
    <div class="nav-container">
        <a href="/" class="logo">...
        <ul class="nav-links">...</ul>
        <a href="/kontakt.html" class="nav-cta">Beratung anfragen</a>
        <button class="mobile-menu-btn">...</button>
    </div>
</nav>
```

Navigation-Links:
- Start
- Kurse
- Services
- Artikel
- Glossar
- Kontakt

## Footer

Alle Seiten verwenden den **identischen Footer** mit:
- Brand-Logo
- Angebots-Links
- Rechtliche Links
- Social Media Links
- Copyright

## Neue Seite hinzufügen

Um eine neue Seite mit dem einheitlichen Layout zu erstellen:

1. **HTML-Grundgerüst kopieren:**

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SEITENTITEL | KI-Expertenraum</title>
    <meta name="description" content="META-BESCHREIBUNG">
    <link rel="icon" type="image/svg+xml" href="/images/favicon.svg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/assets/css/main.css">
    <style>
        /* Seiten-spezifische Styles hier */
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav class="nav" id="nav">...</nav>
    <div class="mobile-menu" id="mobileMenu">...</div>

    <main>
        <!-- Seiteninhalt hier -->
    </main>

    <!-- Footer -->
    <footer class="footer">...</footer>
    
    <script src="/assets/js/main.js"></script>
</body>
</html>
```

2. **Aktiven Nav-Link markieren:**
   - Füge `class="active"` zum entsprechenden Link in `.nav-links` hinzu

3. **Seiten-spezifische CSS hinzufügen:**
   - Im `<style>`-Bereich im `<head>`

## Layout aktualisieren

Um das Layout zu ändern:

1. **Globale Änderungen** (betrifft alle Seiten):
   - Bearbeite `/assets/css/main.css`
   - Bearbeite `/assets/js/main.js`

2. **Nur Navigation/Footer ändern:**
   - Kopiere den neuen Code in alle HTML-Dateien
   - Oder verwende ein Build-Tool (z.B. Node.js + templating)

3. **Nur eine Seite ändern:**
   - Bearbeite die spezifische HTML-Datei
   - Füge seiten-spezifisches CSS im `<style>`-Block hinzu

## Utility Classes

Verfügbare Utility-Klassen:

```css
.serif              /* Playfair Display Font */
.text-accent        /* Gold-Farbe */
.text-gradient      /* Gold-Gradient Text */
.container          /* Max-width 1400px, centered */
.section-label      /* Kleine, goldene Überschrift */
.btn                /* Basis-Button */
.btn-primary        /* Gold-Button */
.btn-secondary      /* Outline-Button */
```

## CSS Variablen

Verfügbare CSS-Variablen für seiten-spezifische Styles:

```css
--bg-primary: #0a0a0a;
--bg-secondary: #111111;
--bg-tertiary: #1a1a1a;
--bg-card: #141414;
--text-primary: #ffffff;
--text-secondary: rgba(255, 255, 255, 0.7);
--text-muted: rgba(255, 255, 255, 0.5);
--accent: #c9a962;
--accent-light: #d4b978;
--border: rgba(255, 255, 255, 0.08);
--transition-base: 0.3s ease;
--transition-slow: 0.5s cubic-bezier(0.16, 1, 0.3, 1);
--shadow-lg: 0 20px 60px rgba(0, 0, 0, 0.5);
--shadow-glow: 0 0 40px rgba(201, 169, 98, 0.3);
```

## JavaScript Funktionen

Verfügbare globale Funktionen:

```javascript
openMobileMenu()     // Mobiles Menü öffnen
closeMobileMenu()    // Mobiles Menü schließen
toggleMobileMenu()   // Mobiles Menü umschalten
copyToClipboard(text, button)  // Text kopieren
```

## Migration Status

| Bereich | Status | Anzahl |
|---------|--------|--------|
| Hauptseiten | ✓ Fertig | 8 |
| Artikel-Detailseiten | ⏳ Offen | ~14 |
| Blog-Artikel | ⏳ Offen | ~11 |
| Unterordner | ⏳ Offen | ~5 |

**Letztes Update:** 2026-05-29

---

© 2026 KI-Expertenraum · Philipp Zerna

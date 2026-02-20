#!/bin/bash
# KI Expertenraum - GitHub Push Script
# Führe dies im ki-website Ordner aus

echo "🚀 Pushe KI Expertenraum zu GitHub..."

# Git initialisieren (falls noch nicht geschehen)
git init

# Alle Dateien hinzufügen
git add .

# Commit
git commit -m "Initial commit: KI Expertenraum - Dein Zugang zur KI-Elite

- Homepage mit modernem Dark Design
- Tools & Ressourcen Seite
- Blog-System vorbereitet
- Stripe Checkout integriert
- Alle 22 Kurse hinterlegt
- Responsive Design"

# Branch auf main setzen
git branch -M main

# Remote hinzufügen ( passe USERNAME an )
git remote add origin https://github.com/USERNAME/ki-expertenraum.git

# Push
git push -u origin main

echo "✅ Fertig! Jetzt auf Vercel verbinden:"
echo "1. Gehe zu https://vercel.com"
echo "2. Importiere das Repository"
echo "3. Füge Umgebungsvariablen hinzu"
echo "4. Deploy!"
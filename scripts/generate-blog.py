#!/usr/bin/env python3
"""
Automatischer Blog-Generator für ki-expertenraum.de
Konvertiert Markdown-Dateien zu HTML und aktualisiert die Blog-Übersicht
Mit Cover-Bild Unterstützung
"""

import os
import re
import markdown
from datetime import datetime
from pathlib import Path
import base64

# Konfiguration
CONTENT_DIR = Path("content/blog")
OUTPUT_DIR = Path("blog")
INDEX_FILE = Path("blog.html")

def parse_frontmatter(content):
    """Extrahiert YAML-Frontmatter aus Markdown"""
    pattern = r'^---\s*\n(.*?)\n---\s*\n(.*)$'
    match = re.match(pattern, content, re.DOTALL)
    
    if match:
        frontmatter = match.group(1)
        body = match.group(2)
        
        metadata = {}
        for line in frontmatter.strip().split('\n'):
            if ':' in line:
                key, value = line.split(':', 1)
                metadata[key.strip()] = value.strip().strip('"').strip("'")
        
        return metadata, body
    
    return {}, content

def create_slug(title):
    """Erstellt URL-freundlichen Slug aus Titel"""
    slug = title.lower()
    slug = re.sub(r'[ä]', 'ae', slug)
    slug = re.sub(r'[ö]', 'oe', slug)
    slug = re.sub(r'[ü]', 'ue', slug)
    slug = re.sub(r'[ß]', 'ss', slug)
    slug = re.sub(r'[^a-z0-9\s]', '', slug)
    slug = re.sub(r'\s+', '-', slug)
    return slug[:60].strip('-')

def generate_article_html(metadata, content_html, filename):
    """Generiert vollständige HTML-Seite für einen Artikel"""
    
    title = metadata.get('title', 'Artikel')
    date = metadata.get('date', datetime.now().strftime('%d.%m.%Y'))
    author = metadata.get('author', 'Philipp Zerna')
    description = metadata.get('description', '')
    cover_image = metadata.get('cover_image', '')
    
    # Cover-Bild HTML
    cover_html = ''
    if cover_image:
        cover_html = f'''<div class="cover-image">
            <img src="{cover_image}" alt="{title}" style="width:100%; max-height:400px; object-fit:cover; border-radius:8px; margin-bottom:30px;">
        </div>'''
    
    return f'''<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="{description}">
    <title>{title} | KI-Expertenraum</title>
    <style>
        body {{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.7;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
            background: #fff;
        }}
        .meta {{
            color: #666;
            font-size: 0.9em;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 1px solid #eee;
        }}
        h1 {{
            font-size: 2.2em;
            margin-bottom: 10px;
            color: #1a1a1a;
            line-height: 1.3;
        }}
        h2 {{
            font-size: 1.6em;
            margin-top: 40px;
            margin-bottom: 20px;
            color: #1a1a1a;
            border-bottom: 2px solid #4CAF50;
            padding-bottom: 10px;
        }}
        h3 {{
            font-size: 1.3em;
            margin-top: 30px;
            margin-bottom: 15px;
            color: #333;
        }}
        blockquote {{
            border-left: 4px solid #4CAF50;
            margin: 20px 0;
            padding: 15px 20px;
            background: #f9f9f9;
            font-style: italic;
        }}
        ul, ol {{
            margin: 15px 0;
            padding-left: 25px;
        }}
        li {{
            margin: 8px 0;
        }}
        table {{
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            font-size: 0.95em;
        }}
        th {{
            background: #4CAF50;
            color: white;
            padding: 12px;
            text-align: left;
            font-weight: 600;
        }}
        td {{
            padding: 12px;
            border-bottom: 1px solid #ddd;
        }}
        tr:nth-child(even) {{
            background: #f9f9f9;
        }}
        pre {{
            background: #2d2d2d;
            color: #f8f8f2;
            padding: 20px;
            border-radius: 8px;
            overflow-x: auto;
            font-family: 'Consolas', 'Monaco', monospace;
            font-size: 0.9em;
            line-height: 1.5;
        }}
        code {{
            background: #f4f4f4;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Consolas', 'Monaco', monospace;
            font-size: 0.9em;
        }}
        pre code {{
            background: none;
            padding: 0;
        }}
        .back-link {{
            display: inline-block;
            margin-bottom: 30px;
            color: #4CAF50;
            text-decoration: none;
            font-weight: 600;
        }}
        .back-link:hover {{
            text-decoration: underline;
        }}
        .cover-image {{
            margin: -40px -20px 30px -20px;
            max-height: 400px;
            overflow: hidden;
        }}
        .cover-image img {{
            width: 100%;
            height: 400px;
            object-fit: cover;
        }}
        footer {{
            margin-top: 50px;
            padding-top: 30px;
            border-top: 1px solid #eee;
            color: #666;
            font-size: 0.9em;
            font-style: italic;
        }}
        img {{
            max-width: 100%;
            height: auto;
            border-radius: 8px;
        }}
        a {{
            color: #4CAF50;
        }}
    </style>
</head>
<body>
    <a href="blog.html" class="back-link">← Zurück zur Übersicht</a>
    
    <article>
        <h1>{title}</h1>
        
        <div class="meta">
            <strong>Veröffentlicht:</strong> {date} &nbsp;|&nbsp; 
            <strong>Autor:</strong> {author}
        </div>
        
        {cover_html}
        
        {content_html}
    </article>
    
    <footer>
        <p><a href="blog.html">← Alle Artikel anzeigen</a></p>
        <p>© 2026 KI-Expertenraum | Philipp Zerna</p>
    </footer>
</body>
</html>'''

def generate_blog_index(articles):
    """Generiert die Blog-Übersichtsseite mit Cover-Bildern"""
    
    # Sortiere nach Datum (neueste zuerst)
    articles_sorted = sorted(articles, key=lambda x: x.get('date', ''), reverse=True)
    
    article_list = []
    for article in articles_sorted:
        title = article.get('title', 'Ohne Titel')
        date = article.get('date', '')
        description = article.get('description', '')
        slug = article.get('slug', '')
        cover_image = article.get('cover_image', '')
        
        # Cover-Bild für die Übersicht (kleines Thumbnail)
        cover_thumb = ''
        if cover_image:
            cover_thumb = f'<div class="card-image"><img src="{cover_image}" alt="{title}"></div>'
        
        article_list.append(f'''
        <article class="blog-card">
            {cover_thumb}
            <div class="card-content">
                <h2><a href="blog/{slug}.html">{title}</a></h2>
                <p class="date">{date}</p>
                <p class="excerpt">{description}</p>
                <a href="blog/{slug}.html" class="read-more">Weiterlesen →</a>
            </div>
        </article>
        ''')
    
    articles_html = '\n'.join(article_list)
    
    return f'''<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Blog - KI-Expertenraum: Praktische Guides, Tutorials und Tipps zu Künstlicher Intelligenz für Unternehmer">
    <title>Blog | KI-Expertenraum</title>
    <style>
        * {{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }}
        
        body {{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.7;
            color: #333;
            background: #f5f5f5;
        }}
        
        header {{
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 60px 20px;
            text-align: center;
        }}
        
        header h1 {{
            font-size: 2.5em;
            margin-bottom: 10px;
        }}
        
        header p {{
            font-size: 1.2em;
            opacity: 0.9;
        }}
        
        .container {{
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
        }}
        
        .blog-card {{
            background: white;
            margin-bottom: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            transition: transform 0.2s;
            overflow: hidden;
        }}
        
        .blog-card:hover {{
            transform: translateY(-5px);
        }}
        
        .card-image {{
            width: 100%;
            height: 200px;
            overflow: hidden;
        }}
        
        .card-image img {{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }}
        
        .card-content {{
            padding: 30px;
        }}
        
        .blog-card h2 {{
            font-size: 1.5em;
            margin-bottom: 10px;
        }}
        
        .blog-card h2 a {{
            color: #333;
            text-decoration: none;
        }}
        
        .blog-card h2 a:hover {{
            color: #667eea;
        }}
        
        .date {{
            color: #666;
            font-size: 0.9em;
            margin-bottom: 15px;
        }}
        
        .excerpt {{
            color: #555;
            margin-bottom: 15px;
        }}
        
        .read-more {{
            display: inline-block;
            color: #667eea;
            text-decoration: none;
            font-weight: 600;
        }}
        
        .read-more:hover {{
            text-decoration: underline;
        }}
        
        footer {{
            text-align: center;
            padding: 40px 20px;
            color: #666;
            border-top: 1px solid #ddd;
            margin-top: 40px;
        }}
        
        .back-home {{
            display: inline-block;
            margin-top: 20px;
            color: #667eea;
            text-decoration: none;
        }}
    </style>
</head>
<body>
    <header>
        <h1>Blog</h1>
        <p>Praktische Guides, Tutorials und Tipps zu KI für Unternehmer</p>
    </header>
    
    <div class="container">
        {articles_html}
    </div>
    
    <footer>
        <p>© 2026 KI-Expertenraum | Philipp Zerna</p>
        <a href="index.html" class="back-home">← Zurück zur Startseite</a>
    </footer>
</body>
</html>'''

def main():
    """Hauptfunktion"""
    print("🚀 Starte Blog-Generator...")
    
    # Erstelle Ausgabeverzeichnis
    OUTPUT_DIR.mkdir(exist_ok=True)
    
    # Sammle alle Artikel
    articles = []
    
    # Verarbeite alle Markdown-Dateien
    for md_file in CONTENT_DIR.glob("*.md"):
        print(f"📄 Verarbeite: {md_file.name}")
        
        # Lese Markdown
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Parse Frontmatter und Body
        metadata, body = parse_frontmatter(content)
        
        # Erstelle Slug falls nicht vorhanden
        if 'slug' not in metadata:
            metadata['slug'] = create_slug(metadata.get('title', md_file.stem))
        
        # Konvertiere Markdown zu HTML
        md = markdown.Markdown(extensions=['tables', 'fenced_code'])
        content_html = md.convert(body)
        
        # Generiere HTML-Datei
        html_content = generate_article_html(metadata, content_html, md_file.name)
        
        output_file = OUTPUT_DIR / f"{metadata['slug']}.html"
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(html_content)
        
        print(f"   ✓ Erstellt: {output_file}")
        
        # Speichere für Index
        articles.append(metadata)
    
    # Generiere Blog-Index
    if articles:
        print("\n📝 Aktualisiere Blog-Übersicht...")
        index_content = generate_blog_index(articles)
        with open(INDEX_FILE, 'w', encoding='utf-8') as f:
            f.write(index_content)
        print(f"   ✓ {INDEX_FILE} aktualisiert")
    
    print(f"\n✅ Fertig! {len(articles)} Artikel verarbeitet.")
    print("🌐 Die Dateien sind bereit für den Upload zu GitHub.")

if __name__ == "__main__":
    main()

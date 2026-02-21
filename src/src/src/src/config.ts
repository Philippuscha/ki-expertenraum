// =============================================================================
// Site Configuration
// Edit ONLY this file to customize all content across the site.
// All animations, layouts, and styles are controlled by the components.
// =============================================================================

// -- Site-wide settings -------------------------------------------------------
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "KI-Expertenraum - Meistere die Zukunft der Künstlichen Intelligenz",
  description: "Premium KI-Kurse für Einsteiger und Fortgeschrittene. Lerne von Experten und werde zum KI-Spezialisten.",
  language: "de",
};

// -- Hero Section -------------------------------------------------------------
export interface HeroNavItem {
  label: string;
  sectionId: string;
  icon: "disc" | "play" | "calendar" | "music";
}

export interface HeroConfig {
  backgroundImage: string;
  brandName: string;
  decodeText: string;
  decodeChars: string;
  subtitle: string;
  ctaPrimary: string;
  ctaPrimaryTarget: string;
  ctaSecondary: string;
  ctaSecondaryTarget: string;
  cornerLabel: string;
  cornerDetail: string;
  navItems: HeroNavItem[];
}

export const heroConfig: HeroConfig = {
  backgroundImage: "/hero-robot.jpg",
  brandName: "KI-EXPERTENRAUM",
  decodeText: "WILLKOMMEN IM KI-ZEITALTER",
  decodeChars: "01ABCDEFGHIJKLM",
  subtitle: "Transformiere deine Karriere mit Künstlicher Intelligenz. Premium Kurse von Experten, die die Zukunft gestalten.",
  ctaPrimary: "Kurse entdecken",
  ctaPrimaryTarget: "courses",
  ctaSecondary: "Mehr erfahren",
  ctaSecondaryTarget: "about",
  cornerLabel: "NEU",
  cornerDetail: "KI-Fundamentals Kurs",
  navItems: [
    { label: "Kurse", sectionId: "courses", icon: "disc" },
    { label: "Galerie", sectionId: "gallery", icon: "play" },
    { label: "Termine", sectionId: "schedule", icon: "calendar" },
    { label: "Kontakt", sectionId: "contact", icon: "music" },
  ],
};

// -- Album Cube Section -------------------------------------------------------
export interface Album {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export interface AlbumCubeConfig {
  albums: Album[];
  cubeTextures: string[];
  scrollHint: string;
}

export const albumCubeConfig: AlbumCubeConfig = {
  albums: [
    {
      id: 1,
      title: "KI-BASICS",
      subtitle: "FUNDAMENTALS",
      image: "/cube-ai-basics.jpg",
    },
    {
      id: 2,
      title: "CHATGPT & LLMs",
      subtitle: "SPRACHMODELLE",
      image: "/cube-llm.jpg",
    },
    {
      id: 3,
      title: "BILDGENERIERUNG",
      subtitle: "KREATIVE KI",
      image: "/cube-image-gen.jpg",
    },
    {
      id: 4,
      title: "AUTOMATISIERUNG",
      subtitle: "WORKFLOW AI",
      image: "/cube-automation.jpg",
    },
  ],
  cubeTextures: [
    "/cube-coding.jpg",
    "/cube-prompts.jpg",
    "/cube-ai-basics.jpg",
    "/cube-automation.jpg",
    "/cube-llm.jpg",
    "/cube-image-gen.jpg",
  ],
  scrollHint: "Scrolle für mehr Kurse",
};

// -- Parallax Gallery Section -------------------------------------------------
export interface ParallaxImage {
  id: number;
  src: string;
  alt: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  date: string;
}

export interface ParallaxGalleryConfig {
  sectionLabel: string;
  sectionTitle: string;
  galleryLabel: string;
  galleryTitle: string;
  marqueeTexts: string[];
  endCtaText: string;
  parallaxImagesTop: ParallaxImage[];
  parallaxImagesBottom: ParallaxImage[];
  galleryImages: GalleryImage[];
}

export const parallaxGalleryConfig: ParallaxGalleryConfig = {
  sectionLabel: "UNSERE WELT",
  sectionTitle: "ERLEBE DIE KI-REVOLUTION",
  galleryLabel: "KURSÜBERSICHT",
  galleryTitle: "ENTDECKE DEIN POTENZIAL",
  marqueeTexts: [
    "MACHINE LEARNING",
    "NEURALE NETZE",
    "DEEP LEARNING",
    "PROMPT ENGINEERING",
    "KI-STRATEGIE",
    "AUTOMATISIERUNG",
  ],
  endCtaText: "Alle Kurse ansehen",
  parallaxImagesTop: [
    { id: 1, src: "/gallery-ml.jpg", alt: "Machine Learning" },
    { id: 2, src: "/gallery-data.jpg", alt: "Data Analysis" },
    { id: 3, src: "/gallery-voice.jpg", alt: "Voice AI" },
    { id: 4, src: "/gallery-video.jpg", alt: "Video AI" },
    { id: 5, src: "/gallery-teacher.jpg", alt: "AI Education" },
    { id: 6, src: "/gallery-security.jpg", alt: "AI Security" },
  ],
  parallaxImagesBottom: [
    { id: 7, src: "/course-beginner.jpg", alt: "Beginner Course" },
    { id: 8, src: "/course-advanced.jpg", alt: "Advanced Course" },
    { id: 9, src: "/course-business.jpg", alt: "Business Course" },
    { id: 10, src: "/course-creative.jpg", alt: "Creative Course" },
    { id: 11, src: "/cube-coding.jpg", alt: "Coding with AI" },
    { id: 12, src: "/cube-prompts.jpg", alt: "Prompt Engineering" },
  ],
  galleryImages: [
    { id: 1, src: "/course-beginner.jpg", title: "KI-Fundamentals", date: "JETZT VERFÜGBAR" },
    { id: 2, src: "/course-advanced.jpg", title: "Advanced AI", date: "AB MÄRZ 2026" },
    { id: 3, src: "/course-business.jpg", title: "Business KI", date: "JETZT VERFÜGBAR" },
    { id: 4, src: "/course-creative.jpg", title: "Kreative KI", date: "AB APRIL 2026" },
    { id: 5, src: "/gallery-ml.jpg", title: "Machine Learning", date: "JETZT VERFÜGBAR" },
    { id: 6, src: "/gallery-data.jpg", title: "Data Science", date: "AB MAI 2026" },
  ],
};

// -- Tour Schedule Section ----------------------------------------------------
export interface TourDate {
  id: number;
  date: string;
  time: string;
  city: string;
  venue: string;
  status: "on-sale" | "sold-out" | "coming-soon";
  image: string;
}

export interface TourStatusLabels {
  onSale: string;
  soldOut: string;
  comingSoon: string;
  default: string;
}

export interface TourScheduleConfig {
  sectionLabel: string;
  sectionTitle: string;
  vinylImage: string;
  buyButtonText: string;
  detailsButtonText: string;
  bottomNote: string;
  bottomCtaText: string;
  statusLabels: TourStatusLabels;
  tourDates: TourDate[];
}

export const tourScheduleConfig: TourScheduleConfig = {
  sectionLabel: "KURSTERMINE",
  sectionTitle: "BUCHE DEINEN KURS",
  vinylImage: "/vinyl-disc.png",
  buyButtonText: "Jetzt buchen",
  detailsButtonText: "Details",
  bottomNote: "Alle Kurse beinhalten lebenslangen Zugang zu Materialien",
  bottomCtaText: "Alle Termine ansehen",
  statusLabels: {
    onSale: "VERFÜGBAR",
    soldOut: "AUSGEBUCHT",
    comingSoon: "BALD VERFÜGBAR",
    default: "ANFRAGEN",
  },
  tourDates: [
    {
      id: 1,
      date: "2026.03.15",
      time: "09:00",
      city: "Berlin",
      venue: "KI-Fundamentals Workshop",
      status: "on-sale",
      image: "/course-beginner.jpg",
    },
    {
      id: 2,
      date: "2026.03.22",
      time: "14:00",
      city: "München",
      venue: "ChatGPT Masterclass",
      status: "on-sale",
      image: "/cube-llm.jpg",
    },
    {
      id: 3,
      date: "2026.04.05",
      time: "10:00",
      city: "Hamburg",
      venue: "Bildgenerierung mit KI",
      status: "sold-out",
      image: "/cube-image-gen.jpg",
    },
    {
      id: 4,
      date: "2026.04.12",
      time: "09:00",
      city: "Köln",
      venue: "KI-Automatisierung",
      status: "coming-soon",
      image: "/cube-automation.jpg",
    },
  ],
};

// -- Footer Section -----------------------------------------------------------
export interface FooterImage {
  id: number;
  src: string;
}

export interface SocialLink {
  icon: "instagram" | "twitter" | "youtube" | "music";
  label: string;
  href: string;
}

export interface FooterConfig {
  portraitImage: string;
  portraitAlt: string;
  heroTitle: string;
  heroSubtitle: string;
  artistLabel: string;
  artistName: string;
  artistSubtitle: string;
  brandName: string;
  brandDescription: string;
  quickLinksTitle: string;
  quickLinks: string[];
  contactTitle: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  addressLabel: string;
  address: string;
  newsletterTitle: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  subscribeAlertMessage: string;
  copyrightText: string;
  bottomLinks: string[];
  socialLinks: SocialLink[];
  galleryImages: FooterImage[];
}

export const footerConfig: FooterConfig = {
  portraitImage: "/footer-portrait.jpg",
  portraitAlt: "KI-Experte",
  heroTitle: "WERDE ZUM KI-EXPERTEN",
  heroSubtitle: "Die Zukunft beginnt jetzt",
  artistLabel: "DEIN INSTRUCTOR",
  artistName: "ALEX CHEN",
  artistSubtitle: "KI-Stratege & Educator",
  brandName: "KI-EXPERTENRAUM",
  brandDescription: "Wir bilden die nächste Generation von KI-Experten aus. Mit praxisnahen Kursen und persönlicher Betreuung begleiten wir dich auf deinem Weg zur KI-Meisterschaft.",
  quickLinksTitle: "Schnelllinks",
  quickLinks: ["Alle Kurse", "Über uns", "Blog", "Karriere", "Hilfe"],
  contactTitle: "Kontakt",
  emailLabel: "E-Mail",
  email: "hello@ki-expertenraum.de",
  phoneLabel: "Telefon",
  phone: "+49 30 12345678",
  addressLabel: "Adresse",
  address: "Alexanderplatz 1, 10178 Berlin",
  newsletterTitle: "Newsletter",
  newsletterDescription: "Erhalte exklusive KI-Tipps und frühen Zugang zu neuen Kursen.",
  newsletterButtonText: "Abonnieren",
  subscribeAlertMessage: "Vielen Dank für deine Anmeldung!",
  copyrightText: "© 2026 KI-Expertenraum. Alle Rechte vorbehalten.",
  bottomLinks: ["Impressum", "Datenschutz", "AGB"],
  socialLinks: [
    { icon: "instagram", label: "Instagram", href: "#" },
    { icon: "twitter", label: "Twitter", href: "#" },
    { icon: "youtube", label: "YouTube", href: "#" },
    { icon: "music", label: "LinkedIn", href: "#" },
  ],
  galleryImages: [
    { id: 1, src: "/gallery-ml.jpg" },
    { id: 2, src: "/gallery-data.jpg" },
    { id: 3, src: "/gallery-voice.jpg" },
    { id: 4, src: "/gallery-video.jpg" },
  ],
};

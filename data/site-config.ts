// =============================================================================
// SITE CONFIG
// Single source of truth for all business information.
// Update this file to change global content — never hardcode in components.
// =============================================================================

export const siteConfig = {
  // ── Business identity ────────────────────────────────────────────────────
  businessName: "Maestro Constructor",
  ownerName: "Nombre del Maestro",
  tagline: "Construimos la casa que imaginaste.",
  specialty: "Construcción residencial de alta calidad",
  foundingYear: 2003,

  // ── Location ─────────────────────────────────────────────────────────────
  city: "Ciudad",
  region: "Región",
  country: "Ecuador",
  /** ISO region code for geo meta tags e.g. "EC-P" */
  geoRegion: "EC",

  // ── Contact ──────────────────────────────────────────────────────────────
  /** Display format shown in the UI */
  phoneDisplay: "+593 XX XXX XXXX",
  /** href format for tel: links */
  phoneHref: "tel:+593XXXXXXXXX",
  /** WhatsApp link */
  whatsappHref: "https://wa.me/593XXXXXXXXX",
  email: "contacto@ejemplo.com",

  // ── Statistics (shown in Credentials section) ────────────────────────────
  stats: [
    {
      value: 20,
      suffix: "+",
      label: "Años de experiencia",
    },
    {
      value: 150,
      suffix: "+",
      label: "Proyectos completados",
    },
    {
      value: 100,
      suffix: "%",
      label: "Entregados a tiempo",
    },
  ],

  // ── SEO ──────────────────────────────────────────────────────────────────
  siteUrl: "https://www.ejemplo.com",
  /** Used as <title> template: "Page | siteName" */
  siteName: "Maestro Constructor — Viviendas de Alta Calidad",
  metaDescription:
    "Construcción de viviendas residenciales de alta calidad en Perú. Más de 20 años de experiencia. Presupuesto cerrado, entrega garantizada.",
  /** Path to OG image in /public */
  ogImage: "/images/hero/casa-nocturna.png",

  // ── Navigation ───────────────────────────────────────────────────────────
  navItems: [
    { label: "Proyectos", href: "#proyectos" },
    { label: "Nosotros", href: "#maestro" },
    { label: "Proceso", href: "#proceso" },
    { label: "Contacto", href: "#contacto" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

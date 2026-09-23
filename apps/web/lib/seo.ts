import type { Metadata } from "next"
import { site } from "./data/site"

/**
 * Centralized SEO utilities: titles, canonicals, Open Graph,
 * Twitter cards and Schema.org JSON-LD builders.
 */

const DEFAULT_OG_IMAGE = "/opengraph-image"

export function pageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  noIndex = false,
}: {
  /** Full absolute title (not templated). */
  title: string
  description: string
  /** Canonical path, e.g. "/about". */
  path: string
  /** Absolute or root-relative image URL for social previews. */
  image?: string
  type?: "website" | "article"
  noIndex?: boolean
}): Metadata {
  const url = `${site.url}${path}`
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : `${site.url}${image}`
    : `${site.url}${DEFAULT_OG_IMAGE}`

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  }
}

export function ogImageUrl() {
  return `${site.url}${DEFAULT_OG_IMAGE}`
}

/* ── JSON-LD builders ─────────────────────────────────────── */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": `${site.url}/#organization`,
    name: site.name,
    description: site.description,
    url: site.url,
    logo: `${site.url}${"/assets/logo/marcesh-logo.jpeg"}`,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kibaha",
      addressRegion: "Pwani",
      addressCountry: "TZ",
    },
    sameAs: site.socials.map((s) => s.href),
  }
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    publisher: { "@id": `${site.url}/#organization` },
  }
}

export function webpageSchema({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${site.url}${path}`,
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#organization` },
  }
}

export function breadcrumbSchema(items: { label: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${site.url}${item.href}` } : {}),
    })),
  }
}

export function articleSchema({
  headline,
  description,
  path,
  image,
  datePublished,
}: {
  headline: string
  description: string
  path: string
  image?: string
  datePublished: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    mainEntityOfPage: `${site.url}${path}`,
    image: image ? `${site.url}${image}` : ogImageUrl(),
    datePublished,
    author: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  }
}

export function projectSchema({
  name,
  description,
  path,
  status,
  location,
}: {
  name: string
  description: string
  path: string
  status: string
  location: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Project",
    name,
    description,
    url: `${site.url}${path}`,
    parentOrganization: { "@id": `${site.url}/#organization` },
    location: { "@type": "Place", name: location },
    additionalProperty: {
      "@type": "PropertyValue",
      name: "Status",
      value: status,
    },
  }
}

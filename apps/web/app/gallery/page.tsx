import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/decorative"
import { GalleryBrowser } from "@/components/gallery-browser"
import { CtaSection } from "@/components/cta-section"
import { gallery, galleryCategories } from "@/lib/data/gallery"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Photo Gallery | Marcesh Foundation",
  description:
    "Moments from Marcesh Foundation's work: education programs, health outreach and community initiatives across Kibaha, Pwani, Tanzania.",
  path: "/gallery",
})

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments from the field"
        description="A window into our work: the ceremonies, outreach days and everyday moments that make up the Marcesh story."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />
      <Section>
        <GalleryBrowser items={gallery} categories={galleryCategories} />
      </Section>
      <CtaSection />
    </>
  )
}

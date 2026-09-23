import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/decorative"
import { StoriesBrowser } from "@/components/browsers"
import { CtaSection } from "@/components/cta-section"
import { stories } from "@/lib/data/stories"
import { images } from "@/lib/data/images"

export const metadata: Metadata = {
  title: "Stories of Change",
  description:
    "Real stories from the people and communities Marcesh Foundation works with across Kibaha, Pwani.",
}

export default function StoriesPage() {
  return (
    <>
      <PageHero
        variant="image"
        image={images.support}
        eyebrow="Stories of Change"
        title="Every number has a name"
        description="Behind our programs are people — students, mothers, volunteers and neighbours — writing their own stories of change."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Stories" }]}
      />
      <Section>
        <StoriesBrowser stories={stories} />
      </Section>
      <CtaSection />
    </>
  )
}

import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { Section } from "@/components/decorative"
import { CtaSection } from "@/components/cta-section"
import { TeamCard } from "@/components/cards"
import { team } from "@/lib/data/team"
import { images } from "@/lib/data/images"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Our Team | Marcesh Foundation",
  description:
    "Meet the people leading Marcesh Foundation's work in education, health and community development in Kibaha, Pwani, Tanzania.",
  path: "/team",
})

export default function TeamPage() {
  return (
    <>
      <PageHero
        variant="image"
        image={images.about}
        eyebrow="Our Team"
        title="The people behind the mission"
        description="A dedicated team supported by volunteers across the Pwani region, united by a belief in community-led change."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Team" }]}
      />
      <Section>
        <SectionHeading
          eyebrow="Leadership"
          title="Meet the team"
          description="Placeholder profiles shown below. Real team details can be added any time through the team data file."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 80}>
              <TeamCard member={m} />
            </Reveal>
          ))}
        </div>
      </Section>
      <CtaSection />
    </>
  )
}

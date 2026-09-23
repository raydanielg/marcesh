import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/decorative"
import { EventsBrowser } from "@/components/browsers"
import { CtaSection } from "@/components/cta-section"
import { events } from "@/lib/data/events"

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming and past events hosted by Marcesh Foundation — volunteer days, ceremonies, fundraisers and community gatherings in Kibaha, Pwani.",
}

export default function EventsPage() {
  const next = events.filter((e) => !e.past).sort((a, b) => a.date.localeCompare(b.date))[0]

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Gather, give, grow together"
        description={
          next
            ? `Next up: ${next.title} — ${next.location}. Join us and be part of the change.`
            : "Community gatherings, ceremonies and volunteer days across Kibaha, Pwani."
        }
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Events" }]}
      />
      <Section>
        <EventsBrowser events={events} />
      </Section>
      <CtaSection />
    </>
  )
}

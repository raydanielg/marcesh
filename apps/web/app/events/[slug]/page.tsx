import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Calendar03Icon,
  Clock01Icon,
  Location01Icon,
  UserGroupIcon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { SiteImage } from "@/components/site-image"
import { Reveal } from "@/components/reveal"
import { Section } from "@/components/decorative"
import { CtaSection } from "@/components/cta-section"
import { EventCard } from "@/components/cards"
import { EventRegistration } from "@/components/forms/event-registration"
import { events, getEvent } from "@/lib/data/events"
import { formatDate } from "@/lib/format"

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const event = getEvent(slug)
  if (!event) return {}
  return { title: event.title, description: event.description }
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const event = getEvent(slug)
  if (!event) notFound()

  const related = events.filter((e) => e.slug !== event.slug && e.past === event.past).slice(0, 2)
  const relatedList = related.length ? related : events.filter((e) => e.slug !== event.slug).slice(0, 2)

  return (
    <>
      <PageHero
        variant="image"
        image={event.image}
        eyebrow={event.past ? "Past Event" : "Upcoming Event"}
        title={event.title}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Events", href: "/events" },
          { label: event.title },
        ]}
      >
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/85">
          <span className="flex items-center gap-1.5">
            <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} className="size-4" />
            {formatDate(event.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <HugeiconsIcon icon={Clock01Icon} strokeWidth={2} className="size-4" />
            {event.time}
          </span>
          <span className="flex items-center gap-1.5">
            <HugeiconsIcon icon={Location01Icon} strokeWidth={2} className="size-4" />
            {event.location}
          </span>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="About" title="About this event" className="mb-0" />
            <Reveal delay={100}>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {event.description}
              </p>
            </Reveal>

            <Reveal delay={180} className="mt-10">
              <h3 className="font-display text-xl font-semibold">Event program</h3>
              <ol className="mt-5 flex flex-col">
                {event.program.map((step, i) => (
                  <li key={step} className="relative flex gap-4 pb-5 last:pb-0">
                    {i < event.program.length - 1 && (
                      <span aria-hidden className="absolute top-6 left-[9px] h-full w-px bg-border" />
                    )}
                    <span className="relative z-10 mt-1 size-[19px] shrink-0 rounded-full border-2 border-primary bg-primary/10" />
                    <span className="pt-0.5 text-sm leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <Reveal variant="right">
            <aside className="rounded-2xl border bg-card p-6 lg:sticky lg:top-24">
              <h3 className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                Event details
              </h3>
              <dl className="mt-5 flex flex-col gap-4 text-sm">
                <div className="flex gap-3">
                  <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} className="mt-0.5 size-4 shrink-0 text-brand" />
                  <div>
                    <dt className="font-medium">Date</dt>
                    <dd className="text-muted-foreground">{formatDate(event.date)}</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <HugeiconsIcon icon={Clock01Icon} strokeWidth={2} className="mt-0.5 size-4 shrink-0 text-brand" />
                  <div>
                    <dt className="font-medium">Time</dt>
                    <dd className="text-muted-foreground">{event.time}</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <HugeiconsIcon icon={Location01Icon} strokeWidth={2} className="mt-0.5 size-4 shrink-0 text-brand" />
                  <div>
                    <dt className="font-medium">Location</dt>
                    <dd className="text-muted-foreground">{event.location}</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <HugeiconsIcon icon={UserGroupIcon} strokeWidth={2} className="mt-0.5 size-4 shrink-0 text-brand" />
                  <div>
                    <dt className="font-medium">Organizer</dt>
                    <dd className="text-muted-foreground">{event.organizer}</dd>
                  </div>
                </div>
              </dl>
              <div className="mt-6 border-t pt-5">
                <EventRegistration eventTitle={event.title} past={event.past} />
              </div>
            </aside>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-secondary/40">
        <div className="mb-8 flex items-end justify-between">
          <SectionHeading eyebrow="More Events" title="You might also like" className="mb-0" />
          <Link href="/events" className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary">
            All events
            <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4" />
          </Link>
        </div>
        <div className="grid gap-6">
          {relatedList.map((e) => (
            <EventCard key={e.slug} event={e} />
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  )
}

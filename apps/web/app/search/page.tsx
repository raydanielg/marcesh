import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/decorative"
import { SearchBrowser, type SearchEntry } from "@/components/search-browser"
import { projects } from "@/lib/data/projects"
import { news } from "@/lib/data/news"
import { stories } from "@/lib/data/stories"
import { events } from "@/lib/data/events"
import { formatDateShort } from "@/lib/format"

export const metadata: Metadata = {
  title: "Search",
  description: "Search Marcesh Foundation's projects, news, stories and events.",
  robots: { index: false },
}

export default function SearchPage() {
  const entries: SearchEntry[] = [
    ...projects.map((p): SearchEntry => ({
      type: "Project",
      title: p.title,
      excerpt: p.summary,
      href: `/projects/${p.slug}`,
      meta: p.location,
      image: p.image,
    })),
    ...news.map((n): SearchEntry => ({
      type: "News",
      title: n.title,
      excerpt: n.excerpt,
      href: `/news/${n.slug}`,
      meta: formatDateShort(n.date),
      image: n.image,
    })),
    ...stories.map((s): SearchEntry => ({
      type: "Story",
      title: s.title,
      excerpt: s.excerpt,
      href: `/stories/${s.slug}`,
      meta: s.location,
      image: s.image,
    })),
    ...events.map((e): SearchEntry => ({
      type: "Event",
      title: e.title,
      excerpt: e.description,
      href: `/events/${e.slug}`,
      meta: formatDateShort(e.date),
      image: e.image,
    })),
  ]

  return (
    <>
      <PageHero
        eyebrow="Search"
        title="Find what you're looking for"
        description="Search across our projects, news, stories and events."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Search" }]}
      />
      <Section>
        <SearchBrowser entries={entries} />
      </Section>
    </>
  )
}

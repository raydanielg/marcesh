import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/decorative"
import { SearchBrowser, type SearchEntry } from "@/components/search-browser"
import { projects } from "@/lib/data/projects"
import { stories } from "@/lib/data/stories"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Search | Marcesh Foundation",
  description: "Search Marcesh Foundation's projects and stories.",
  path: "/search",
  noIndex: true,
})

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
    ...stories.map((s): SearchEntry => ({
      type: "Story",
      title: s.title,
      excerpt: s.excerpt,
      href: `/stories/${s.slug}`,
      meta: s.location,
      image: s.image,
    })),
  ]

  return (
    <>
      <PageHero
        eyebrow="Search"
        title="Find what you're looking for"
        description="Search across our projects and stories."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Search" }]}
      />
      <Section>
        <SearchBrowser entries={entries} />
      </Section>
    </>
  )
}

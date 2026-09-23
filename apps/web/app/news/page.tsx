import type { Metadata } from "next"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUpRight01Icon, Calendar03Icon } from "@hugeicons/core-free-icons"
import { PageHero } from "@/components/page-hero"
import { SiteImage } from "@/components/site-image"
import { Reveal } from "@/components/reveal"
import { Section } from "@/components/decorative"
import { NewsBrowser } from "@/components/browsers"
import { CtaSection } from "@/components/cta-section"
import { news } from "@/lib/data/news"
import { formatDateShort } from "@/lib/format"

export const metadata: Metadata = {
  title: "News & Updates",
  description:
    "The latest news, announcements and updates from Marcesh Foundation's work in Kibaha, Pwani.",
}

export default function NewsPage() {
  const featured = news.find((n) => n.featured) ?? news[0]!
  const rest = news.filter((n) => n.slug !== featured.slug)

  return (
    <>
      <PageHero
        eyebrow="News & Updates"
        title="What's happening at the foundation"
        description="Announcements, milestones and stories from the field — follow along as our work grows."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "News" }]}
      />

      {/* Featured article */}
      <Section className="pt-14">
        <Reveal>
          <Link
            href={`/news/${featured.slug}`}
            className="group relative block overflow-hidden rounded-3xl"
          >
            <div className="relative min-h-[380px]">
              <SiteImage
                image={featured.image}
                ratio="aspect-auto"
                className="absolute inset-0"
                rounded="rounded-none"
                imgClassName="transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/40 to-transparent" />
            <div className="absolute right-0 bottom-0 left-0 p-6 md:p-10">
              <div className="flex items-center gap-3 text-sm text-white/80">
                <span className="rounded-full bg-brand px-3 py-1 text-xs font-semibold text-brand-foreground">
                  Featured
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                  {featured.category}
                </span>
                <span className="flex items-center gap-1.5 text-xs">
                  <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} className="size-3.5" />
                  {formatDateShort(featured.date)}
                </span>
              </div>
              <h2 className="font-display mt-4 max-w-2xl text-2xl leading-tight font-semibold text-balance text-white md:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-3 max-w-xl text-sm text-white/75 md:text-base">{featured.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                Read the article
                <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={2} className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <NewsBrowser articles={rest} />
      </Section>

      <CtaSection />
    </>
  )
}

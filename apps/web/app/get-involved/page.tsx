import type { Metadata } from "next"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  HandCoinsIcon,
  HandHelpingIcon,
  TeamWorkIcon,
  HeartIcon,
} from "@hugeicons/core-free-icons"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { SiteImage } from "@/components/site-image"
import { Reveal } from "@/components/reveal"
import { Section, DotsField } from "@/components/decorative"
import { CtaSection } from "@/components/cta-section"
import { images } from "@/lib/data/images"
import { projects } from "@/lib/data/projects"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Get Involved | Marcesh Foundation",
  description:
    "Support Marcesh Foundation: donate, volunteer, partner or back a project and help build a healthier, more educated society in Kibaha, Pwani.",
  path: "/get-involved",
})

export default function GetInvolvedPage() {
  const supportable = projects.filter((p) => p.status !== "Completed").slice(0, 3)

  return (
    <>
      <PageHero
        variant="image"
        image={images.community}
        eyebrow="Get Involved"
        title="Change starts with one person. You."
        description="Four ways to stand with communities in Kibaha. Choose the one that fits you."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Get Involved" }]}
      />

      {/* Donate band */}
      <Section className="bg-primary text-primary-foreground">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="flex size-12 items-center justify-center rounded-2xl bg-white/15">
                <HugeiconsIcon icon={HandCoinsIcon} strokeWidth={1.8} className="size-6" />
              </span>
              <h2 className="font-display mt-5 text-3xl font-semibold md:text-4xl">Donate</h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-primary-foreground/85 md:text-lg">
                Your contribution becomes books in classrooms, health information in
                neighbourhoods and essential support for families. Every amount moves the mission forward.
              </p>
            </Reveal>
            <Reveal delay={160} className="mt-7">
              <Link
                href="/donate"
                className="inline-flex h-12 items-center gap-2 rounded-lg bg-white px-6 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
              >
                Make a Donation
                <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4" />
              </Link>
            </Reveal>
          </div>
          <Reveal variant="right" className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {["School supplies", "Health outreach", "Family support", "Community programs"].map((t) => (
                <div key={t} className="rounded-2xl bg-white/10 p-5 text-sm font-medium backdrop-blur-sm">
                  {t}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Volunteer split */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="left">
            <SiteImage image={images.aboutSecondary} ratio="aspect-[4/3]" rounded="rounded-3xl" />
          </Reveal>
          <div>
            <Reveal>
              <span className="flex size-12 items-center justify-center rounded-2xl bg-brand text-brand-foreground">
                <HugeiconsIcon icon={HandHelpingIcon} strokeWidth={1.8} className="size-6" />
              </span>
              <h2 className="font-display mt-5 text-3xl font-semibold md:text-4xl">Volunteer</h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
                Our volunteers visit schools, join outreach days and stand beside neighbours who
                need support. Whatever your skill, there&rsquo;s a place for you here.
              </p>
            </Reveal>
            <Reveal delay={160} className="mt-7 flex flex-wrap gap-3">
              <Link href="/volunteer" className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                Apply to Volunteer
                <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Partner band */}
      <Section className="relative overflow-hidden bg-deep text-deep-foreground">
        <DotsField className="top-8 right-8 h-40 w-56 text-white/8" />
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="flex size-12 items-center justify-center rounded-2xl bg-brand text-brand-foreground">
                <HugeiconsIcon icon={TeamWorkIcon} strokeWidth={1.8} className="size-6" />
              </span>
              <h2 className="font-display mt-5 text-3xl font-semibold text-white md:text-4xl">
                Partner With Us
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-deep-foreground/75 md:text-lg">
                Schools, companies, NGOs and institutions, partner with us on programs that
                create measurable community impact. Let&rsquo;s design something meaningful together.
              </p>
            </Reveal>
            <Reveal delay={160} className="mt-7">
              <Link
                href="/partner"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-brand px-5 text-sm font-semibold text-brand-foreground hover:bg-brand/90"
              >
                Become a Partner
                <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4" />
              </Link>
            </Reveal>
          </div>
          <Reveal variant="right" className="grid gap-4">
            {["Program partnerships", "Event sponsorship", "In-kind support", "Institutional collaboration"].map((t) => (
              <div key={t} className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium">
                {t}
              </div>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* Support a project */}
      <Section>
        <SectionHeading
          eyebrow="Support a Project"
          title="Back an initiative you believe in"
          description="Choose an active project and direct your support where it matters most to you."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {supportable.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border bg-card">
                <div className="p-5 pb-0">
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                    {p.status}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                  <div className="mt-auto flex items-center gap-2 pt-5">
                    <Link href="/donate" className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-brand px-4 text-xs font-semibold text-brand-foreground hover:bg-brand/90">
                      <HugeiconsIcon icon={HeartIcon} strokeWidth={2} className="size-3.5" />
                      Support
                    </Link>
                    <Link href={`/projects/${p.slug}`} className="inline-flex h-9 items-center gap-1 rounded-lg border px-4 text-xs font-medium hover:bg-muted">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  )
}

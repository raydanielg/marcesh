import type { Metadata } from "next"
import Link from "next/link"
import { buttonVariants } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  SchoolIcon,
  StethoscopeIcon,
  UserGroupIcon,
  HandHelpingIcon,
  Tick02Icon,
  QuoteUpIcon,
  HeartIcon,
  ShieldIcon,
  CheckmarkBadge01Icon,
  Leaf01Icon,
  UsersIcon,
  SparklesIcon,
  Target02Icon,
} from "@hugeicons/core-free-icons"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { SiteImage } from "@/components/site-image"
import { Reveal } from "@/components/reveal"
import { Section, Container, DotsField, SoftBlob } from "@/components/decorative"
import { CtaSection } from "@/components/cta-section"
import { TeamCard } from "@/components/cards"
import { site, values } from "@/lib/data/site"
import { images } from "@/lib/data/images"
import { programs } from "@/lib/data/programs"
import { team } from "@/lib/data/team"

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${site.name} — our vision, mission, values and the people working to create a healthier, more educated and prosperous society in ${site.location}.`,
}

const valueIcons = {
  equality: UsersIcon,
  heart: HeartIcon,
  shield: ShieldIcon,
  badge: CheckmarkBadge01Icon,
  leaf: Leaf01Icon,
  community: UserGroupIcon,
  users: UsersIcon,
  sparkles: SparklesIcon,
} as const

const programIcons = {
  education: SchoolIcon,
  health: StethoscopeIcon,
  community: UserGroupIcon,
  support: HandHelpingIcon,
} as const

export default function AboutPage() {
  return (
    <>
      <PageHero
        variant="image"
        image={images.about}
        eyebrow="About Us"
        title="Rooted in Kibaha. Driven by hope."
        description={`${site.name} is a community foundation working to create equal opportunities in education and health — and a society where everyone can prosper.`}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Who we are */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Who We Are" title="A foundation built on community trust" className="mb-0" />
            <Reveal delay={120}>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {site.name} is a non-profit community organisation based in {site.location}.
                We exist to open doors — to classrooms, to healthcare, to dignity and to
                opportunity — for people who need them most.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                Our work is powered by local volunteers and guided by a simple belief:
                lasting change comes from within the community itself. We bring people,
                resources and encouragement together — and communities do the rest.
              </p>
            </Reveal>
            <Reveal delay={220} className="mt-8 flex flex-wrap gap-3">
              <Link href="/programs" className={cn(buttonVariants({ size: "lg" }))}>
                Explore Our Programs
                <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4" />
              </Link>
            </Reveal>
          </div>
          <Reveal variant="right" className="relative">
            <SiteImage image={images.aboutSecondary} ratio="aspect-[4/5]" rounded="rounded-3xl" />
            <SiteImage
              image={images.about}
              ratio="aspect-[4/3]"
              className="absolute -bottom-8 -left-4 hidden w-56 ring-8 ring-background sm:block"
              rounded="rounded-2xl"
            />
          </Reveal>
        </div>
      </Section>

      {/* Vision */}
      <Section className="relative overflow-hidden bg-deep py-20 text-deep-foreground md:py-28">
        <DotsField className="right-10 bottom-10 h-44 w-64 text-white/8" />
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <span className="flex size-12 items-center justify-center rounded-full bg-brand text-brand-foreground">
              <HugeiconsIcon icon={QuoteUpIcon} strokeWidth={1.6} className="size-5" />
            </span>
          </Reveal>
          <Reveal delay={140}>
            <p className="font-display mt-8 text-2xl leading-relaxed font-medium text-balance text-white sm:text-3xl md:text-4xl">
              “{site.vision}”
            </p>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-8 text-sm font-semibold tracking-[0.2em] text-deep-foreground/60 uppercase">
              Our Vision
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Mission — split */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="left" className="relative order-2 lg:order-1">
            <div aria-hidden className="absolute -top-6 -left-6 size-full rounded-3xl border-2 border-brand/30" />
            <SiteImage image={images.education} ratio="aspect-[4/3]" rounded="rounded-3xl" className="relative" />
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading eyebrow="Our Mission" title="Equal opportunities, for everyone" className="mb-0" />
            <Reveal delay={120}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {site.mission}
              </p>
            </Reveal>
            <Reveal delay={220} className="mt-8">
              <Link href="/impact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                See the impact of our mission
                <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Goals */}
      <Section className="bg-warm">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Our Goals" title="What we're working toward" className="mb-0" />
            <Reveal delay={140}>
              <p className="text-base leading-relaxed text-muted-foreground">
                Eight commitments guide everything we do — from the projects we choose to the
                way we show up for our community.
              </p>
            </Reveal>
            <Reveal delay={220} className="mt-6">
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <HugeiconsIcon icon={Target02Icon} strokeWidth={1.8} className="size-6" />
              </span>
            </Reveal>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-2">
            {site.goals.map((g, i) => (
              <Reveal key={g} delay={i * 60} as="li">
                <div className="flex h-full items-start gap-3 rounded-xl border bg-card p-4">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <HugeiconsIcon icon={Tick02Icon} strokeWidth={2.4} className="size-3" />
                  </span>
                  <span className="text-sm leading-relaxed font-medium">{g}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* Values — varied grid */}
      <Section>
        <SectionHeading
          eyebrow="Our Values"
          title="The principles we live by"
          description="Values aren't wall decoration — they're how we decide, serve and account for our work."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal
              key={v.key}
              delay={i * 70}
              className={cn(i % 4 === 1 && "lg:translate-y-6", i % 4 === 3 && "lg:translate-y-6")}
            >
              <div className="group flex h-full flex-col rounded-2xl border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_14px_36px_-16px_rgb(0_0_0/0.16)]">
                <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <HugeiconsIcon icon={valueIcons[v.icon]} strokeWidth={1.8} className="size-5" />
                </span>
                <h3 className="font-display mt-4 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Approach */}
      <Section className="bg-secondary/50">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Our Approach" title="With communities, not for them" className="mb-0" />
            <Reveal delay={120}>
              <ol className="mt-2 flex flex-col gap-5">
                {[
                  { t: "Listen first", d: "We start by hearing what communities actually need — not what we assume they need." },
                  { t: "Work together", d: "Programs are designed and delivered alongside local leaders, schools and families." },
                  { t: "Build to last", d: "We favour solutions communities can own, sustain and grow long after we leave." },
                  { t: "Stay accountable", d: "We report openly on what works, what doesn't, and where every contribution goes." },
                ].map((s, i) => (
                  <li key={s.t} className="flex gap-4">
                    <span className="font-display flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold">{s.t}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
          <Reveal variant="right">
            <SiteImage image={images.community} ratio="aspect-[4/3]" rounded="rounded-3xl" />
          </Reveal>
        </div>
      </Section>

      {/* Focus areas */}
      <Section>
        <SectionHeading eyebrow="Focus Areas" title="Where we put our energy" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <Link
                href={`/programs/${p.slug}`}
                className="group flex h-full flex-col rounded-2xl border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[0_14px_36px_-16px_rgb(0_0_0/0.16)]"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <HugeiconsIcon icon={programIcons[p.icon]} strokeWidth={1.8} className="size-5" />
                </span>
                <h3 className="font-display mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.tagline}</p>
                <span className="mt-auto flex items-center gap-1 pt-4 text-sm font-medium text-primary">
                  Explore
                  <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section className="bg-warm">
        <SectionHeading
          eyebrow="Leadership"
          title="The people behind the work"
          description="A small team with a big commitment — supported by volunteers across the Pwani region."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 80}>
              <TeamCard member={m} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Link href="/team" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
            Meet the Full Team
            <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4" />
          </Link>
        </Reveal>
      </Section>

      <CtaSection />
    </>
  )
}

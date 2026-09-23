import Link from "next/link"
import { cn } from "@workspace/ui/lib/utils"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { SiteImage } from "./site-image"
import { Reveal } from "./reveal"
import { JsonLd } from "./json-ld"
import { breadcrumbSchema } from "@/lib/seo"
import type { SiteImage as SiteImageType } from "@/lib/data/images"

export function Breadcrumb({
  items,
  light = false,
}: {
  items: { label: string; href?: string }[]
  light?: boolean
}) {
  return (
    <nav aria-label="Breadcrumb">
      <JsonLd data={breadcrumbSchema(items)} />
      <ol
        className={cn(
          "flex flex-wrap items-center gap-1.5 text-sm",
          light ? "text-white/70" : "text-muted-foreground"
        )}
      >
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && (
              <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-3.5 opacity-60" />
            )}
            {item.href ? (
              <Link href={item.href} className={cn("transition-colors", light ? "hover:text-white" : "hover:text-foreground")}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className={light ? "text-white" : "text-foreground font-medium"}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

/** Editorial page hero used on interior pages (non-home). */
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  breadcrumb,
  children,
  variant = "light",
}: {
  eyebrow?: string
  title: string
  description?: string
  image?: SiteImageType
  breadcrumb?: { label: string; href?: string }[]
  children?: React.ReactNode
  variant?: "light" | "image" | "deep"
}) {
  if (variant === "image" && image) {
    return (
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <SiteImage image={image} ratio="aspect-auto" className="absolute inset-0" rounded="rounded-none" imgClassName="animate-hero-drift" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-deep/95 via-deep/60 to-deep/30" />
        <div className="relative mx-auto flex min-h-[55vh] max-w-7xl flex-col justify-end px-4 pt-28 pb-12 sm:px-6 lg:px-8">
          {breadcrumb && (
            <Reveal delay={50} className="mb-4">
              <Breadcrumb items={breadcrumb} light />
            </Reveal>
          )}
          {eyebrow && (
            <Reveal delay={100}>
              <span className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">{eyebrow}</span>
            </Reveal>
          )}
          <Reveal delay={180}>
            <h1 className="font-display mt-3 max-w-3xl text-4xl leading-tight font-semibold text-balance text-white md:text-5xl">
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal delay={280}>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">{description}</p>
            </Reveal>
          )}
          {children && <Reveal delay={360} className="mt-6">{children}</Reveal>}
        </div>
      </section>
    )
  }

  return (
    <section
      className={cn(
        "relative overflow-hidden",
        variant === "deep" ? "bg-deep text-deep-foreground" : "bg-warm"
      )}
    >
      <div aria-hidden className="dots-pattern absolute -top-10 right-0 hidden h-56 w-72 text-foreground/6 lg:block" />
      <div aria-hidden className="absolute -bottom-24 -left-24 size-72 rounded-full bg-brand-soft/60 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-14 sm:px-6 lg:px-8">
        {breadcrumb && (
          <Reveal delay={50} className="mb-5">
            <Breadcrumb items={breadcrumb} light={variant === "deep"} />
          </Reveal>
        )}
        {eyebrow && (
          <Reveal delay={100}>
            <span className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">{eyebrow}</span>
          </Reveal>
        )}
        <Reveal delay={180}>
          <h1 className="font-display mt-3 max-w-3xl text-4xl leading-tight font-semibold text-balance md:text-5xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={280}>
            <p className={cn("mt-4 max-w-2xl text-base leading-relaxed md:text-lg", variant === "deep" ? "text-deep-foreground/75" : "text-muted-foreground")}>
              {description}
            </p>
          </Reveal>
        )}
        {children && <Reveal delay={360} className="mt-6">{children}</Reveal>}
      </div>
    </section>
  )
}

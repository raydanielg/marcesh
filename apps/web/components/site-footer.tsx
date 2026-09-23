import Link from "next/link"
import Image from "next/image"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
  WhatsappIcon,
  Mail01Icon,
  Call02Icon,
  Location01Icon,
} from "@hugeicons/core-free-icons"
import { site } from "@/lib/data/site"
import { images } from "@/lib/data/images"
import { footerNav } from "@/lib/data/navigation"

const socialIcons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  linkedin: LinkedinIcon,
  whatsapp: WhatsappIcon,
} as const

export function SiteFooter() {
  return (
    <footer className="bg-deep text-deep-foreground">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={images.logo.src!}
                alt={images.logo.alt}
                width={44}
                height={44}
                className="size-11 rounded-full object-cover ring-1 ring-white/10"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold tracking-tight text-white">
                  MARCESH
                </span>
                <span className="text-[10px] font-semibold tracking-[0.28em] text-brand">
                  FOUNDATION
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-deep-foreground/75">
              {site.description}
            </p>
            <div className="mt-6 flex gap-2">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-full bg-white/8 text-deep-foreground/80 transition-colors hover:bg-brand hover:text-brand-foreground"
                >
                  <HugeiconsIcon icon={socialIcons[s.icon]} strokeWidth={1.8} className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Quick links" className="lg:col-span-2">
            <h3 className="text-xs font-semibold tracking-[0.18em] text-deep-foreground/60 uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerNav.quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-deep-foreground/80 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Get involved" className="lg:col-span-2">
            <h3 className="text-xs font-semibold tracking-[0.18em] text-deep-foreground/60 uppercase">
              Get Involved
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerNav.getInvolved.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-deep-foreground/80 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold tracking-[0.18em] text-deep-foreground/60 uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-deep-foreground/80">
              <li className="flex items-start gap-2.5">
                <HugeiconsIcon icon={Location01Icon} strokeWidth={2} className="mt-0.5 size-4 shrink-0 text-brand" />
                {site.location}
              </li>
              <li>
                <a href={site.emailHref} className="flex items-center gap-2.5 transition-colors hover:text-white">
                  <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} className="size-4 shrink-0 text-brand" />
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="flex items-center gap-2.5 transition-colors hover:text-white">
                  <HugeiconsIcon icon={Call02Icon} strokeWidth={2} className="size-4 shrink-0 text-brand" />
                  {site.phone}
                </a>
              </li>
            </ul>
            <Link
              href="/donate"
              className="mt-6 inline-flex h-10 items-center justify-center rounded-lg bg-brand px-5 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand/90"
            >
              Support Our Mission
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-deep-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-5">
            {footerNav.legal.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

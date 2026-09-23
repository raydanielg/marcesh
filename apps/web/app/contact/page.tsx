import type { Metadata } from "next"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Location01Icon,
  Mail01Icon,
  Call02Icon,
  MapsLocation01Icon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/decorative"
import { Reveal } from "@/components/reveal"
import { ContactForm } from "@/components/forms/contact-form"
import { site } from "@/lib/data/site"

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${site.name} — ${site.location}, ${site.email}, ${site.phone}.`,
}

const socialIcons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  linkedin: LinkedinIcon,
  whatsapp: WhatsappIcon,
} as const

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you"
        description="Questions, ideas, partnerships or support — reach out and a real person from our team will get back to you."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          {/* Info panel */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <Reveal className="rounded-2xl bg-deep p-7 text-deep-foreground">
              <h2 className="font-display text-xl font-semibold text-white">{site.name}</h2>
              <ul className="mt-6 flex flex-col gap-5 text-sm">
                <li className="flex items-start gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand">
                    <HugeiconsIcon icon={Location01Icon} strokeWidth={1.8} className="size-5" />
                  </span>
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="mt-0.5 text-deep-foreground/70">{site.location}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand">
                    <HugeiconsIcon icon={Mail01Icon} strokeWidth={1.8} className="size-5" />
                  </span>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <a href={site.emailHref} className="mt-0.5 block text-deep-foreground/70 transition-colors hover:text-white">
                      {site.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand">
                    <HugeiconsIcon icon={Call02Icon} strokeWidth={1.8} className="size-5" />
                  </span>
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <a href={site.phoneHref} className="mt-0.5 block text-deep-foreground/70 transition-colors hover:text-white">
                      {site.phone}
                    </a>
                  </div>
                </li>
              </ul>
              <div className="mt-7 border-t border-white/10 pt-5">
                <p className="text-xs font-semibold tracking-[0.18em] text-deep-foreground/50 uppercase">
                  Follow us
                </p>
                <div className="mt-3 flex gap-2">
                  {site.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex size-9 items-center justify-center rounded-full bg-white/10 text-deep-foreground/80 transition-colors hover:bg-brand hover:text-brand-foreground"
                    >
                      <HugeiconsIcon icon={socialIcons[s.icon]} strokeWidth={1.8} className="size-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Map placeholder */}
            <Reveal delay={140} className="relative flex min-h-44 flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border bg-secondary/50 p-6 text-center">
              <div className="dots-pattern absolute inset-0 text-foreground/5" />
              <span className="relative flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <HugeiconsIcon icon={MapsLocation01Icon} strokeWidth={1.8} className="size-5" />
              </span>
              <p className="relative text-sm font-medium">{site.location}</p>
              <p className="relative -mt-1 text-xs text-muted-foreground">Map will be embedded here</p>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal variant="right" className="lg:col-span-3">
            <div className="rounded-3xl border bg-card p-6 shadow-[0_20px_50px_-24px_rgb(0_0_0/0.18)] md:p-9">
              <h2 className="font-display text-xl font-semibold md:text-2xl">Send us a message</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Fill in the form and we'll respond as soon as we can.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}

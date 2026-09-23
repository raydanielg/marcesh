import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section, Container } from "@/components/decorative"
import { site } from "@/lib/data/site"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy of ${site.name} — how we handle information shared with us.`,
}

const sections = [
  {
    title: "1. Introduction",
    body: `${site.name} ("we", "our", "the foundation") respects your privacy. This policy explains what information we collect through this website, why we collect it and how it is used. It applies to all visitors and users of this website.`,
  },
  {
    title: "2. Information we collect",
    body: `When you contact us, apply to volunteer, make a partnership enquiry or interact with forms on this website, you may share personal details such as your name, email address, phone number and the content of your message. We may also collect basic technical information (such as browser type and pages visited) to improve the website experience.`,
  },
  {
    title: "3. How we use your information",
    body: `We use the information you share with us to respond to enquiries, coordinate volunteering, discuss partnerships, and communicate about our programs and events where you have asked us to. We do not sell or rent your personal information to third parties.`,
  },
  {
    title: "4. Donations",
    body: `This website's donation flow is currently a demonstration and does not process payments. When payment processing is enabled in the future, any payment details you provide will be handled by a secure payment provider and not stored on our servers.`,
  },
  {
    title: "5. Data retention and security",
    body: `We keep personal information only for as long as needed to fulfil the purpose it was collected for, and we take reasonable measures to protect it from loss, misuse or unauthorised access.`,
  },
  {
    title: "6. Your rights",
    body: `You may ask us at any time what personal information we hold about you, request a correction, or ask for it to be deleted. Contact us at ${site.email} and we will respond as promptly as possible.`,
  },
  {
    title: "7. Changes to this policy",
    body: `We may update this policy from time to time. The current version will always be available on this page.`,
  },
  {
    title: "8. Contact",
    body: `Questions about this policy? Reach us at ${site.email} or ${site.phone}, or write to us at ${site.location}.`,
  },
]

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How Marcesh Foundation handles the information you share with us."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-muted-foreground">
            Last updated: September 2026 · This is placeholder legal content provided for
            demonstration and should be reviewed before public launch.
          </p>
          <div className="mt-10 flex flex-col gap-8">
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="font-display text-xl font-semibold">{s.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.body}</p>
              </section>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}

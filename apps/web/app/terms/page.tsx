import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/decorative"
import { site } from "@/lib/data/site"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: `Terms of Use | ${site.name}`,
  description: `Terms of use for the ${site.name} website.`,
  path: "/terms",
})

const sections = [
  {
    title: "1. Acceptance of terms",
    body: `By accessing this website you agree to these terms of use. If you do not agree, please do not use the site. The content on this website is provided by ${site.name} for general information about our mission and work.`,
  },
  {
    title: "2. About this website",
    body: `This website presents the programs, projects and stories of ${site.name}. Some features, including the donation flow and form submissions, are demonstration features and do not process real transactions or transmit data to the foundation.`,
  },
  {
    title: "3. Use of content",
    body: `Text, images and other content on this website belong to ${site.name} or are used with permission. You may share links to our pages freely, but please do not reproduce our content for commercial purposes without written consent.`,
  },
  {
    title: "4. Donations and support",
    body: `When donation processing is enabled, contributions will be handled through a secure third-party provider. The foundation commits to using all contributions for its stated programs and mission.`,
  },
  {
    title: "5. Accuracy of information",
    body: `We work hard to keep information on this website accurate and current, but figures and program details shown may be illustrative and are subject to change. Verified statistics and reports will be published as they become available.`,
  },
  {
    title: "6. Limitation of liability",
    body: `This website is provided "as is". To the extent permitted by law, ${site.name} is not liable for any damages arising from the use of this website or reliance on its content.`,
  },
  {
    title: "7. Changes to these terms",
    body: `We may revise these terms at any time. Continued use of the website after changes means you accept the updated terms.`,
  },
  {
    title: "8. Contact",
    body: `Questions about these terms? Contact us at ${site.email} or ${site.phone}.`,
  },
]

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description="The terms governing your use of the Marcesh Foundation website."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]}
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

import type { Metadata } from "next"
import { Inter, Fraunces } from "next/font/google"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@workspace/ui/components/tooltip"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { cn } from "@workspace/ui/lib/utils"
import { site } from "@/lib/data/site"
import { JsonLd } from "@/components/json-ld"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { organizationSchema, websiteSchema } from "@/lib/seo"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz", "SOFT", "WONK"],
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Education, Health & Community Development in Tanzania`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", inter.variable, fraunces.variable, "font-sans")}
    >
      <body className="flex min-h-svh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[80] focus:rounded-lg focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow-lg"
        >
          Skip to content
        </a>
        {/* Marks JS availability before paint so reveal animations never
            hide content when JavaScript is disabled (SEO/no-JS safe). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
        <ThemeProvider>
          <TooltipProvider>
            <JsonLd data={[organizationSchema(), websiteSchema()]} />
            <a
              href="#main"
              className="sr-only z-[70] rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
            >
              Skip to main content
            </a>
            <SiteHeader />
            <main id="main" className="flex-1">
              {children}
            </main>
            <SiteFooter />
            <WhatsAppButton />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

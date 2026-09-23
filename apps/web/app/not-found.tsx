import type { Metadata } from "next"
import Link from "next/link"
import { cn } from "@workspace/ui/lib/utils"
import { buttonVariants } from "@workspace/ui/components/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { Home03Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { DotsField, SoftBlob } from "@/components/decorative"

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | Marcesh Foundation" },
  robots: { index: false },
}

export default function NotFound() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden bg-warm px-4 pt-16">
      <DotsField className="top-24 left-10 h-48 w-64" />
      <SoftBlob className="-right-20 bottom-10 size-80" />
      <div className="relative mx-auto max-w-lg text-center">
        <p className="font-display text-[7rem] leading-none font-bold text-primary/15 select-none md:text-[10rem]">
          404
        </p>
        <h1 className="font-display -mt-8 text-3xl font-semibold md:-mt-12 md:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          The page you&rsquo;re looking for may have moved or no longer exists.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className={cn(buttonVariants({ size: "lg" }), "h-11")}>
            <HugeiconsIcon icon={Home03Icon} strokeWidth={2} className="size-4" />
            Go Home
          </Link>
          <Link href="/projects" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11")}>
            Explore Our Work
            <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

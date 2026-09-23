"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@workspace/ui/lib/utils"
import { buttonVariants } from "@workspace/ui/components/button"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Cancel01Icon,
  Menu01Icon,
  SearchIcon,
  ArrowRight01Icon,
  Mail01Icon,
  Call02Icon,
  Location01Icon,
} from "@hugeicons/core-free-icons"
import { mainNav } from "@/lib/data/navigation"
import { site } from "@/lib/data/site"
import { images } from "@/lib/data/images"

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const isHome = pathname === "/"
  const transparent = isHome && !scrolled

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  React.useEffect(() => setOpen(false), [pathname])

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          transparent
            ? "bg-transparent py-1 text-white"
            : "border-b bg-background/95 shadow-[0_1px_12px_rgb(0_0_0/0.04)] backdrop-blur-md"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Marcesh Foundation — home">
            <Image
              src={images.logo.src!}
              alt={images.logo.alt}
              width={40}
              height={40}
              className="size-10 rounded-full object-cover ring-1 ring-black/5"
            />
            <span className="flex flex-col leading-none">
              <span className={cn("font-display text-lg font-bold tracking-tight", transparent && "text-white")}>
                MARCESH
              </span>
              <span className={cn("text-[10px] font-semibold tracking-[0.28em]", transparent ? "text-white/70" : "text-brand")}>
                FOUNDATION
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  transparent
                    ? "text-white/85 hover:bg-white/10 hover:text-white"
                    : "text-foreground/80 hover:text-foreground",
                  !transparent && isActive(item.href) && "text-primary",
                  transparent && isActive(item.href) && "text-white"
                )}
              >
                {item.label}
                {isActive(item.href) && (
                  <span
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full",
                      transparent ? "bg-white" : "bg-brand"
                    )}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/search"
              aria-label="Search"
              className={cn(
                "hidden size-9 items-center justify-center rounded-md transition-colors sm:flex",
                transparent ? "text-white/85 hover:bg-white/10" : "hover:bg-muted"
              )}
            >
              <HugeiconsIcon icon={SearchIcon} strokeWidth={2} className="size-4.5" />
            </Link>
            <Link
              href="/donate"
              className={cn(
                buttonVariants({ size: "lg" }),
                "hidden bg-brand text-brand-foreground hover:bg-brand/90 sm:inline-flex"
              )}
            >
              Support Our Mission
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className={cn(
                "flex size-9 items-center justify-center rounded-md transition-colors lg:hidden",
                transparent ? "text-white hover:bg-white/10" : "hover:bg-muted"
              )}
            >
              <HugeiconsIcon icon={Menu01Icon} strokeWidth={2} className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-[60] lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-deep/60 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0"
          )}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={cn(
            "absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-background shadow-2xl transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex h-16 items-center justify-between border-b px-5">
            <span className="font-display text-lg font-bold">Marcesh Foundation</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex size-9 items-center justify-center rounded-md hover:bg-muted"
            >
              <HugeiconsIcon icon={Cancel01Icon} strokeWidth={2} className="size-5" />
            </button>
          </div>
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-6">
            <ul className="flex flex-col gap-1">
              {mainNav.map((item, i) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    style={{ transitionDelay: `${40 + i * 25}ms` }}
                    className={cn(
                      "group flex items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium transition-all",
                      open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0",
                      isActive(item.href)
                        ? "bg-secondary text-primary"
                        : "text-foreground/80 hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {item.label}
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      strokeWidth={2}
                      className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-3 border-t px-5 py-5">
            <Link href="/donate" className={cn(buttonVariants({ size: "lg" }), "w-full bg-brand text-brand-foreground hover:bg-brand/90")}>
              Support Our Mission
            </Link>
            <Link href="/get-involved" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full")}>
              Get Involved
            </Link>
            <div className="flex flex-col gap-2 pt-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <HugeiconsIcon icon={Location01Icon} strokeWidth={2} className="size-4" />
                {site.location}
              </span>
              <a href={site.emailHref} className="flex items-center gap-2 hover:text-foreground">
                <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} className="size-4" />
                {site.email}
              </a>
              <a href={site.phoneHref} className="flex items-center gap-2 hover:text-foreground">
                <HugeiconsIcon icon={Call02Icon} strokeWidth={2} className="size-4" />
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

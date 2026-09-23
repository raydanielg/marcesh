import { cn } from "@workspace/ui/lib/utils"

export function DotsField({ className }: { className?: string }) {
  return <div aria-hidden className={cn("dots-pattern pointer-events-none absolute text-foreground/6", className)} />
}

export function SoftBlob({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-full bg-brand-soft/50 blur-3xl", className)}
    />
  )
}

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>
  )
}

export function Section({
  id,
  className,
  children,
}: {
  id?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <Container>{children}</Container>
    </section>
  )
}

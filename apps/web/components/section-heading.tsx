import { cn } from "@workspace/ui/lib/utils"
import { Reveal } from "./reveal"

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}) {
  return (
    <Reveal
      className={cn(
        "mb-10 flex max-w-2xl flex-col gap-4 md:mb-14",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl leading-tight font-semibold text-balance md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  )
}

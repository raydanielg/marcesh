import { HugeiconsIcon } from "@hugeicons/react"
import { SearchIcon, ArrowLeft01Icon } from "@hugeicons/core-free-icons"

export function EmptyState({
  title = "Nothing found",
  description = "Try adjusting your search or filters.",
  onReset,
  resetLabel = "Clear filters",
}: {
  title?: string
  description?: string
  onReset?: () => void
  resetLabel?: string
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed px-6 py-16 text-center">
      <span className="flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
        <HugeiconsIcon icon={SearchIcon} strokeWidth={2} className="size-5" />
      </span>
      <h3 className="font-display mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-1.5 max-w-sm text-sm text-muted-foreground">{description}</p>
      {onReset && (
        <button
          type="button"
          onClick={onReset}
          className="mt-5 inline-flex items-center gap-1.5 rounded-lg border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} className="size-4" />
          {resetLabel}
        </button>
      )}
    </div>
  )
}

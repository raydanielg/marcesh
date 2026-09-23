import { HugeiconsIcon } from "@hugeicons/react"
import { CheckmarkCircle02Icon, ArrowLeft01Icon } from "@hugeicons/core-free-icons"

export function FormSuccess({
  title,
  message,
  onReset,
  resetLabel = "Fill the form again",
}: {
  title: string
  message: string
  onReset?: () => void
  resetLabel?: string
}) {
  return (
    <div className="flex flex-col items-center rounded-2xl border bg-secondary/40 px-6 py-14 text-center">
      <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
        <HugeiconsIcon icon={CheckmarkCircle02Icon} strokeWidth={1.6} className="size-7" />
      </span>
      <h3 className="font-display mt-5 text-2xl font-semibold">{title}</h3>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{message}</p>
      {onReset && (
        <button
          type="button"
          onClick={onReset}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} strokeWidth={2} className="size-4" />
          {resetLabel}
        </button>
      )}
    </div>
  )
}

export function MockNote() {
  return (
    <p className="rounded-lg bg-muted px-3.5 py-2.5 text-xs leading-relaxed text-muted-foreground">
      This is a frontend-only demonstration form. Nothing is sent or stored — a backend
      integration can be connected later.
    </p>
  )
}

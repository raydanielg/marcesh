import * as React from "react"
import { cn } from "@workspace/ui/lib/utils"
import { Label } from "@workspace/ui/components/label"

export function FormField({
  label,
  htmlFor,
  error,
  required,
  hint,
  children,
  className,
}: {
  label: string
  htmlFor: string
  error?: string
  required?: boolean
  hint?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <Label htmlFor={htmlFor} className="text-sm font-medium">
        {label}
        {required && <span className="ml-0.5 text-destructive">*</span>}
      </Label>
      {children}
      {hint && !error && <p className="text-xs text-muted-foreground">{hint}</p>}
      {error && (
        <p role="alert" className="text-xs font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}

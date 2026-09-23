"use client"

import * as React from "react"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import { HugeiconsIcon } from "@hugeicons/react"
import { Tick02Icon, Loading03Icon } from "@hugeicons/core-free-icons"
import { FormField } from "./form-field"

export function EventRegistration({ eventTitle, past }: { eventTitle: string; past: boolean }) {
  const [open, setOpen] = React.useState(false)
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [loading, setLoading] = React.useState(false)
  const [done, setDone] = React.useState(false)

  if (past) {
    return (
      <span className="inline-flex h-11 items-center rounded-lg bg-muted px-5 text-sm font-medium text-muted-foreground">
        This event has ended
      </span>
    )
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs: Record<string, string> = {}
    if (!name.trim()) errs.name = "Please enter your name."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Please enter a valid email."
    setErrors(errs)
    if (Object.keys(errs).length) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setDone(true)
    }, 800)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button size="lg" className="h-11 bg-brand px-6 text-brand-foreground hover:bg-brand/90" />
        }
      >
        Register Interest
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {done ? (
          <div className="flex flex-col items-center py-6 text-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <HugeiconsIcon icon={Tick02Icon} strokeWidth={2} className="size-6" />
            </span>
            <DialogHeader className="mt-4">
              <DialogTitle className="font-display text-xl">Interest noted — on screen</DialogTitle>
              <DialogDescription className="mt-2 leading-relaxed">
                This is a frontend demonstration, so your registration has not been sent.
                To attend "{eventTitle}", please contact us at marceshfoundation@gmail.com
                or +255 628 312 926.
              </DialogDescription>
            </DialogHeader>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-xl">Register your interest</DialogTitle>
              <DialogDescription>
                {eventTitle} — leave your details to preview the registration flow.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={submit} className="flex flex-col gap-4" noValidate>
              <FormField label="Full name" htmlFor="er-name" error={errors.name} required>
                <Input id="er-name" value={name} onChange={(e) => setName(e.target.value)} className="h-10" />
              </FormField>
              <FormField label="Email" htmlFor="er-email" error={errors.email} required>
                <Input id="er-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="h-10" />
              </FormField>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Demo only — no data is stored or sent.
              </p>
              <DialogFooter>
                <span />
                <Button type="submit" disabled={loading}>
                  {loading && <HugeiconsIcon icon={Loading03Icon} strokeWidth={2} className="size-4 animate-spin" />}
                  {loading ? "Submitting…" : "Submit"}
                </Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

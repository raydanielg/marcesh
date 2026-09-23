"use client"

import * as React from "react"
import { cn } from "@workspace/ui/lib/utils"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"
import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { NativeSelect } from "@workspace/ui/components/native-select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@workspace/ui/components/dialog"
import { HugeiconsIcon } from "@hugeicons/react"
import { Loading03Icon } from "@hugeicons/core-free-icons"
import { FormField } from "./form-field"
import { MockNote } from "./form-success"

const presets = [10000, 25000, 50000, 100000]

export function DonateForm() {
  const [amount, setAmount] = React.useState<number | null>(25000)
  const [custom, setCustom] = React.useState("")
  const [currency, setCurrency] = React.useState("TZS")
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [anonymous, setAnonymous] = React.useState(false)
  const [message, setMessage] = React.useState("")
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [loading, setLoading] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  const effectiveAmount = custom ? Number(custom) : amount

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs: Record<string, string> = {}
    if (!effectiveAmount || effectiveAmount <= 0) errs.amount = "Please choose or enter an amount."
    if (!anonymous) {
      if (!name.trim()) errs.name = "Please enter your name."
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Please enter a valid email."
    }
    setErrors(errs)
    if (Object.keys(errs).length) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setOpen(true)
    }, 900)
  }

  return (
    <>
      <form onSubmit={submit} className="flex flex-col gap-6" noValidate>
        <FormField label="Donation amount" htmlFor="amount" error={errors.amount} required>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4" role="group" aria-label="Amount presets">
            {presets.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => {
                  setAmount(p)
                  setCustom("")
                }}
                aria-pressed={!custom && amount === p}
                className={cn(
                  "h-11 rounded-lg border text-sm font-semibold transition-colors",
                  !custom && amount === p
                    ? "border-primary bg-primary text-primary-foreground"
                    : "hover:border-foreground/30"
                )}
              >
                {p.toLocaleString()}
              </button>
            ))}
          </div>
          <div className="mt-2.5 flex gap-2.5">
            <NativeSelect
              aria-label="Currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-28 [&_select]:h-11"
            >
              <option value="TZS">TZS</option>
              <option value="USD">USD</option>
            </NativeSelect>
            <Input
              id="amount"
              inputMode="numeric"
              placeholder="Custom amount"
              value={custom}
              onChange={(e) => setCustom(e.target.value.replace(/[^0-9]/g, ""))}
              className="h-11"
            />
          </div>
        </FormField>

        <label className="flex cursor-pointer items-center gap-2.5 text-sm">
          <Checkbox
            checked={anonymous}
            onCheckedChange={(v) => setAnonymous(v === true)}
            aria-label="Donate anonymously"
          />
          Donate anonymously
        </label>

        {!anonymous && (
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="Full name" htmlFor="d-name" error={errors.name} required>
              <Input id="d-name" value={name} onChange={(e) => setName(e.target.value)} className="h-11" autoComplete="name" />
            </FormField>
            <FormField label="Email" htmlFor="d-email" error={errors.email} required>
              <Input id="d-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="h-11" autoComplete="email" />
            </FormField>
          </div>
        )}

        <FormField label="Phone (optional)" htmlFor="d-phone">
          <Input id="d-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="h-11" autoComplete="tel" />
        </FormField>

        <FormField label="Message (optional)" htmlFor="d-message">
          <Textarea id="d-message" value={message} onChange={(e) => setMessage(e.target.value)} rows={3} placeholder="Leave a note of encouragement…" />
        </FormField>

        <MockNote />

        <Button type="submit" size="lg" disabled={loading} className="h-12 bg-brand text-brand-foreground hover:bg-brand/90">
          {loading && <HugeiconsIcon icon={Loading03Icon} strokeWidth={2} className="size-4 animate-spin" />}
          {loading ? "Preparing…" : `Donate ${effectiveAmount ? `${currency} ${effectiveAmount.toLocaleString()}` : ""}`}
        </Button>
      </form>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">Thank you{anonymous ? "" : name ? `, ${name.split(" ")[0]}` : ""}!</DialogTitle>
            <DialogDescription className="text-sm leading-relaxed">
              Donation setup is ready for payment integration. No payment has been
              processed — this demonstration shows how the donation flow will work
              once a payment provider is connected.
            </DialogDescription>
          </DialogHeader>
          <div className="rounded-lg bg-secondary/60 p-4 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Amount</span>
              <span className="font-semibold">
                {currency} {(effectiveAmount ?? 0).toLocaleString()}
              </span>
            </div>
            <div className="mt-1.5 flex justify-between">
              <span className="text-muted-foreground">Donor</span>
              <span className="font-semibold">{anonymous ? "Anonymous" : name || "—"}</span>
            </div>
          </div>
          <DialogFooter showCloseButton>
            <span />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

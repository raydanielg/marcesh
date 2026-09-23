"use client"

import * as React from "react"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"
import { Button } from "@workspace/ui/components/button"
import { NativeSelect } from "@workspace/ui/components/native-select"
import { HugeiconsIcon } from "@hugeicons/react"
import { Loading03Icon } from "@hugeicons/core-free-icons"
import { FormField } from "./form-field"
import { FormSuccess, MockNote } from "./form-success"

const orgTypes = ["Company / Business", "NGO / Non-profit", "School / Institution", "Government body", "Community group", "Other"]
const interests = ["Education", "Health", "Community Development", "Support for the Needy", "Sponsorship", "Other"]

export function PartnerForm() {
  const [form, setForm] = React.useState({
    organization: "",
    contact: "",
    email: "",
    phone: "",
    type: orgTypes[0],
    interest: interests[0],
    message: "",
  })
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [loading, setLoading] = React.useState(false)
  const [done, setDone] = React.useState(false)

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs: Record<string, string> = {}
    if (!form.organization.trim()) errs.organization = "Please enter your organisation."
    if (!form.contact.trim()) errs.contact = "Please enter a contact person."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Please enter a valid email."
    setErrors(errs)
    if (Object.keys(errs).length) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setDone(true)
    }, 900)
  }

  if (done) {
    return (
      <FormSuccess
        title="Partnership interest noted on screen"
        message="Your partnership preview is complete. Since this website currently runs without a backend, nothing has been sent yet. Please email marceshfoundation@gmail.com to confirm your partnership interest."
        onReset={() => setDone(false)}
      />
    )
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Organization" htmlFor="p-org" error={errors.organization} required>
          <Input id="p-org" value={form.organization} onChange={set("organization")} className="h-11" autoComplete="organization" />
        </FormField>
        <FormField label="Contact person" htmlFor="p-contact" error={errors.contact} required>
          <Input id="p-contact" value={form.contact} onChange={set("contact")} className="h-11" />
        </FormField>
        <FormField label="Email" htmlFor="p-email" error={errors.email} required>
          <Input id="p-email" type="email" value={form.email} onChange={set("email")} className="h-11" autoComplete="email" />
        </FormField>
        <FormField label="Phone" htmlFor="p-phone">
          <Input id="p-phone" type="tel" value={form.phone} onChange={set("phone")} className="h-11" autoComplete="tel" />
        </FormField>
        <FormField label="Organization type" htmlFor="p-type">
          <NativeSelect id="p-type" value={form.type} onChange={set("type")} className="w-full [&_select]:h-11">
            {orgTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </NativeSelect>
        </FormField>
        <FormField label="Area of interest" htmlFor="p-interest">
          <NativeSelect id="p-interest" value={form.interest} onChange={set("interest")} className="w-full [&_select]:h-11">
            {interests.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </NativeSelect>
        </FormField>
      </div>
      <FormField label="Message" htmlFor="p-message">
        <Textarea id="p-message" value={form.message} onChange={set("message")} rows={4} placeholder="Tell us about the partnership you have in mind…" />
      </FormField>
      <MockNote />
      <Button type="submit" size="lg" disabled={loading} className="h-12">
        {loading && <HugeiconsIcon icon={Loading03Icon} strokeWidth={2} className="size-4 animate-spin" />}
        {loading ? "Submitting…" : "Send Partnership Request"}
      </Button>
    </form>
  )
}

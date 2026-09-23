"use client"

import * as React from "react"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"
import { Button } from "@workspace/ui/components/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { Loading03Icon, SendIcon } from "@hugeicons/core-free-icons"
import { FormField } from "./form-field"
import { FormSuccess, MockNote } from "./form-success"

export function ContactForm() {
  const [form, setForm] = React.useState({ name: "", email: "", phone: "", subject: "", message: "" })
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [loading, setLoading] = React.useState(false)
  const [done, setDone] = React.useState(false)

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = "Please enter your name."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Please enter a valid email."
    if (!form.subject.trim()) errs.subject = "Please enter a subject."
    if (form.message.trim().length < 10) errs.message = "Please write a message (at least 10 characters)."
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
        title="Message preview complete"
        message="Your message is ready. Because this website runs without a backend, it has not been delivered yet — please email marceshfoundation@gmail.com directly and we'll be glad to hear from you."
        onReset={() => setDone(false)}
        resetLabel="Write another message"
      />
    )
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Name" htmlFor="c-name" error={errors.name} required>
          <Input id="c-name" value={form.name} onChange={set("name")} className="h-11" autoComplete="name" />
        </FormField>
        <FormField label="Email" htmlFor="c-email" error={errors.email} required>
          <Input id="c-email" type="email" value={form.email} onChange={set("email")} className="h-11" autoComplete="email" />
        </FormField>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Phone (optional)" htmlFor="c-phone">
          <Input id="c-phone" type="tel" value={form.phone} onChange={set("phone")} className="h-11" autoComplete="tel" />
        </FormField>
        <FormField label="Subject" htmlFor="c-subject" error={errors.subject} required>
          <Input id="c-subject" value={form.subject} onChange={set("subject")} className="h-11" />
        </FormField>
      </div>
      <FormField label="Message" htmlFor="c-message" error={errors.message} required>
        <Textarea id="c-message" value={form.message} onChange={set("message")} rows={5} placeholder="How can we help?" />
      </FormField>
      <MockNote />
      <Button type="submit" size="lg" disabled={loading} className="h-12">
        {loading ? (
          <HugeiconsIcon icon={Loading03Icon} strokeWidth={2} className="size-4 animate-spin" />
        ) : (
          <HugeiconsIcon icon={SendIcon} strokeWidth={2} className="size-4" />
        )}
        {loading ? "Sending…" : "Send Message"}
      </Button>
    </form>
  )
}

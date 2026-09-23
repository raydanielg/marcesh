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

const interests = ["Education", "Health", "Community Development", "Support for the Needy", "Fundraising & Logistics", "Media & Communications"]
const availability = ["Weekdays", "Weekends", "Evenings", "Flexible"]

export function VolunteerForm() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    skills: "",
    interest: interests[0],
    availability: availability[0],
    experience: "",
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
    if (!form.name.trim()) errs.name = "Please enter your full name."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Please enter a valid email."
    if (!form.phone.trim()) errs.phone = "Please enter your phone number."
    if (!form.location.trim()) errs.location = "Please enter your location."
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
        title="Application received on screen"
        message="Your volunteer application preview is complete. Because this website currently runs without a backend, your details have not been sent to Marcesh Foundation yet. Please reach us directly at marceshfoundation@gmail.com or +255 628 312 926 to confirm your interest."
        onReset={() => setDone(false)}
        resetLabel="Fill the form again"
      />
    )
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Full name" htmlFor="v-name" error={errors.name} required>
          <Input id="v-name" value={form.name} onChange={set("name")} className="h-11" autoComplete="name" />
        </FormField>
        <FormField label="Email" htmlFor="v-email" error={errors.email} required>
          <Input id="v-email" type="email" value={form.email} onChange={set("email")} className="h-11" autoComplete="email" />
        </FormField>
        <FormField label="Phone" htmlFor="v-phone" error={errors.phone} required>
          <Input id="v-phone" type="tel" value={form.phone} onChange={set("phone")} className="h-11" autoComplete="tel" />
        </FormField>
        <FormField label="Location" htmlFor="v-location" error={errors.location} required>
          <Input id="v-location" value={form.location} onChange={set("location")} className="h-11" placeholder="e.g. Kibaha" />
        </FormField>
        <FormField label="Area of interest" htmlFor="v-interest">
          <NativeSelect id="v-interest" value={form.interest} onChange={set("interest")} className="w-full [&_select]:h-11">
            {interests.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </NativeSelect>
        </FormField>
        <FormField label="Availability" htmlFor="v-availability">
          <NativeSelect id="v-availability" value={form.availability} onChange={set("availability")} className="w-full [&_select]:h-11">
            {availability.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </NativeSelect>
        </FormField>
      </div>
      <FormField label="Skills" htmlFor="v-skills" hint="e.g. teaching, first aid, photography, organising">
        <Input id="v-skills" value={form.skills} onChange={set("skills")} className="h-11" />
      </FormField>
      <FormField label="Previous experience" htmlFor="v-experience">
        <Textarea id="v-experience" value={form.experience} onChange={set("experience")} rows={3} placeholder="Any volunteer or community experience…" />
      </FormField>
      <FormField label="Message" htmlFor="v-message">
        <Textarea id="v-message" value={form.message} onChange={set("message")} rows={3} placeholder="Tell us why you'd like to volunteer…" />
      </FormField>
      <MockNote />
      <Button type="submit" size="lg" disabled={loading} className="h-12">
        {loading && <HugeiconsIcon icon={Loading03Icon} strokeWidth={2} className="size-4 animate-spin" />}
        {loading ? "Submitting…" : "Submit Application"}
      </Button>
    </form>
  )
}

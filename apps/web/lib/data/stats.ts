/**
 * Demo statistics — replace with verified figures before launch.
 */
export const stats = [
  { value: 1250, suffix: "+", label: "People Supported" },
  { value: 18, suffix: "", label: "Community Initiatives" },
  { value: 12, suffix: "", label: "Education Programs" },
  { value: 9, suffix: "", label: "Health Initiatives" },
] as const

/** Demo chart data for the Impact page. */
export const impactByYear = [
  { year: "2022", people: 320 },
  { year: "2023", people: 540 },
  { year: "2024", people: 890 },
  { year: "2025", people: 1250 },
] as const

export const programDistribution = [
  { label: "Education", value: 42 },
  { label: "Health", value: 28 },
  { label: "Community", value: 18 },
  { label: "Support", value: 12 },
] as const

import { images, type SiteImage } from "./images"

export type GalleryCategory = "Education" | "Health" | "Community" | "Projects"

export type GalleryItem = {
  id: string
  image: SiteImage
  category: GalleryCategory
}

export const galleryCategories: ("All" | GalleryCategory)[] = [
  "All",
  "Education",
  "Health",
  "Community",
  "Projects",
]

export const gallery: GalleryItem[] = [
  { id: "g1", image: { ...images.education, caption: "Learning materials shared with students" }, category: "Education" },
  { id: "g2", image: { ...images.heroAlt, caption: "Certificate of appreciation at Restore a Child 2026" }, category: "Education" },
  { id: "g3", image: { ...images.support, caption: "Donated supplies ready for families" }, category: "Projects" },
  { id: "g4", image: { ...images.community, caption: "Students gathered for the community event" }, category: "Community" },
  { id: "g5", image: { ...images.aboutSecondary, caption: "Our facilitator between sessions" }, category: "Community" },
  { id: "g6", image: { ...images.health, caption: "A lively health awareness session" }, category: "Health" },
  { id: "g7", image: { ...images.extra[0]!, caption: "Students outside the event hall" }, category: "Community" },
  { id: "g8", image: { ...images.team[2], caption: "Volunteers marking a good day" }, category: "Community" },
  { id: "g9", image: { ...images.extra[1]!, caption: "Listening during a mentorship session" }, category: "Education" },
  { id: "g10", image: { ...images.cta, caption: "Together under the trees" }, category: "Community" },
  { id: "g11", image: { ...images.extra[2]!, caption: "Volunteer duo at Restore a Child 2026" }, category: "Projects" },
  { id: "g12", image: { ...images.extra[3]!, caption: "A volunteer at the pledge wall" }, category: "Community" },
]

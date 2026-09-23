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
  { id: "g1", image: { ...images.education, caption: "Certificate ceremony at Restore a Child 2026" }, category: "Education" },
  { id: "g2", image: { ...images.about, caption: "The team at Restore a Child 2026" }, category: "Community" },
  { id: "g3", image: { ...images.support, caption: "Volunteers sharing a lighter moment" }, category: "Community" },
  { id: "g4", image: { ...images.community, caption: "Volunteer team at a community event" }, category: "Community" },
  { id: "g5", image: { ...images.aboutSecondary, caption: "A volunteer at the pledge wall" }, category: "Community" },
  { id: "g6", image: { ...images.placeholders.gallery, caption: "Health outreach session" }, category: "Health" },
  { id: "g7", image: { ...images.placeholders.gallery, caption: "School supplies distribution" }, category: "Projects" },
  { id: "g8", image: { ...images.placeholders.gallery, caption: "Community workshop" }, category: "Community" },
  { id: "g9", image: { ...images.placeholders.gallery, caption: "Mentorship session" }, category: "Education" },
  { id: "g10", image: { ...images.placeholders.gallery, caption: "Health awareness day" }, category: "Health" },
  { id: "g11", image: { ...images.placeholders.gallery, caption: "Tree planting day" }, category: "Projects" },
  { id: "g12", image: { ...images.placeholders.gallery, caption: "Community gathering" }, category: "Community" },
]

import type { Service, GalleryImage, NavLink } from "../types";

/** Navigation links for the site header. */
export const navLinks: ReadonlyArray<NavLink> = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

/** Service offerings displayed in the services section. */
export const services: ReadonlyArray<Service> = [
  {
    id: 1,
    name: "Weaves",
    description:
      "Premium quality weave installations using ethically sourced hair for a natural, luxurious finish.",
    duration: "2-3 hours",
  },
  {
    id: 2,
    name: "Weave Installation",
    description:
      "Expert fitting and blending techniques ensuring seamless integration with your natural hairline.",
    duration: "2-4 hours",
  },
  {
    id: 3,
    name: "Weave Treatment",
    description:
      "Specialized care and maintenance treatments to extend the life and lustre of your weave.",
    duration: "1-2 hours",
  },
  {
    id: 4,
    name: "Sew-ins",
    description:
      "Traditional sew-in method offering maximum security and versatile styling options.",
    duration: "3-4 hours",
  },
  {
    id: 5,
    name: "Frontal Ponytails",
    description:
      "Sleek, sculpted ponytail installations with lace frontal for an elevated everyday look.",
    duration: "1-2 hours",
  },
];

/** Gallery images for the portfolio section. */
export const galleryImages: ReadonlyArray<GalleryImage> = [
  {
    id: 1,
    src: "/gallery/previous_work_1.jpeg",
    alt: "Professional weave installation showcasing natural blending",
    span: "tall",
  },
  {
    id: 2,
    src: "/gallery/previous_work_2.jpeg",
    alt: "Luxurious sew-in with seamless finish",
    span: "wide",
  },
  {
    id: 3,
    src: "/gallery/previous_work_3.jpeg",
    alt: "Elegant frontal ponytail styling",
    span: "normal",
  },
  {
    id: 4,
    src: "/gallery/previous_work_4.jpeg",
    alt: "Precision weave treatment with glossy finish",
    span: "wide",
  },
  {
    id: 5,
    src: "/gallery/previous_work_5.jpeg",
    alt: "Sculpted frontal ponytail installation",
    span: "normal",
  },
  {
    id: 6,
    src: "/gallery/previous_work_6.jpeg",
    alt: "Full sew-in weave with natural movement",
    span: "tall",
  },
];

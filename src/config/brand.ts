import type { BrandConfig } from "../types";

/**
 * Centralized brand configuration.
 * This is the single source of truth for all branding values.
 * To rebrand the application, only this file needs to change.
 */
export const brand: BrandConfig = {
  name: "Nonhlanhla's HairGlam",
  tagline: "Professional Weave Installations & Care",
  phone: "+27 65 967 8914",
  email: "hello@nonhlanlashairglam.co.za",
  location: "Mpumalanga, South Africa",
  socialLinks: [
    { platform: "Instagram", url: "https://www.instagram.com/nonhlanhlas_hairglam/" },
  ],
  hours: "Mon - Sat: 8:00 AM - 6:00 PM",
  logo: "/logo.png",
  colors: {
    primary: "#FFFFFF",
    secondary: "#DCAE96",
    charcoal: "#1A1A1A",
    surfaceAccent: "#F9F4F1",
    background: "#FFFFFF",
    secondaryBorder: "rgba(220, 174, 150, 0.3)",
    textMuted: "#444748",
    textLight: "#E5E2E1",
    textSubdued: "#747878",
    lightboxOverlay: "rgba(255, 255, 255, 0.95)",
  },
  fonts: {
    heading: "Libre Franklin, sans-serif",
    body: "Libre Franklin, sans-serif",
  },
};

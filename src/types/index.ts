/**
 * Shared type definitions for the Nonhlanhla's HairGlam application.
 */

/** Brand configuration interface for whitelabel support. */
export interface BrandConfig {
  readonly name: string;
  readonly tagline: string;
  readonly phone: string;
  readonly email: string;
  readonly location: string;
  readonly socialLinks: ReadonlyArray<SocialLink>;
  readonly hours: string;
  readonly logo: string;
  readonly colors: BrandColors;
  readonly fonts: BrandFonts;
}

export interface BrandColors {
  readonly primary: string;
  readonly secondary: string;
  readonly charcoal: string;
  readonly surfaceAccent: string;
  readonly background: string;
  readonly secondaryBorder: string;
  readonly textMuted: string;
  readonly textLight: string;
  readonly textSubdued: string;
  readonly lightboxOverlay: string;
}

export interface BrandFonts {
  readonly heading: string;
  readonly body: string;
}

export interface SocialLink {
  readonly platform: string;
  readonly url: string;
}

/** Service offering displayed in the services section. */
export interface Service {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly duration: string;
}

/** Gallery image displayed in the portfolio section. */
export interface GalleryImage {
  readonly id: number;
  readonly src: string;
  readonly alt: string;
  readonly span?: "wide" | "tall" | "normal";
}

/** Navigation link item. */
export interface NavLink {
  readonly label: string;
  readonly href: string;
}

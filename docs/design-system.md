---
name: Ebony Minimalist Luxury
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#444748'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#747878'
  outline-variant: '#c4c7c8'
  surface-tint: '#5d5f5f'
  primary: '#5d5f5f'
  on-primary: '#ffffff'
  primary-container: '#ffffff'
  on-primary-container: '#747676'
  inverse-primary: '#c6c6c7'
  secondary: '#7a5642'
  on-secondary: '#ffffff'
  secondary-container: '#fecdb4'
  on-secondary-container: '#795541'
  tertiary: '#5d5f5f'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffffff'
  on-tertiary-container: '#747676'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ecbda4'
  on-secondary-fixed: '#2e1506'
  on-secondary-fixed-variant: '#603f2d'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Libre Franklin
    fontSize: 64px
    fontWeight: '300'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Libre Franklin
    fontSize: 40px
    fontWeight: '300'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Libre Franklin
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
    letterSpacing: 0.02em
  headline-sm:
    fontFamily: Libre Franklin
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Libre Franklin
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Libre Franklin
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Libre Franklin
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  button:
    fontFamily: Libre Franklin
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

This design system embodies a modern luxury aesthetic specifically tailored for a high-end beauty studio. The brand personality is sophisticated, serene, and editorial, catering to young professionals who value curated excellence and minimalist elegance.

The design style is **Minimalist with a High-Fashion Editorial influence**. It prioritizes generous whitespace to create a "gallery-like" atmosphere, allowing high-quality imagery of hair textures and styling to breathe. The emotional response should be one of calm, exclusivity, and effortless confidence. Expect clean lines, intentional asymmetrical balance, and a rejection of unnecessary decorative clutter in favor of structural purity.

## Colors

The palette is anchored by a high-contrast relationship between pure white and deep charcoal, softened by a sophisticated dusty pink.

- **Primary (White):** Used as the foundational surface color to maximize light and provide a clean, clinical yet luxurious backdrop.
- **Secondary (Dusty Pink):** Utilized for meaningful highlights, active states, and subtle backgrounds to bring warmth and a "skin-tone" adjacent softness to the UI.
- **Neutral (Charcoal #1A1A1A):** Used exclusively for typography and hairline strokes to ensure crisp legibility and a premium "ink-on-paper" feel.
- **Surface Accent (#F9F4F1):** A very pale tint of the secondary color used for subtle sectioning and hover states without breaking the minimalist aesthetic.

## Typography

The typography system relies entirely on **Libre Franklin**, utilizing its various weights to create hierarchy within a strictly sans-serif environment. 

The "Display" levels use a Light weight (300) with tight tracking to mimic high-end fashion mastheads. "Body" text is set with generous line-height to ensure a comfortable, airy reading experience. "Labels" and "Buttons" use uppercase styling with increased letter spacing to provide a rhythmic contrast to the fluid body copy. Typography is predominantly Charcoal (#1A1A1A) on White, or White on Dusty Pink for high-impact callouts.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain an editorial "page" feel, transitioning to a fluid model on mobile devices.

- **Grid:** A 12-column grid with wide gutters (24px) allows for asymmetrical content placement, such as overlapping images or text blocks that span specific column ranges (e.g., a headline spanning columns 2-10).
- **Whitespace:** Use "Section Gaps" (120px+) liberally between different service categories or gallery sections to reinforce the luxury positioning.
- **Rhythm:** All spacing is based on an 8px base unit. Internal component padding should be generous—avoiding "tight" containers at all costs.

## Elevation & Depth

This design system eschews traditional shadows in favor of **Tonal Layers and Low-Contrast Outlines**. 

- **Depth:** Physical depth is suggested through the stacking of elements. For example, an image may slightly overlap a Dusty Pink background block.
- **Lines:** Use 1px solid lines in a very light neutral (or #DCAE96 at 30% opacity) to define sections without adding visual weight.
- **Overlays:** When modals or menus are required, use a solid White background or a very subtle 20px background blur (Glassmorphism) to maintain the light, airy feel without the heaviness of dark scrims.

## Shapes

The shape language is **Strictly Sharp (0px)**. 

To maintain the architectural, high-fashion aesthetic, all buttons, input fields, image containers, and cards must have 90-degree corners. This sharpness communicates precision, professionalism, and modernism. The only exception to this rule is the natural, organic shapes found within photography of hair and models, which provides a necessary contrast to the rigid UI structure.

## Styling Approach

No `.module.css` files. No inline style objects or style definitions inside component files. All style objects must be defined in `src/config/styles.ts` and imported by components. This centralizes all visual decisions into a single file alongside `brand.ts`, making rebranding trivial.

Components use Mantine's `style` prop with references to pre-defined objects from `src/config/styles.ts`. Color values within `styles.ts` must reference `brand.colors.*`.

**No hardcoded color values in components.** Every color reference must come from `brand.colors.*` (imported from `src/config/brand.ts`). If a new tone or opacity variant is needed, define it in the `BrandColors` interface and `brand.ts` first.

## Components

- **Buttons:** Primary buttons are solid Charcoal (#1A1A1A) with White text, Sharp corners, and no shadow. Secondary buttons are outlined (1px Charcoal) or solid Dusty Pink. Hover states should involve a subtle shift in color or a slight expansion of the letter spacing.
- **Input Fields:** Minimalist design—bottom-border only (1px Charcoal) with labels positioned above in the "label-caps" style.
- **Cards:** No borders or shadows. Cards are defined by their content and whitespace. If a background is needed, use the Surface Accent (#F9F4F1).
- **Service Lists:** Use large, thin-weight numbers (Display-lg) next to service names to create an editorial table-of-contents feel.
- **Chips/Tags:** Small, rectangular boxes with 1px Charcoal borders, using the "label-caps" typography.
- **Imagery:** All images should feature high-quality photography with consistent lighting. Use intentional cropping (e.g., very tall vertical or wide horizontal) to reinforce the editorial grid.
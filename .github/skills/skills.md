
# Agent Skills (TypeScript + React + Vite + Mantine)

This document defines what an AI coding agent is expected to do well in this repository.

## Architecture Overview

This project is a **client-side-only static website** built with TypeScript, React, Vite, and Mantine. There is no backend, no database, no authentication server.

```
src/
  main.tsx             -- app entry, MantineProvider with brand theme
  App.tsx              -- root component composing all sections
  config/
    brand.ts           -- single-point whitelabel config (THE source of truth)
    theme.ts           -- Mantine createTheme() derived from brand.ts
    styles.ts          -- centralized style objects (no inline styles in components)
  types/
    index.ts           -- shared TypeScript interfaces (BrandConfig, Service, etc.)
  components/          -- React components (no style definitions inside)
  assets/
    data.ts            -- static content arrays (services, gallery, nav links)
  styles/
    global.css         -- minimal global CSS resets
public/
  logo.png             -- brand logo and favicon
  gallery/             -- portfolio images
```

**Golden rules:**
- No server-side code, no API endpoints, no database.
- All brand identity originates from `src/config/brand.ts`.
- All style objects live in `src/config/styles.ts` (no inline styles, no .module.css).
- All colors reference `brand.colors.*` (no hardcoded hex/rgb/rgba in components).
- Components import styles from `styles.ts` and apply via Mantine's `style` prop.
- To rebrand the entire site, only `brand.ts` needs to change.
- Color palette: Primary White, Secondary Dusty Pink (#DCAE96), Charcoal text (#1A1A1A).
- Typography: **Libre Franklin** for all headings and body text.
- All visual assets must be real -- strictly no AI-generated images.

## Core Delivery Skills

1. Build React components using Mantine's component library and theming system.
2. Maintain centralized whitelabeling -- all brand values flow from `src/config/brand.ts` through the Mantine theme.
3. Maintain centralized styling -- all style objects live in `src/config/styles.ts`, never in component files.
4. Implement responsive layouts using Mantine's `useMediaQuery` hook and responsive style functions in `styles.ts`.
5. Keep all data static -- TypeScript arrays in `src/assets/data.ts` or `public/` assets. No server fetches.
6. Write type-safe code with `strict: true` TypeScript -- explicit types, no `any`.
7. Perform a mandatory compliance pass before completion: confirm changes align with `.github/copilot-instructions.md`, `docs/design-system.md`, and other applicable guidance in `docs/`.

## Whitelabeling Skills

1. Add new brand values to `src/config/brand.ts` and extend the `BrandColors` interface in `src/types/index.ts`.
2. Wire brand colors into the Mantine theme via `src/config/theme.ts` using `createTheme()`.
3. Reference brand tokens in `src/config/styles.ts` as `colors.tokenName` -- never in component files.
4. Never hardcode colors, font families, or brand text in component files -- all must trace back to `brand.ts` via `styles.ts`.
5. Validate the whitelabel rule: if rebranding requires editing anything other than `brand.ts`, the violating component must be refactored.

## Styling Skills

1. Define all style objects in `src/config/styles.ts`, organized by component namespace.
2. Use responsive style functions `(isMobile: boolean) => React.CSSProperties` for breakpoint-dependent styles.
3. Components import style objects and pass them to Mantine's `style` prop.
4. Hover/interaction colors are defined in `hoverColors` export in `styles.ts`.
5. No `.module.css` files, no inline `style={{}}` objects, no style definitions in component files.

## Mantine UI Skills

1. Use Mantine components (`Box`, `Container`, `Group`, `Image`, `Anchor`, `Burger`, etc.) for all UI.
2. Consult https://mantine.dev/core/ before implementing any UI pattern.
3. Apply styling through the `style` prop referencing pre-defined objects from `src/config/styles.ts`.
4. Use Mantine hooks (`useMediaQuery`, `useDisclosure`, etc.) instead of manual DOM manipulation.
5. Use `MantineProvider` with the project theme at the app root -- never override the provider in child components.

## Component Patterns

### Brand Config Structure

```typescript
// src/types/index.ts
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
```

### Centralized Styles Pattern

```typescript
// src/config/styles.ts
import type React from "react";
import { brand } from "./brand";

const { colors, fonts } = brand;

export const hero = {
  section: (isMobile: boolean): React.CSSProperties => ({
    backgroundColor: colors.surfaceAccent,
    minHeight: isMobile ? "auto" : "80vh",
  }),

  headline: (isMobile: boolean): React.CSSProperties => ({
    fontFamily: fonts.heading,
    fontSize: isMobile ? "40px" : "64px",
    color: colors.charcoal,
  }),
};

export const hoverColors = {
  navLink: { hover: colors.secondary, base: colors.charcoal },
};
```

### Component Pattern (no inline styles)

```tsx
// src/components/Hero.tsx
import { Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { brand } from "../config/brand";
import { hero } from "../config/styles";

export function Hero() {
  const isMobile = useMediaQuery("(max-width: 48em)");

  return (
    <Box component="section" style={hero.section(!!isMobile)}>
      <Box component="h1" style={hero.headline(!!isMobile)}>
        {brand.name}
      </Box>
    </Box>
  );
}
```

### App Root

```tsx
// src/main.tsx
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { theme } from "./config/theme";
import { App } from "./App";

createRoot(rootElement).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>
);
```

## Reference Documentation

- [Engineering Rules](../.github/copilot-instructions.md)
- [Design System](../docs/design-system.md)
- [Developer Onboarding](../docs/onboarding.md)
- [Mantine Docs](https://mantine.dev/)


### Reusable Component Pattern

```tsx
// src/components/ServiceCard.tsx
import { Card, Text, Title, Badge, Group } from '@mantine/core';
import type { Service } from '../types/service';

interface ServiceCardProps {
  readonly service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify="space-between" mb="xs">
        <Title order={3}>{service.name}</Title>
        <Badge color="brand" variant="light">{service.duration}</Badge>
      </Group>
      <Text size="sm" c="dimmed">{service.description}</Text>
      <Text fw={700} mt="sm">R{service.price}</Text>
    </Card>
  );
}
```

### Static Data Pattern

```json
// src/assets/data/services.json
[
  {
    "id": "1",
    "name": "Silk Press",
    "description": "Professional silk press for smooth, shiny results.",
    "price": 350,
    "duration": "1.5 hrs"
  },
  {
    "id": "2",
    "name": "Braids",
    "description": "Protective braiding styles tailored to you.",
    "price": 500,
    "duration": "3 hrs"
  }
]
```

## Security Skills (Client-Side)

1. Never store secrets or API keys in source code or localStorage.
2. Use `import.meta.env.VITE_*` for any third-party API keys — never commit `.env` files.
3. Use `textContent` over `innerHTML`; avoid `dangerouslySetInnerHTML` unless rendering trusted static content.
4. Do not use `eval()`, `Function()`, or `document.write()`.
5. Set `rel="noopener noreferrer"` on external links with `target="_blank"`.
6. Validate form inputs client-side for UX; never trust client validation as a security boundary.

## Quality and Maintenance Skills

1. Run `npm run build` after changes to verify zero TypeScript errors and successful build.
2. Add or update Vitest tests when behavior changes (utilities, data transformations).
3. Keep edits minimal, scoped, and style-consistent with nearby code.
4. Avoid unrelated refactors while implementing requested changes.
5. Resolve all ESLint errors and TypeScript strict-mode violations before completion.
6. Prefer explicit types — avoid `any`; use `unknown` only when genuinely uncertain.
7. Keep functions short (≤40 lines) and focused on one concern.
8. Use direct, descriptive naming for components, functions, variables, and files.
9. Apply DRY — reuse existing utilities and components before creating duplicates.
10. If code cannot be understood quickly without comments, simplify first.
11. Prefer low-boilerplate implementations: small components, small diffs, direct logic.
12. **If hardcoded placeholder data is found, replace before completion** — use `// TODO:` stubs if real content is pending.

## Testing Skills

1. Use Vitest for unit tests, co-located with source files (`utils/format.test.ts`).
2. Test pure utility functions and data transformation logic.
3. Test that brand config values propagate correctly (theme generates expected tokens).
4. Validate accessibility with axe-core on rendered components where possible.
5. Name tests descriptively: `describe('formatPrice')` → `it('formats cents to rand with two decimals')`.

### Test Pattern

```typescript
// src/utils/format.test.ts
import { describe, it, expect } from 'vitest';
import { formatPrice, formatPhone } from './format';

describe('formatPrice', () => {
  it('formats number to Rand currency string', () => {
    expect(formatPrice(350)).toBe('R350.00');
  });

  it('handles zero', () => {
    expect(formatPrice(0)).toBe('R0.00');
  });
});

describe('formatPhone', () => {
  it('formats raw digits to readable phone number', () => {
    expect(formatPhone('0712345678')).toBe('071 234 5678');
  });
});
```

### Component Test Pattern

```typescript
// src/components/ServiceCard.test.tsx
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { theme } from '../config/theme';
import { ServiceCard } from './ServiceCard';

const mockService = {
  id: '1',
  name: 'Silk Press',
  description: 'Professional silk press.',
  price: 350,
  duration: '1.5 hrs',
};

function renderWithTheme(ui: React.ReactElement) {
  return render(<MantineProvider theme={theme}>{ui}</MantineProvider>);
}

describe('ServiceCard', () => {
  it('renders service name and price', () => {
    renderWithTheme(<ServiceCard service={mockService} />);
    expect(screen.getByText('Silk Press')).toBeInTheDocument();
    expect(screen.getByText('R350')).toBeInTheDocument();
  });

  it('displays duration badge', () => {
    renderWithTheme(<ServiceCard service={mockService} />);
    expect(screen.getByText('1.5 hrs')).toBeInTheDocument();
  });
});
```

## Typical Skill Applications

1. Add new page sections (gallery, testimonials, pricing) using static JSON data and Mantine components.
2. Update brand identity (colors, fonts, logo, contact info) by editing only `brand.ts`.
3. Build responsive layouts using Mantine's `Grid`, `Stack`, `Group`, and responsive props.
4. Create reusable components (cards, headers, footers) that derive all styling from the theme.
5. Optimize build output and lazy-load heavy page sections.

## Accessibility Skills

1. Use semantic HTML via Mantine's polymorphic `component` prop (e.g., `<Button component="a">`).
2. Ensure all images have `alt` text — use Mantine's `Image` component.
3. Maintain keyboard navigability — Mantine components support this by default; do not break it.
4. Use ARIA attributes only when Mantine's built-in accessibility is insufficient.
5. Ensure color contrast meets WCAG AA (4.5:1 minimum) — validate brand color choices.
6. Respect `prefers-reduced-motion` — Mantine handles this; do not override.

## Performance Skills

1. Use dynamic `import()` for pages/routes to enable Vite code splitting.
2. Use optimized image formats (WebP/AVIF) and lazy-load below-fold images via Mantine's `Image` with loading prop.
3. Keep bundle lean — import only needed Mantine components, not the entire library.
4. Audit bundle with `npx vite-bundle-visualizer` before major deploys.
5. Avoid render-blocking resources; defer non-critical scripts and assets.

## Anti-Patterns (Explicitly Forbidden)

- DO NOT: Hardcode brand colors/fonts in component files — use theme tokens
- DO NOT: Fetch data from any server endpoint — this project has no backend
- DO NOT: Use `any` type — use explicit types or `unknown`
- DO NOT: Create custom UI components when Mantine provides an equivalent
- DO NOT: Override `MantineProvider` in child components
- DO NOT: Use inline styles for brand colors — use Mantine's `color` prop or CSS variables
- DO NOT: Store sensitive data in localStorage or source code
- DO NOT: Use `var` declarations — use `const` or `let`
- DO NOT: Skip the compliance check against `copilot-instructions.md` before finalizing
- DO NOT: Generate, create, or use AI-generated images/assets — all visual assets must be real photos or brand-provided files

## Asset Mapping Rules (Critical — Strictly No AI Generation)

1. **All images and visual assets must be real** — supplied by the business or sourced from approved stock. Never use AI-generated images, illustrations, or placeholders.
2. Asset paths are declared in `src/config/brand.ts` (logo, favicon, OG image) or referenced from `public/images/` and `src/assets/`.
3. If an image is missing or unavailable, use a clearly marked `<!-- TODO: replace with real asset -->` empty container or a brand-colored placeholder box — never synthesize a replacement.
4. Do not use AI image generation tools (DALL-E, Midjourney, Stable Diffusion, etc.) to create any asset for this project.
5. Stock photos, if used, must be properly licensed and credited where required.

## Reference Documentation

| Document | Purpose |
|----------|---------|
| **copilot-instructions.md** | Core engineering rules, architecture, whitelabeling, deployment |
| **skills/skills.md** (this file) | Agent capabilities, practical code patterns, testing strategies |
| **docs/design-system.md** | Visual design direction and token documentation |

For fast onboarding:
1. Read **copilot-instructions.md** for rules and architecture
2. Review `src/config/brand.ts` for current brand values
3. Use the patterns in this document as templates for new features
# Developer Onboarding

This guide covers everything needed to contribute to the Nonhlanhla's HairGlam codebase.

## Prerequisites

- Node.js v18 or higher
- npm (included with Node.js)
- A code editor with TypeScript support (VS Code recommended)

## Getting Started

```bash
# Clone the repository
git clone https://github.com/your-org/nonhlanhla_s_hairglam.git
cd nonhlanhla_s_hairglam

# Install dependencies
npm install

# Start dev server
npm run dev
```

The app will be available at `http://localhost:5173/`.

## Key Concepts

### 1. Static-Only Architecture

This project has **no backend**. All data is static. There are no API calls, no database, no server-side rendering. Content lives in:

- `src/config/brand.ts` -- brand identity (name, colors, fonts, contact info)
- `src/assets/data.ts` -- page content (services, gallery images, nav links)
- `public/` -- static assets served at root path

### 2. Whitelabeling via brand.ts

All branding originates from a single file: `src/config/brand.ts`. This includes:

- Business name and tagline
- Color palette
- Font families
- Logo path
- Contact details and social links
- Operating hours

To rebrand the site, **only this file needs to change**. If a component requires editing during a rebrand, it is violating the whitelabel rules and must be refactored.

### 3. Centralized Styling via styles.ts

All style objects live in `src/config/styles.ts`. Components import style references from this file.

Rules:
- No `.module.css` files
- No inline `style={{}}` objects in component files
- No hardcoded color values in components
- All colors must reference `brand.colors.*`

### 4. Mantine UI

The UI is built with [Mantine v7](https://mantine.dev/). The custom theme (`src/config/theme.ts`) derives all values from `brand.ts`:

- Primary color palette (10 shades of Dusty Pink)
- Font family (Libre Franklin)
- Zero radius on all elements (sharp editorial aesthetic)
- No shadows (tonal layering instead)

### 5. TypeScript Strict Mode

`tsconfig.json` has `strict: true`. Additional strictness:
- No `any` types
- No `@ts-ignore` without justification
- `readonly` on interface properties
- Explicit return types where inference is non-obvious

## File Overview

| File | Purpose |
|------|---------|
| `src/main.tsx` | App entry, wraps in MantineProvider |
| `src/App.tsx` | Root component composing sections |
| `src/config/brand.ts` | Brand identity (single rebrand point) |
| `src/config/theme.ts` | Mantine theme derived from brand |
| `src/config/styles.ts` | All component style objects |
| `src/types/index.ts` | Shared TypeScript interfaces |
| `src/assets/data.ts` | Static content arrays |
| `src/components/Navigation.tsx` | Responsive navbar |
| `src/components/Hero.tsx` | Hero with featured image |
| `src/components/Services.tsx` | Service listing |
| `src/components/Gallery.tsx` | Portfolio grid + lightbox |
| `src/components/Footer.tsx` | Contact and social links |

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | TypeScript check + production build |
| `npm run preview` | Preview production build locally |
| `npm run clean` | Remove `dist/` and `node_modules/` for a fresh start |

## Adding a New Component

1. Create `src/components/MyComponent.tsx`
2. Add style objects to `src/config/styles.ts` under a new namespace
3. Import styles in the component: `import { myComponent } from "../config/styles"`
4. Use Mantine's `Box` or other components with `style={myComponent.root}` pattern
5. Never add inline style objects or hardcoded colors

## Adding a New Color

1. Add the color to the `BrandColors` interface in `src/types/index.ts`
2. Define the value in `src/config/brand.ts`
3. Reference it in `src/config/styles.ts` as `colors.newColor`

## Adding Content

- Brand-level content (name, contact, hours) goes in `src/config/brand.ts`
- Page-level content (services, gallery items) goes in `src/assets/data.ts`
- Images go in `public/gallery/` and are referenced by path in `data.ts`

## Deployment

### GitHub Pages

```bash
npm run build
npx gh-pages -d dist
```

Then in GitHub repo Settings > Pages, set source to `gh-pages` branch.

### Other Static Hosts

Upload the `dist/` folder to any static file server (Netlify, Vercel static, Cloudflare Pages, etc.).

## Compliance Checklist

Before submitting changes, verify:

- [ ] `npm run build` passes with zero errors
- [ ] No `any` types
- [ ] No `.module.css` files
- [ ] No inline style objects in components
- [ ] No hardcoded colors in components
- [ ] All external links have `rel="noopener noreferrer"`
- [ ] Semantic HTML elements used
- [ ] All colors reference `brand.colors.*`
- [ ] Styling defined in `src/config/styles.ts` only

## Reference Documentation

- [Engineering Rules](../.github/copilot-instructions.md)
- [Design System](./design-system.md)
- [Implementation Guide](./implementation-guide.md)
- [Mantine Docs](https://mantine.dev/)

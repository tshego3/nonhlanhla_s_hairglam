# Engineering Rules (TypeScript + Vite Frontend)

These rules are mandatory for all feature work, bug fixes, and refactors in this repository.

## 1) Platform Identity

1. Stack is TypeScript + React + Vite (static site, no server runtime).
2. This is a client-side-only project — no backend, no database, no authentication server, no server-side APIs.
3. All content is static or generated at build time.
4. UI framework is [Mantine](https://mantine.dev/) — use Mantine components, hooks, and theming for all UI work.
5. Deployment target is any static hosting (GitHub Pages, Netlify, Vercel static, etc.).

## 2) Non-Negotiable Architecture Rules

1. No server-side code — no Express, no Node server, no SSR runtime.
2. No database connections or ORM usage.
3. No authentication flows requiring a backend (no JWT issuance, no session cookies, no OAuth server callbacks).
4. No API calls to services you control on a server. Third-party public APIs consumed client-side are acceptable.
5. All data must be static (JSON files, hardcoded content, or localStorage) — never assume a running backend.
6. Keep modules small and focused — one concern per file.
7. Shared types and interfaces live in a `src/types/` directory. Do not duplicate type definitions across modules.

## 3) Project Structure Rules

1. Entry point is `index.html` at the project root, with scripts in `src/`.
2. Keep a flat, predictable structure:
   ```
   src/
     main.tsx         -- app entry point, wraps app in MantineProvider with brand theme
     App.tsx          -- root component with routing/layout
     config/
       brand.ts       -- single-point brand configuration (colors, fonts, content, assets)
       theme.ts       -- Mantine createTheme() call consuming brand.ts values
       styles.ts      -- centralized style objects imported by all components
     types/           -- shared TypeScript interfaces and types (includes BrandConfig)
     components/      -- reusable UI components (no style definitions inside)
     pages/           -- page-level components (if multi-page)
     utils/           -- pure utility functions
     assets/          -- static data files and media
     styles/          -- global CSS overrides only (minimal resets)
   ```
3. Vite config lives at the project root (`vite.config.ts`).
4. Static data files (JSON, content) belong in `src/assets/` or `public/`.
5. `src/config/brand.ts` is the centralized whitelabel file — all brand identity values originate here.

## 4) TypeScript Rules

1. Enable `strict: true` in `tsconfig.json` — no exceptions.
2. Prefer explicit types over `any`. Use `unknown` when the type is genuinely uncertain.
3. Never use `@ts-ignore` or `@ts-expect-error` without a comment explaining why it is necessary.
4. Use `interface` for object shapes and `type` for unions, intersections, and computed types.
5. Export types from `src/types/` and import them where needed — no inline duplication.
6. Prefer `const` over `let`; never use `var`.
7. Use template literals over string concatenation.
8. Prefer `readonly` properties where mutation is not required.

## 5) Whitelabeling and Styling Rules

### Centralized Brand Configuration

1. **All branding lives in a single config file** (`src/config/brand.ts`) — colors, fonts, logo paths, business name, tagline, contact details, and social links. This is the only file that changes when rebranding.
2. The brand config exports a typed `BrandConfig` interface defined in `src/types/`. No branding values may be imported from any other source.
3. At app initialization, `brand.ts` values are consumed by the Mantine `MantineProvider` theme override — the `createTheme()` call must derive all palette, font, and spacing values from the brand config.
4. **No hardcoded colors, font families, or brand text anywhere outside `brand.ts`** — components must use Mantine theme tokens (`theme.colors.brand[*]`, `var(--mantine-color-brand-*)`) or import values from the config for logic purposes.
5. If a component needs a brand value in TypeScript (e.g., conditional logic on brand name), import from `src/config/brand.ts` — never inline the value.

### Brand Color Palette

6. **Primary: White (`#FFFFFF`)** — used for backgrounds, primary surfaces, and text-on-dark contexts.
7. **Secondary: Dusty Pink (`#DCAE96`)** — the signature brand accent used for highlights, CTAs, decorative elements, and warm tonal layering.
8. Supporting tones are derived from the dusty pink family (muted rose, warm beige) for surface tiers and hover states.
9. Text color defaults to dark charcoal for readability against white/light surfaces.

### Brand Typography

10. **Libre Franklin** is the sole font family — used for all headings and body text. No secondary or decorative fonts.
11. Load via Google Fonts or self-host in `public/fonts/`.

### Asset Rules (Strictly No AI Generation)

12. All images and visual assets must be real — supplied by the business or from approved stock. Never use AI-generated images.
13. If an asset is missing, use a brand-colored placeholder container with a `<!-- TODO: replace with real asset -->` comment — never synthesize a replacement.

### Styling Rules

6. Use Mantine's built-in styling approaches: component props (`color`, `variant`, `size`) and the `style` prop referencing objects from `src/config/styles.ts`.
7. Keep responsive design mobile-first using Mantine's responsive props (object syntax: `{{ base: 'sm', md: 'lg' }}`) and breakpoint system.
8. **No `.module.css` files.** No inline style objects or style definitions inside component files. All style objects must be defined in `src/config/styles.ts` and imported by components. This centralizes visual decisions and makes rebranding a single-file change.
9. **No hardcoded color values in components.** All colors (hex, rgb, rgba) must be referenced from `brand.colors.*` via the import from `src/config/brand.ts`. If a new color variant is needed, add it to the `BrandColors` interface and `brand.ts` first.
10. No `!important` unless overriding third-party library styles with no alternative.
11. Maintain visual hierarchy with Mantine's spacing scale (`theme.spacing`) and type scale (`theme.fontSizes`) -- both derived from the brand config.

## 6) Security Rules (Client-Side)

1. Never store secrets, API keys, or credentials in source code or localStorage.
2. If consuming a third-party public API, use environment variables via Vite's `import.meta.env` (prefixed `VITE_`) — never commit `.env` files with real keys.
3. Sanitize any user-generated content before rendering to prevent XSS. Use `textContent` over `innerHTML` unless deliberately rendering trusted markup.
4. Do not use `eval()`, `Function()`, or `document.write()`.
5. Set `rel="noopener noreferrer"` on all external links opened with `target="_blank"`.
6. If using forms, validate inputs client-side for UX — but never trust client-side validation as a security boundary.

## 7) UI and Design System Rules

Refer to `docs/design-system.md` for the full visual design direction, color tokens, typography scale, spacing system, and component specifications. Refer to `docs/onboarding.md` for developer onboarding and workflow guidance.

1. Follow a premium, clean visual direction: generous whitespace, clear hierarchy, intentional color usage — all derived from `brand.ts` tokens via the Mantine theme.
2. Use Mantine's `Paper`, `Card`, and `Surface` components with `shadow` and `radius` props for tonal layering. Avoid heavy borders; prefer elevation and background color tiers.
3. Keep typography consistent — use Mantine's `Title`, `Text`, and `Highlight` components. Font families and scale come exclusively from the Mantine theme (sourced from brand config).
4. All interactive elements must have visible focus states — Mantine handles this by default; do not disable `focusRing` in the theme.
5. Use Mantine's `Image` component with `alt` prop. Decorative images use `alt=""`. Logo and hero images are referenced by path from `brand.ts`.
6. Maintain a minimum 4.5:1 contrast ratio for text (WCAG AA).
7. Responsive design is mandatory — use Mantine's responsive props and `useMediaQuery` hook. Test at mobile (360px), tablet (768px), and desktop (1280px+).
8. Animations must respect `prefers-reduced-motion` — Mantine respects this by default; do not override.
9. **Consult Mantine component API first** — before building custom UI, check https://mantine.dev/core/ for an existing component. Use Mantine's built-in props (variant, size, color, radius) before reaching for custom styles.
10. **To rebrand the entire site, only `src/config/brand.ts` should need editing** — if a change requires touching component files, the component is violating whitelabel rules and must be refactored.

## 8) Performance Rules

1. Use Vite's built-in code splitting — dynamic `import()` for routes or heavy modules.
2. Optimize images at build time (use appropriate formats: WebP/AVIF for photos, SVG for icons).
3. Lazy-load images and heavy assets below the fold.
4. Keep the initial bundle small — audit with `vite build --report` or `npx vite-bundle-visualizer`.
5. Avoid render-blocking resources; defer non-critical scripts and styles.
6. Do not import entire libraries when only a single utility is needed (tree-shake or import specific paths).

## 9) Testing Rules

1. Use Vitest for unit tests (aligned with Vite).
2. Test pure utility functions and any non-trivial logic.
3. Keep tests co-located with source files (`utils/format.ts` → `utils/format.test.ts`) or in a parallel `__tests__/` folder.
4. Run `npm run build` (or equivalent) to verify zero TypeScript errors and successful production build.
5. Validate accessibility with automated checks (axe-core or similar) on key pages.

## 10) Change Management Rules

1. Prefer minimal, scoped changes over broad rewrites.
2. Do not refactor unrelated areas while implementing targeted fixes.
3. Keep naming, formatting, and coding style aligned with surrounding code.
4. Use ESLint and Prettier (or Biome) — code must pass lint with zero errors before merge.
5. No nested ternaries or deeply nested conditionals — prefer early returns and flat logic.
6. Keep functions short and focused (≤40 lines preferred). If longer, break it up.
7. Use direct, descriptive naming for variables, functions, and files.
8. Apply DRY — reuse existing utilities before creating parallel implementations.
9. If code cannot be understood quickly without comments, simplify it first.
10. **If hardcoded placeholder data is found, treat it as scaffolding and replace before completion** — use clearly marked `// TODO:` comments if real content is pending.
11. AI agent compliance check: before finalizing changes, verify alignment with this document, `docs/design-system.md`, and other applicable guidance in `docs/`.

## 11) Build and Tooling Rules

1. Use `npm` (or `pnpm`/`yarn` if already configured) — do not mix package managers.
2. Lock files (`package-lock.json` / `pnpm-lock.yaml`) must be committed.
3. All dependencies must be explicitly listed in `package.json` — no relying on transitive installs.
4. Dev dependencies vs. production dependencies must be correctly categorized.
5. Keep Vite and TypeScript versions up to date; pin major versions to avoid surprise breakage.
6. Use `vite preview` to verify the production build locally before deploying.
7. **All dependency versions must be pinned exactly** (no `^` or `~` prefixes). Use `.npmrc` with `save-exact=true` to enforce this. Do not allow automatic minor/patch upgrades — all updates must be deliberate and tested.
8. Do not add bloated or unnecessary packages. Prefer lightweight, single-purpose dependencies. Justify every new dependency before adding it.

## 12) Accessibility Rules

1. Use semantic HTML elements (`<nav>`, `<main>`, `<section>`, `<button>`, etc.) — do not use `<div>` for interactive elements.
2. All form inputs must have associated `<label>` elements.
3. Ensure keyboard navigation works for all interactive elements.
4. Use ARIA attributes only when semantic HTML is insufficient — do not over-ARIA.
5. Page must have a single `<h1>` and headings must follow logical order.
6. Skip-to-content link should be present for keyboard users.

## 13) Content and Data Rules

1. All display content (text, service descriptions, pricing, contact info) is defined in static data files or directly in markup — there is no CMS or backend to fetch from.
2. **Brand-level content** (business name, tagline, contact info, social links, operating hours) lives in `src/config/brand.ts` — the single source of truth for whitelabeling.
3. **Page-level content** (service lists, gallery items, testimonials) lives in JSON files under `src/assets/data/`. These are domain content, not brand identity.
4. Images and media go in `public/` (for direct URL reference) or `src/assets/` (for build-pipeline processing). Brand assets (logo, favicon, OG image) are referenced by path in `brand.ts`.
5. Do not fetch data from localhost or any server endpoint — this project has no backend.

## 14) Deployment Rules

1. Build output is a static folder (`dist/`) suitable for any static file host.
2. Configure proper cache headers for hashed assets (Vite handles filename hashing by default).
3. Ensure `public/` assets (favicon, robots.txt, manifest) are correctly copied to the build output.
4. For SPA routing (if applicable), configure the hosting provider to serve `index.html` for all routes (404 fallback).
5. Never include source maps in production deployments unless explicitly required for debugging.
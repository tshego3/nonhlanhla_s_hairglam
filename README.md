# Nonhlanhla's HairGlam

A premium static website for Nonhlanhla's HairGlam beauty studio, built with TypeScript, React, Vite, and Mantine UI.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Clean build output and node_modules
npm run clean
```

## Tech Stack

- **Framework**: Vite + React + TypeScript (strict mode)
- **UI Library**: Mantine v7 (Core + Hooks)
- **Font**: Libre Franklin (Google Fonts)
- **Deployment**: Static hosting (GitHub Pages, Netlify, Vercel)

## Project Structure

```
src/
  main.tsx              Entry point, MantineProvider with brand theme
  App.tsx               Root layout composing all sections
  config/
    brand.ts            Single-point brand configuration (colors, fonts, content)
    theme.ts            Mantine createTheme() consuming brand.ts
    styles.ts           Centralized style objects for all components
  types/
    index.ts            Shared TypeScript interfaces
  components/
    Navigation.tsx      Responsive navbar
    Hero.tsx            Hero section with featured image
    Services.tsx        Service cards mapped from typed data
    Gallery.tsx         Portfolio grid with lightbox
    Footer.tsx          Contact info and social links
  assets/
    data.ts             Static content (services, gallery images, nav links)
  styles/
    global.css          Minimal CSS resets
public/
  logo.png             Brand logo (also favicon)
  gallery/             Portfolio images
```

## Architecture

This is a **client-side-only static site**. There is no backend, database, or authentication server.

- All brand identity originates from `src/config/brand.ts`
- All styling is centralized in `src/config/styles.ts`
- Colors reference `brand.colors.*` exclusively
- To rebrand, only `src/config/brand.ts` needs editing

## Deployment

Build output is a static `dist/` folder:

```bash
npm run build
```

Deploy `dist/` to any static host. For GitHub Pages:

```bash
npx gh-pages -d dist
```

## Documentation

- [Developer Onboarding](docs/onboarding.md)
- [Design System](docs/design-system.md)
- [Implementation Guide](docs/implementation-guide.md)

## License

MIT
# Nonhlanhla's HairGlam

A premium single-page website for a professional hair beauty studio. Built with TypeScript, React, Vite, and Mantine UI.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- **Framework:** Vite + React + TypeScript (strict mode)
- **UI Library:** Mantine v7 (Core + Hooks)
- **Typography:** Libre Franklin (Google Fonts)
- **Styling:** Centralized in `src/config/styles.ts` (no CSS modules, no inline styles)
- **Deployment:** Static hosting (GitHub Pages, Netlify, Vercel)

## Project Structure

```
src/
  main.tsx              App entry, MantineProvider with brand theme
  App.tsx               Root layout composing all sections
  config/
    brand.ts            Single-point brand configuration (colors, fonts, content)
    theme.ts            Mantine createTheme() consuming brand.ts
    styles.ts           Centralized style objects imported by components
  types/
    index.ts            Shared TypeScript interfaces (BrandConfig, Service, etc.)
  assets/
    data.ts             Static content arrays (services, gallery, nav links)
  components/
    Navigation.tsx      Responsive navbar (desktop + mobile)
    Hero.tsx            Hero section with portfolio image
    Services.tsx        Service cards with editorial numbering
    Gallery.tsx         Grid gallery with lightbox
    Footer.tsx          Contact info and social links
  styles/
    global.css          Minimal CSS resets
public/
  logo.png             Brand logo (also used as favicon)
  gallery/             Portfolio images
```

## Whitelabeling

To rebrand the entire site, edit only `src/config/brand.ts`. All colors, fonts, text content, and asset paths flow from this single file through the Mantine theme and centralized styles.

## Key Rules

- No server-side code or backend dependencies
- No `any` types (strict TypeScript)
- No `.module.css` files or inline style objects in components
- All colors reference `brand.colors.*`
- All style objects live in `src/config/styles.ts`
- All images must be real (no AI-generated assets)

## Deployment

```bash
npm run build
```

The `dist/` folder is ready for any static hosting provider.

## Documentation

- [Developer Onboarding](docs/developer-onboarding.md)
- [Design System](docs/design-system.md)
- [Implementation Guide](docs/implementation-guide.md)

## License

MIT

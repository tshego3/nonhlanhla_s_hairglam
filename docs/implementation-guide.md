## Phase 1: UI Generation (Google Stitch Prompt)

Copy and paste the following prompt into the Google Stitch interface to generate the design system and UI layout.

### The Prompt
> **Role**: Lead UI/UX Designer.
> **Project**: Single Page Application (SPA) for "Nonhlanhla’s HairGlam", a ebony female hair beauty studio. Please use the provided logo and previous work images. Keep in mind that the website is static, so do not include any server calls; for now, buttons like "Book Now" should be skipped.
> **Design Requirements**:
> * **Core Directive:** The website is **static**. Do not include any server calls, backend logic, or booking integrations. **Do not include "Book Now" buttons**; focus purely on visual information and professional presentation.
> * **Brand Aesthetic:** Modern Luxury. The design should feel high-end, minimalist, and sophisticated, specifically curated for a young professional clientele. Focus on clean lines, generous white space, and an "editorial" feel.
> * **Color Palette**: Primary: White (#FFFFFF); Secondary: Dusty Pink (#DCAE96 or similar muted rose tones).
> * **Typography**: Use **Libre Franklin** as the primary font for all headings and body text.
> * **Asset Mapping (Critical - Strictly No AI Generation):**
    * Use `logo.png` for the brand logo in the Header.
    * Use the following local paths for the Gallery grid to ensure the design maps to my provided "Previous Work" images:
        * `previous_work_1.jpeg`
        * `previous_work_2.jpeg`
        * `previous_work_3.jpeg`
> * **Layout Structure**:
>   1. **Header**: Navigation with placeholder for logo, links to Services, Gallery, and Contact.
>   2. **Hero Section**: High-impact area for value proposition (Professional Weave Installations & Care).
>   3. **Services Section**: Distinct cards for Weaves, Weave Installation, Weave Treatment, Sew-ins, and Frontal Ponytails.
>   4. **Gallery Section**: A sophisticated grid labeled **"The Portfolio"** or **"Previous Work,"** utilizing the uploaded imagery to showcase expertise.
>   5. **Contact/Footer**: Simple section with phone, email, and location.
> **Deliverable**: A high-fidelity UI design system and component layout optimized for a Vite/Mantine implementation.

---

## Phase 2: Code Generation (MCP Stitch Prompt)

Once you have the Stitch Project ID, use this prompt to generate the functional codebase.

### The Prompt
> **Task**: Build a Vanilla TypeScript Vite SPA using the UI design from **Project ID: [INSERT_ID_HERE]**.
> 
> **Technical Stack**:
> * **Framework**: Vite + Vanilla TypeScript.
> * **UI Library**: Mantine UI (Core and Hooks).
> * **Type Safety**: Strictly **no "any"** types. Use explicit interfaces and types for all components and props.
> * **Licensing**: Use only MIT/Open Source libraries. No proprietary "bloatware."
> 
> **Feature Specifications**:
> * **Theme**: Implement a custom Mantine Theme object using the Dusty Pink and White palette from the Stitch design.
> * **Components**:
>   1. **Navigation**: Responsive navbar.
>   2. **Gallery**: Implement a light-box or grid gallery using Mantine's Grid and Image components. 
>   3. **Services**: Map through a typed array of services to render cards.
> * **Deployment**: Configure `vite.config.ts` with the correct base path for **GitHub Pages** deployment.
> 
> **Code Style**: 
> * Functional approach.
> * Modular file structure (separate types, components, and main entry).
> * Clean, documented code without em dashes or emojis.

---

## Developer Onboarding & Deployment Guidelines

### 1. Local Environment Setup
To get the project running locally, follow these steps:
* Ensure Node.js (v18 or higher) is installed.
* Clone the repository and navigate to the root directory.
* Run `npm install` to install Mantine, Tabler Icons, and Vite dependencies.
* Run `npm run dev` to start the local development server.

### 2. Project Structure
* `src/types/`: Contains all explicit TypeScript interfaces (e.g., `Service`, `GalleryImage`).
* `src/theme/`: Contains the Mantine theme override for the Dusty Pink palette.
* `src/components/`: Modular UI sections (Hero, Services, Gallery).

### 3. Deployment to GitHub Pages
Since this is a Vite project, follow this automated workflow:
1. Update `vite.config.ts` to include `base: '/repo-name/'.`
2. Run `npm run build` to generate the `dist` folder.
3. Use the `gh-pages` package or a GitHub Action to deploy:
   * **Manual Command**: `npx gh-pages -d dist`
4. In GitHub Repository Settings, navigate to **Pages** and set the source to the `gh-pages` branch.

### 4. Handling Assets
* **Logo**: Replace the placeholder in the Header component with the provided logo file in the `public/` directory.
* **Gallery**: Add your portfolio images to `src/assets/gallery/` and update the image array in the Gallery component to reflect the file names.
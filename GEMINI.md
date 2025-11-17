# Project Overview

This is a Next.js project built with TypeScript, utilizing a modern web development stack. It leverages Tailwind CSS for styling, `shadcn/ui` (built on Radix UI primitives) for its component library, and includes features like animations (Framer Motion, Motion), 3D graphics (Three.js, OGL), and data visualization (Recharts). The project also integrates Vercel Analytics and Speed Insights for performance monitoring.

# Building and Running

The project uses `pnpm` for package management.

*   **Install Dependencies:**
    ```bash
    pnpm install
    ```
*   **Run Development Server:**
    ```bash
    pnpm dev
    ```
    (Opens [http://localhost:3000](http://localhost:3000))
*   **Build for Production:**
    ```bash
    pnpm build
    ```
*   **Start Production Server:**
    ```bash
    pnpm start
    ```
*   **Run Linter:**
    ```bash
    pnpm lint
    ```

# Development Conventions

*   **Framework:** Next.js with React.
*   **Language:** TypeScript.
*   **Styling:** Tailwind CSS, with utility classes and `shadcn/ui` components. The `cn` utility function (`clsx` + `tailwind-merge`) is used for managing class names.
*   **UI Components:** Primarily uses `shadcn/ui` components, which are built on top of Radix UI primitives, ensuring accessibility and customizability.
*   **Path Aliases:** Uses `@/*` for absolute imports from the project root.
*   **Linting:** ESLint is configured, but ignored during builds (`eslint.ignoreDuringBuilds: true` in `next.config.mjs`).
*   **Type Checking:** Strict TypeScript is enforced during development (`strict: true` in `tsconfig.json`), but type errors are ignored during builds (`typescript.ignoreBuildErrors: true` in `next.config.mjs`). This suggests a pragmatic approach to development speed.
*   **Image Optimization:** Disabled during builds (`images.unoptimized: true` in `next.config.mjs`), possibly for development speed or external optimization.
*   **Animations:** Utilizes `framer-motion` and `motion` for interactive UI elements.
*   **3D Graphics:** Integration with `three`, `ogl`, and `postprocessing` suggests the presence of 3D rendering capabilities.
*   **Data Visualization:** Uses `recharts` for charting.

# Christopher Harley — Portfolio

Personal portfolio and case-study site for **Christopher Harley**, a Design Engineer building websites for agencies and small businesses. Deployed to Netlify.

## Tech Stack

- **Astro 7** — server-rendered (`output: 'server'`) via the [Netlify adapter](https://docs.astro.build/en/guides/integrations-guide/netlify/)
- **React 19** — interactive islands: mobile nav, contact form, toasts
- **Tailwind CSS v4** — styling via the Vite plugin
- **shadcn/ui** — accessible UI primitives (button, field, input, label, textarea) with `class-variance-authority`, `tailwind-merge`, and `clsx`
- **react-hook-form + zod** — contact form validation
- **sonner** — toast notifications

## Getting Started

Requirements: **Node.js >= 22.12.0** (see `engines` in `package.json`).

```sh
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`.

### Commands

| Command                    | Action                                 |
| :------------------------- | :------------------------------------- |
| `npm install`              | Install dependencies                   |
| `npm run dev`              | Start local dev server at `localhost:4321` |
| `npm run build`            | Build production site to `./dist/`     |
| `npm run preview`          | Preview the production build locally   |
| `npm run check`            | Run Astro type/lint checks             |
| `npm run format`           | Format source with Prettier            |
| `npm run format:check`     | Verify formatting without writing      |

> ℹ️ The package has no lockfile committed; installs use npm by default.

## Project Structure

```text
/
├── public/
│   ├── christopher_harley_resume.pdf
│   └── favicon.*
├── src/
│   ├── components/          # Astro + React components
│   │   ├── ui/              # shadcn/ui primitives
│   │   ├── Nav.astro        # Desktop navigation
│   │   ├── MobileNav.tsx    # Mobile navigation drawer
│   │   ├── Footer.astro
│   │   ├── ProjectCard.astro
│   │   ├── contact-form.tsx # Contact form (React Server Action)
│   │   └── ToasterWrapper.tsx
│   ├── data/
│   │   ├── navigation.ts    # Nav link config
│   │   └── projects.ts      # All project + case-study content
│   ├── images/              # Case-study imagery (imported, Astro-optimized)
│   │   ├── bs-case-study/   # BASSMENT
│   │   ├── mk-case-study/   # Merge Konflict
│   │   └── wl-case-study/   # Walnut Lawn
│   ├── layouts/Layout.astro # Global layout (head, fonts, nav, footer)
│   ├── lib/
│   │   ├── contact-schema.ts # Zod schema + error parsing for the form
│   │   └── utils.ts          # cn() helper
│   ├── pages/
│   │   ├── index.astro       # Home / projects grid
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── case-study/[slug].astro # Dynamic case-study pages
│   │   └── 404.astro
│   └── styles/global.css     # Tailwind entry + design tokens
└── astro.config.mjs
```

## Content

### Projects

All project and case-study content lives in **`src/data/projects.ts`**. The home page renders `projects` in array order, so the first entry appears first.

Each project includes:
- Card metadata (`title`, `description`, `tags`, `imageUrl`, `imageAlt`, `slug`)
- A full case study: subtitle, hero image, industry, category, tech stack, live link, introduction, design description + images, development body (multi-paragraph array), and a concluding quote + body.

To add a project:
1. Drop images in `src/images/<name>-case-study/` and import them at the top of `projects.ts`.
2. Append a new entry to the `projects` array (or insert at the position you want).
3. Run `npm run check` and `npm run build` to verify.

### Case-study pages

`src/pages/case-study/[slug].astro` generates a page per project. Prev/next navigation across projects is derived from the array order, so slugs must be unique.

## Contact Form

The contact form posts to a Netlify server action, validates with a Zod schema, and shows success/error feedback via sonner toasts. No environment variables are required for local development; check `.env` for any Netlify-specific settings (never commit it).

## Deployment

Continuous deployment via **Netlify** (the `@astrojs/netlify` adapter emits a serverless function with `_redirects`). Push to `master` to trigger a production deploy; the repo's pull-request flow handles preview builds.

## Checks

Before pushing, run:

```sh
npm run check          # Astro type checking
npm run format:check   # Prettier formatting
npm run build          # Production build (SSR function output)
```

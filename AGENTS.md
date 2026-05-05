# Rudy Dev Portfolio — Codex Instructions

## Project Overview
Personal portfolio and client-facing website for Rodolfo Ortega, a creative director and full-stack developer based in Temecula, CA. Built with Next.js App Router.

## Dev Commands
```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Production build
npm run lint      # ESLint check
```

## Stack
- **Next.js 16** with App Router (`app/` directory)
- **React 19** with TypeScript (strict mode)
- **Tailwind CSS v4** — utility-first, no CSS modules
- **Framer Motion v12** — all animations go through `lib/motion.ts` variants
- **shadcn/ui** (new-york style) + Radix UI primitives
- **Lucide React** for icons

## Project Structure
```
app/                  # Pages (App Router)
  page.tsx            # Homepage
  services/page.tsx   # Pricing & services
  work/page.tsx       # Case studies
components/           # Shared UI components
  nav.tsx             # Fixed responsive navbar
  footer.tsx          # Dark/light variant footer
  container.tsx       # Max-width wrapper (7xl)
lib/
  motion.ts           # Framer Motion animation variants (fadeUp, stagger, lineFade)
  utils.ts            # cn() utility (clsx + tailwind-merge)
```

## Code Style
- 2-space indentation
- TypeScript strict — no `any`, no `@ts-ignore`
- Named exports for components, default export for pages
- Use `cn()` from `lib/utils.ts` for all conditional class merging — never concatenate Tailwind strings manually
- Import animations from `lib/motion.ts` — do not define one-off Framer Motion variants inline
- `Container` component wraps all page sections for consistent max-width and padding

## Tailwind
- Tailwind v4 — config is in `postcss.config.mjs`, not `tailwind.config.js`
- Custom animations (`marquee-left`, `marquee-right`) defined in `globals.css`
- Color palette: black/white primary, grays for muted/borders — no color outside this palette without asking
- Font stack: Inter (sans), Playfair Display (serif), system mono — set via CSS custom properties in `globals.css`

## Animations
- All scroll-triggered animations use Framer Motion `whileInView` with `viewport={{ once: true }}`
- Use `fadeUp` for individual elements, `stagger` for lists/grids
- Respect `prefers-reduced-motion` — do not hardcode animations without a motion-safe guard

## Component Patterns
- Pages are server components by default — add `"use client"` only when needed (event handlers, hooks, Framer Motion)
- `footer.tsx` accepts a `variant` prop: `"dark"` (default) or `"light"`
- Nav is always fixed/black — do not change its background

## What's Not Done Yet (in progress)
- All images/carousels are placeholder — real assets coming
- OG image (`/public/og-image.jpg`) needs to be added — 1200x630px
- Showreel video section is a UI shell — real video or static image coming
- Domain placeholder is `https://rudyortega.dev` throughout — find-and-replace when live
- Resend `from:` address uses `onboarding@resend.dev` — update to a domain email once domain is live
- Contact form sends to `orudy01@gmail.com`

## Git Commit Style
- Messages must be professional, simple, and clean
- Use imperative mood: "Add contact form" not "Added contact form"
- No `Co-Authored-By` lines — never include Codex attribution in commits
- No bullet-heavy bodies unless truly necessary — prefer a single clear subject line
- Example: `Add Resend contact form API route` or `Fix prefers-reduced-motion on marquee`

## CSS & Styling
- Before making any CSS or layout change, diagnose the root cause first — read all relevant files, trace the cascade/specificity chain, and explain the issue before touching any code
- Never apply superficial padding/margin tweaks without understanding why the issue exists
- After making a CSS or layout change, check that no other page or component was affected before presenting the result as done

## Design Implementation
- When implementing a UI change from a description or reference, describe back the layout plan (spatial terms: centered/left/right, horizontal/vertical, full-width/contained) before writing any code
- Confirm assumptions explicitly — do not guess layout direction

## Code Editing
- Make the full change in one pass — plan all edits first, then execute. Do not make many small incremental edits for a single task

## Do Not
- Do not introduce new color tokens outside the existing black/white/gray palette
- Do not add new dependencies without checking if shadcn/ui or Radix already covers the need
- Do not use `pages/` directory — this project is App Router only
- Do not add CSS Modules or styled-components — Tailwind only

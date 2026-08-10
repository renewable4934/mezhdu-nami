<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md — Technical Architecture & Guidelines for «Между нами»

This document serves as the master technical description and operating guide for AI agents working on the **«Между нами»** codebase.

---

## 1. Project Overview & Philosophy

**«Между нами»** is a premium editorial portfolio website and lead-generation application for an author pet-photography biography project founded by Daria.

- **Core Proposition**: *"Между нами уже есть история. Мы помогаем её увидеть и сохранить."*
- **Visual Aesthetic**: Warm editorial documentary, photobook, quiet cinema.
- **Tone & Voice**: Personal, calm, empathetic. Avoid mass commercial pet shop, veterinary, or standard studio cliches (no paw print cursors, neon colors, fake reviews, or urgent discount popups).
- **Core Progression**: `сохранить` (preserve) → `организовать` (organize) → `сопровождать` (accompany / future Pet Concierge).

---

## 2. Technical Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss";` in `app/globals.css`)
- **Fonts**: Loaded via `next/font/google` in `app/layout.tsx`:
  - Headlines & emotional quotes: `Cormorant Garamond` (`--font-cormorant`)
  - Body, buttons, inputs & navigation: `Manrope` (`--font-manrope`)
- **Icons**: `lucide-react`
- **Asset Storage**: High-resolution editorial photography saved under `public/images/`

---

## 3. Design System & Tokens

Defined in `app/globals.css`:

```css
:root {
  --background: #F4F0EA;     /* warm milk */
  --surface: #E9E0D5;        /* soft beige */
  --text: #2B2926;           /* graphite/charcoal */
  --muted: #766D65;          /* muted taupe */
  --accent: #A96855;         /* dusty terracotta */
  --dark: #292622;           /* dark charcoal */
  --line: #D8CEC3;           /* subtle dividers */
}
```

---

## 4. Directory Structure & Key Files

```text
app/
  layout.tsx              # Root HTML, Google Fonts, SEO OpenGraph, metadataBase
  globals.css             # Design tokens, custom scrollbars, keyboard focus, reduced motion
  page.tsx                # Main Landing Page (Hero, Approach, Stories, Biography, Formats, Process, Daria, Pet Concierge, FAQ, Final CTA)
  stories/
    page.tsx              # Stories archive page with client-side category filtering
    [slug]/
      page.tsx            # Individual story detail template (Hero, narrative, gallery, quote, lightbox, pagination)
components/
  site-header.tsx         # Sticky header with scroll detection & responsive mobile drawer
  hero.tsx                # Editorial Hero section
  story-card.tsx          # Reusable story card with image ratio preservation & hover effect
  story-grid.tsx          # Responsive grid wrapper for story cards
  process-steps.tsx       # 4-step workflow presentation
  contact-form.tsx        # Modal slide-over acquaintance form with validation & demo mode indicator
  faq.tsx                 # Accessible keyboard-navigable FAQ accordion
  lightbox.tsx            # Fullscreen photo gallery viewer with keyboard arrow navigation
  site-footer.tsx         # Site footer with navigation links and legal TODO indicators
data/
  stories.ts              # Story data types, story array dataset, CATEGORIES, and helper getters
  faq.ts                  # FAQ dataset
public/
  images/                 # Local editorial photo assets (hero_cover.jpg, daria_portrait.jpg, story_mart.jpg, story_bruno.jpg, photobiography_book.jpg)
```

---

## 5. Key Conventions & Rules for AI Agents

1. **Content Decoupling**:
   - All story content, categories, and FAQ items MUST be maintained in `data/stories.ts` and `data/faq.ts`. Do NOT hardcode story details directly inside JSX components.

2. **Form Handling & Demo Mode**:
   - The contact form (`components/contact-form.tsx`) currently operates in demo mode (`isDemo = true`).
   - When connecting a live backend endpoint or Telegram bot webhook, update the `handleSubmit` method in `components/contact-form.tsx`.
   - Always maintain humanized Russian error messages:
     - *"Пожалуйста, напишите, как к нам обращаться"*
     - *"Добавьте имя питомца"*
     - *"Выберите удобный способ связи"*
     - *"Оставьте телефон или Telegram"*

3. **Pet Concierge Framing**:
   - Do NOT turn **Pet Concierge** into an actively purchasable service. It is explicitly designed as a future vision block (*"Скоро — сервис заботы и сопровождения"*).

4. **Image & Placeholder Rule**:
   - All images use Next.js `<Image />` with reserved aspect ratios (`object-cover`) to prevent Cumulative Layout Shift (CLS).
   - Use `TODO: replace with real project image` comments whenever temporary editorial photos are referenced.

5. **Accessibility & Reduced Motion**:
   - Ensure interactive controls maintain visible focus (`focus-visible:ring-2 focus-visible:ring-[#A96855]`).
   - Keep `prefers-reduced-motion: reduce` CSS rules intact in `app/globals.css`.

6. **Build Verification**:
   - Before ending any modification, always verify clean compilation using:
     ```bash
     npm run build
     ```

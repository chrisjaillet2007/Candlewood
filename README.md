# Candlewood Interiors

The marketing site for Candlewood Interiors, a boutique interior design
studio serving Eastern Massachusetts. Built with Next.js (App Router),
TypeScript, Tailwind CSS, and Framer Motion.

**Updating content — portfolio projects, services, journal posts, photos —
lives in [`CONTENT.md`](./CONTENT.md).** That's the file to hand to whoever
maintains the site day-to-day; nothing there requires touching layout code.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the site reloads
automatically as you edit.

## Before publishing changes

```bash
npm run build   # production build; also catches typos in the data files
npm run lint
```

## Project structure

```
src/
  app/            Routes (App Router) — one folder per page
  components/     UI building blocks, grouped by area (home, layout, media, ui, work, contact)
  data/           Editable content — see CONTENT.md
  lib/            Small shared utilities
public/
  brand/          The official Candlewood logo marks
```

Every photograph-shaped slot on the site (portfolio covers, journal covers,
founder portraits) renders through `EditorialImage`
(`src/components/media/EditorialImage.tsx`). With no real photo supplied it
falls back to a generative placeholder plate — a bespoke line drawing in the
brand palette, not a stock photo — so the site never ships broken images or
generic grey boxes while real photography is still being gathered. See
`CONTENT.md` for how to add a real photo to any of those slots.

## Deploying

This is a standard Next.js app and deploys cleanly to
[Vercel](https://vercel.com/new) (from the team that builds Next.js) or any
Node hosting that supports Next.js. For Vercel: push this repository, import
it at vercel.com/new, and it builds and deploys with no extra configuration.

Once a real domain is live, update `siteUrl` in `src/app/layout.tsx` — it
feeds the site's SEO metadata and sitemap.

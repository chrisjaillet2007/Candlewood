# Candlewood Interiors

The marketing site for Candlewood Interiors, a boutique interior design
studio serving Eastern Massachusetts. Built with Next.js (App Router),
TypeScript, Tailwind CSS, and Framer Motion.

**Updating content — portfolio projects, services, journal posts, photos —
lives in [`CONTENT.md`](./CONTENT.md).** That's the file to hand to whoever
maintains the site day-to-day; nothing there requires touching layout code.
Portfolio projects specifically can be managed from a built-in `/admin`
page on the live site — no code needed at all once it's set up; see
[`ADMIN.md`](./ADMIN.md) for that one-time setup.

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
content/
  projects.json   Portfolio data — editable via /admin or by hand, see CONTENT.md
src/
  app/            Routes (App Router) — one folder per page, plus /admin
  components/     UI building blocks, grouped by area (home, layout, media, ui, work, contact, admin)
  data/           Editable content — see CONTENT.md
  lib/            Small shared utilities (including the /admin auth + GitHub publishing logic)
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

To enable the `/admin` portfolio editor, also set the environment variables
described in `ADMIN.md` and `.env.example` — the site works fine without
them, `/admin` just isn't usable until they're set.

Once a real domain is live, update `siteUrl` in `src/app/layout.tsx` — it
feeds the site's SEO metadata and sitemap.

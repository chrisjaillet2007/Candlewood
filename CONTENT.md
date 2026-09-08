# Updating the Website

This site is built so the day-to-day content — portfolio projects, services,
journal posts, testimonials, founder bios — lives in a handful of plain
files, separate from the page design. You don't need to touch any layout
code to add a project or swap in a real photo.

If you don't have a developer on hand for these edits, any working
Next.js/React developer can make every change on this page without needing
extra context — point them here first.

## Where everything lives

| Content | File |
|---|---|
| Portfolio projects | `src/data/projects.ts` |
| Services | `src/data/services.ts` |
| Journal posts | `src/data/journal.ts` |
| Testimonials | `src/data/testimonials.ts` |
| Founder photos | `src/data/team.ts` |
| Nav menu links | `src/data/nav.ts` |

Each file exports a plain array (or object) of content. The pages that
display them — the portfolio grid, the services page, and so on — read from
these files automatically. Add, remove, or reorder an entry in the file, and
the site updates.

## Adding a portfolio project

Open `src/data/projects.ts`. At the bottom of the `PROJECTS` array is a
commented-out template — copy it, uncomment it, and fill in the fields:

```ts
{
  slug: "your-project-slug",              // used in the URL: /portfolio/your-project-slug
  name: "A Short, Descriptive Name",
  location: "Town, MA",
  type: "Whole-Home Design",               // also powers the "Work" page filter chips
  description: "One sentence, shown on the portfolio grid.",
  longDescription: "A short paragraph, shown on the project's own page.",
  mood: "interior",                        // "interior" | "detail" | "exterior"
  seed: "your-project-slug",               // any unique string
  size: "standard",                        // "hero" | "wide" | "standard"
},
```

- `type` becomes a filter chip on the `/portfolio` page automatically — use
  a consistent value if you want a project to group with existing ones
  (e.g. reuse `"Kitchen & Bath Design"` rather than inventing a near-duplicate).
- `size` only affects the project's size in the homepage's featured-work
  layout (`"hero"` = large, `"wide"` = full-width, `"standard"` = normal).
  It has no effect on the `/portfolio` page itself.
- `mood` and `seed` control the generative placeholder artwork (see below) —
  they stop mattering once you add a real `image`.

To remove a project, delete its entry. To reorder, move entries up or down
in the array — the homepage and portfolio page both follow array order.

## Adding a real photo

Every image slot on the site — portfolio covers, journal covers, founder
portraits — falls back to a bespoke line-drawing placeholder until a real
photo is supplied. There's nothing to switch "on"; you just add a path:

1. Save the photo somewhere under `public/`, for example:
   `public/portfolio/andover-colonial/cover.jpg`
2. Reference it with a leading slash, relative to `public/`:
   ```ts
   image: "/portfolio/andover-colonial/cover.jpg",
   ```
3. Rebuild/redeploy. The placeholder for that slot is gone — everything
   else (the hover animation, the reveal-on-scroll, the layout) is unchanged.

This applies per content type:

- **Portfolio project cover** — set `image` on the project in `projects.ts`.
- **Portfolio project detail photos** — set `gallery` (up to two extra
  photos shown on the project's own page):
  ```ts
  gallery: ["/portfolio/andover-colonial/detail.jpg", "/portfolio/andover-colonial-b.jpg"],
  ```
- **Journal post cover** — set `image` on the post in `journal.ts`.
- **Founder portraits** (used on both the homepage and the About page) —
  set `annmarie` and/or `lauren` in `src/data/team.ts`. There's also
  `ABOUT_HERO_PHOTO` in that same file for the wide shot at the top of the
  About page.

Use real photography sized reasonably for the web (a few hundred KB, not a
multi-megabyte camera export) — Next.js handles responsive sizing and lazy
loading automatically once a path is supplied.

## Editing services

Open `src/data/services.ts`. Each service has a `summary` (one line, used
on the homepage list) and a `description` (a paragraph, used on the
`/services` page). Add, edit, remove, or reorder entries freely — the
`/services` page groups them visually in pairs, so it reads best in groups
of two, but any number works.

## Editing testimonials

Open `src/data/testimonials.ts`. These are intentionally placeholder text
today — a comment at the top of the file explains why. **Once you have a
real client testimonial, replace the placeholder entries with real quotes
and real (or client-approved) attribution** rather than adding to them —
don't present placeholder copy as a real client's words.

## Adding a journal post

Open `src/data/journal.ts`. Copy the commented-out template at the bottom
of the array, same as with portfolio projects. `body` is an array of
paragraphs — each string becomes one paragraph on the post's page.

## Editing founder bios

Founder bios are short, hand-written paragraphs rather than a data file,
because the homepage teaser and the About page intentionally use different
lengths of the same story. Edit them directly in:

- `src/components/home/Founders.tsx` (short homepage version)
- `src/app/about/page.tsx` (full About page version)

Founder photos are still centralized — see "Adding a real photo" above.

## Editing the nav menu

Open `src/data/nav.ts`. Each entry is a `{ href, label }` pair; add, remove,
reorder, or rename freely. The mobile menu and footer read from the same
list automatically.

## Previewing your changes

```bash
npm install   # first time only
npm run dev
```

Then open `http://localhost:3000`. The site reloads automatically as you
edit.

Before publishing, it's worth also running:

```bash
npm run build   # catches typos in the data files (e.g. a missing comma)
npm run lint
```

## Publishing

See `README.md` for deployment instructions (the site is a standard
Next.js app and deploys cleanly to Vercel or any Node hosting).

One thing to update once you have a real domain: `src/app/layout.tsx` sets
`siteUrl` to a placeholder (`https://www.candlewoodinteriors.com`) used for
SEO metadata and the sitemap — point it at your real domain when you have one.

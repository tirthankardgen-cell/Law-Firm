# The Modern Indian Chambers

Responsive frontend demonstration based on the master brief. Next.js App Router and TypeScript; no backend, database, CMS, or contact submissions, as requested. All identity and practice content is illustrative. Search indexing is disabled globally and in robots.txt.

## Run

Use Node.js 24 or a compatible supported Node release, and pnpm.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Validate

```sh
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Deploy to Vercel

Import this GitHub repository into Vercel. Select Next.js, retain the repository root, use `pnpm install --frozen-lockfile` and `pnpm build`. No environment variables or external services are needed. Vercel hosts the frontend routes. Do not enable production indexing for a real practice until its identity and content have been verified and approved.

## Edit the demo

Homepage: `src/app/page.tsx`. Practice areas, notes and navigation: `src/lib/content.ts`. Inner pages: `src/app/[section]/page.tsx`. Design tokens and responsive styles: `src/app/globals.css`.

Each photographic placement has a distinct generated asset: the homepage uses the transparent `lady-justice-cutout.png` layered in front of a recessed CSS frame, the sculpture section uses `lady-justice-portrait.png`, and the Chambers hero uses `chambers-interior.png`, all stored in `public/images/`. Practice details use individual editorial colour treatments rather than repeated photos. Photographic hero navigation is transparent; image focal positions preserve the statue’s face on desktop and mobile. The hero cutout projects above and below its frame with a separate shadow layer; mobile places the sculpture above the copy without overlapping text. It does not depict a real court or office. The original scales-and-book emblem is not an official insignia. The visual identity uses restrained typography, paper surfaces, Hindi annotations, folio numbers, and fine document rules. Desktop homepage chapters occupy a viewport; mobile and short screens expand naturally for readable content. Inner pages have separate chamber, matter-index, professional-register, reading-room, correspondence, and policy treatments. System serif/sans-serif fonts avoid external font requests. The contact page intentionally displays no invented contact details and has no submission form. Advocate credentials are reserved for verified information.

## Scope

Includes homepage, chambers, practice directory and six detail pages, advocate placeholder, legal notes and three sample articles, contact, disclaimer, privacy, terms, accessibility, custom 404, responsive navigation, favicon and noindex metadata. CMS, authentication, approval workflow, storage, forms, and migrations are deferred because this is a frontend demo.

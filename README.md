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

Each photographic placement has a distinct generated asset: the principles section uses `lady-justice-portrait.png`, and the Chambers hero uses `chambers-interior.png`, stored in `public/images/`. The homepage hero is typography-led, without a sculpture or background image. It does not depict a real court or office. The original scales-and-book emblem is not an official insignia. The visual identity uses restrained typography, paper surfaces, Hindi annotations, folio numbers, and fine document rules. Desktop homepage chapters occupy a viewport; mobile and short screens expand naturally for readable content. Inner pages have separate chamber, matter-index, professional-register, reading-room, correspondence, and policy treatments. System serif/sans-serif fonts avoid external font requests. The contact page intentionally displays no invented contact details and has no submission form. Advocate credentials are reserved for verified information.

## Scope

Includes homepage, chambers, practice directory and six detail pages, advocate placeholder, legal notes and three sample articles, contact, disclaimer, privacy, terms, accessibility, custom 404, responsive navigation, favicon and noindex metadata. CMS, authentication, approval workflow, storage, forms, and migrations are deferred because this is a frontend demo.

## Formal practice presentation

The homepage prioritises the chambers’ identity, professional particulars, and practice directory. Upright headings, ivory and midnight-black surfaces, ruled information lists, and direct labels replace the earlier promotional copy. Demo disclosures remain visible, and no professional credentials are invented. The opening banner, navigation, centered title, and actions fit one viewport across desktop and mobile layouts.

## Current visual direction

Soft ivory (`#FAF8F3`), midnight black (`#08090B`), and restrained burgundy (`#782F36`). The homepage opens with a centered, typography-led firm introduction; the banner and hero together fit one viewport. The sculpture is retained only in the separate principles section.

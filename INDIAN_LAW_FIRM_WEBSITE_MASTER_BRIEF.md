# THE MODERN INDIAN CHAMBERS
## Master Website Design, Content, CMS & Engineering Specification

**Document type:** AI-agent implementation brief / product requirements / design system / technical architecture  
**Prepared:** 05 November 2026  
**Project:** Premium Indian law firm / advocate website  
**Project status:** Ready for implementation with clearly labelled client-dependent placeholders  
**Framework:** Next.js (React) + Node.js + Tailwind CSS + Payload CMS + PostgreSQL  
**Working brand name:** `[FIRM / CHAMBERS NAME]` — **placeholder only; do not treat as a real firm name**

---

# 0. DIRECT INSTRUCTIONS TO THE BUILD AGENT

You are the lead product designer, senior frontend engineer, backend engineer, CMS architect, QA engineer, and accessibility reviewer for this project.

**Build a real, fully functioning website from scratch, not a visual mockup or static landing-page demo.** Implement the design system, public routes, CMS models, authentication, dashboard configuration, content workflows, responsive layouts, accessibility, SEO, and deployment configuration outlined below. Use production-grade TypeScript and clean, maintainable components.

## Rules of execution

1. Create a Next.js App Router project with TypeScript, Tailwind CSS 4, and Payload CMS integrated in the same application, backed by PostgreSQL.
2. Respect the **compliance gate in Section 2**: implement all planned features, but publish only permitted/approved information. Content modules that are not approved must be disabled or hidden by default.
3. Treat all names, office details, enrolment numbers, photos, contact information, biographical claims, and practice areas as **unknown** until supplied and verified. Use conspicuous admin-only draft placeholders; do not invent professional credentials, cases, achievements, courts, clients, outcomes, team members, or testimonials.
4. Make the website genuinely dynamic. All significant public content must come from editable CMS entries or globals. Hard-code only reusable UI and design-system primitives.
5. Deliver a highly polished **courtroom-inspired but restrained** design, not a generic corporate SaaS template. Do not imitate an official Government of India or court website.
6. Prefer server components and lean CSS animations; do not add large animation libraries unless essential.
7. Set up migrations, `.env.example`, seed/demo data limited to development, sample tests, a README, and a clear build/deploy workflow.
8. Support both **a single advocate's chamber** and **a multi-advocate firm** through content configuration. Do not presume an organization structure that has not been confirmed.
9. Run lint, types, tests, and production build. Resolve errors rather than suppressing them.
10. If information is missing, build configurable placeholders and document them in `CLIENT_CONTENT_CHECKLIST.md`; do not block the project merely because marketing copy or branding assets have not arrived.

**Definition of done:** A client can log into `/admin`, edit and publish approved website content, manage images and permitted articles, update contact details and practice areas, and view a fast, coherent, mobile-friendly public website without developer intervention.

---

# 1. VISION AND POSITIONING

## 1.1 Experience statement

> The website should feel like stepping into a distinguished Indian legal chamber: quiet, composed, structured, thoughtful, authoritative, and grounded in the institution of law.

The visual identity should borrow from **Indian courtroom architecture, legal filings, case-document typography, court corridors, polished timber, stone, legal archives, and the measured formality of legal discourse**. The inspiration is atmospheric; the site must **not** falsely claim association with a court, judiciary, bar association, or government institution.

This is **not** a startup landing page, marketplace, entertainment site, or animated portfolio.

## 1.2 Brand adjectives

- Formal, credible, timeless, composed, editorial, dignified, meticulous, premium, restrained.
- Contemporary usability combined with traditional legal-institutional aesthetics.
- Minimal graphical complexity and exceptionally strong spacing, type, and hierarchy.

## 1.3 Avoid

- Generic gavels, oversized scales of justice, random legal clip art, flashy 3D courtrooms, cartoon icons.
- Loud gold gradients, heavy glassmorphism, excessive shadows, neon, parallax, autoplay video, particle effects.
- Aggressive sales language, conversion funnels, floating WhatsApp prompts, pop-ups asking visitors to hire a lawyer.
- Fake constitutional text, invented Latin slogans, fabricated court seals, fabricated legal judgments, copied court branding.
- Public claims like “India's best”, “No. 1”, “100% success”, “Guaranteed justice”, “Top rated”, or “X cases won”.

## 1.4 Audiences and tasks

| Audience | What they may need | Intended experience |
|---|---|---|
| Visitor seeking factual information | Identity, qualifications, areas of practice, location | Quickly read accurate professional particulars |
| Existing professional contact | Address, telephone, official email | Find reliable contact information |
| Reader of permitted legal materials | General legal updates, articles, notices | Browse dated, reviewed, clearly attributed information |
| Advocate / firm administrator | Edit all website content | Secure, simple CMS dashboard |
| Content reviewer | Ensure correctness, approvals, and compliance | Draft → review → publication workflow |

---

# 2. CRITICAL: INDIAN ADVOCATE-WEBSITE COMPLIANCE

**This section overrides the visual/content wishes elsewhere in the document.** This is an engineering specification, not a legal opinion. **Before launch, the client and an appropriately qualified Indian legal/compliance reviewer must approve the website's content and publishing process.** A website disclaimer alone is not a substitute for Rule 36 compliance.

## 2.1 Core principle

Rule 36 of the Bar Council of India Rules restricts advocates from advertising or soliciting work directly or indirectly. The 2008 website-information exception concerns prescribed factual particulars under the relevant Bar Council process, including:

- Name of advocate / firm.
- Address, telephone numbers, and email address.
- Enrolment number and date; relevant State Bar Council information; Bar Association membership particulars.
- Professional and academic qualifications.
- Areas of practice.

The rule and applicable interpretations may govern the form, approval, and scope of website information. **Do not assume that a general corporate law-firm website, practice-area marketing copy, team biographies, legal articles, lead forms, or success stories are automatically permissible.**

## 2.2 Compliance modes — required architecture

Implement a feature-flagged `publicationMode` field in the CMS:

### Mode A — `restricted` (DEFAULT FOR PUBLIC PRODUCTION)

Designed to present only information specifically approved for publication. Show:

- Firm/advocate identity.
- Approved contact information and address.
- Approved enrolment, council, and qualification particulars.
- Approved, factual areas-of-practice information.
- Minimal legally reviewed disclaimers and privacy information.

Do **not** publish the promotional sections, lead-generation functions, or editorial content described in later sections until they have been separately approved. The site can still look premium and visually sophisticated.

### Mode B — `expanded_approved` (OFF BY DEFAULT)

Allows additional CMS modules (long-form firm story, richer profiles, articles, announcements, contact form, FAQs, etc.) **only if** independently approved by the client's counsel under applicable professional rules. Each publishable record also has an approval status and audit trail.

The reviewer should be able to disable an individual module or the entire expanded mode without code changes. Do not provide a toggle to bypass required professional review.

## 2.3 Explicit prohibited/default-hidden content

- Client reviews and testimonials.
- Star ratings, rankings, awards, “best lawyer” badges, boastful statistics.
- Case victories, client logos, or case details offered as promotion.
- Guarantees, comparisons with other practitioners, pricing/promotional offers.
- Aggressive “Book a consultation / Hire now” advertising-style CTAs.
- Unsolicited chat widgets, remarketing or ad trackers, lead magnets.
- Suggestions of special influence over judges/courts or government endorsement.

## 2.4 Disclaimer behavior

Include a configurable, lawyer-approved disclaimer page. If the client specifically requires a first-visit acknowledgment, implement a simple accessible modal with session persistence and no dark patterns. The modal is **optional**, not a claim that visitor consent makes prohibited advertising lawful.

Possible *draft for review only*:

> This website provides information concerning the advocate or chamber. Materials appearing here, if any, are for general information and are not legal advice. Viewing this website or contacting the office does not itself establish an advocate–client relationship.

The attorney must review/rewrite the wording and decide whether it may be used.

## 2.5 Editorial review and data controls

- Every public content item must be factual, sourced, and legally approved.
- `legalApprovalStatus`: `pending | approved | rejected`; default `pending`.
- Store `approvedBy`, `approvedAt`, and optional internal approval reference.
- Only approved content can reach public production; drafts and previews must remain private.
- Avoid collecting matter facts or privileged documents through a public web form.
- No fabricated legal guidance; legal updates must display date and qualified editorial attribution.
- Support withdrawal/unpublication and removal from sitemap if approval is revoked.
- Review privacy notices and personal-data handling under applicable Indian law, including the phased commencement of the DPDP framework.

**References:**
- [Ministry of Law & Justice / PIB: Regulation for Online Legal Services](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2043470&lang=2&reg=3)
- [Bar Council of India Rules — Part VI, Rule 36 and Schedule (Supreme Court-hosted study material)](https://cdnbbsr.s3waas.gov.in/s3ec0490f1f4972d133619a60c30f3559e/documents/aorexam/18052023_051925.pdf)
- [MeitY: DPDP Rules, 2025](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2190014&lang=1&reg=3)

---

# 3. VISUAL CREATIVE DIRECTION

**Concept name:** `THE MODERN INDIAN CHAMBERS`  
**Visual principle:** `Courtroom gravity + editorial clarity + contemporary web usability`

## 3.1 Design language

Imagine:

- Warm ivory pages like archival legal paper.
- Ink-navy type and refined serif headlines reminiscent of formal legal texts.
- Narrow antique-brass accents evocative of nameplates and fittings.
- Structural vertical lines inspired by court columns; measured dividers like legal-document rules.
- High-ceiling whitespace, symmetrical compositions, and occasional asymmetric editorial spreads.
- Hero imagery, when licensed and relevant, of **Indian courtroom corridors, sandstone columns, archival bookshelves, courthouse architectural details, timber doors or empty legal libraries** — never imply an unrelated photograph depicts the actual client's chambers or workplace.

### Atmospheric motifs

Use subtle versions of these, **not all at once**:

1. `Vertical Rule` — 1px vertical brass/stone line next to a section introduction.
2. `Docket Number` — small sequential labels, e.g. `01 / THE CHAMBERS`.
3. `Arch / Colonnade` — optional CSS-generated architectural line work, only decorative.
4. `Exhibit Divider` — fine horizontal line separating sections, like a legal brief.
5. `Institutional Wordmark` — spaced capitals, high-quality typographic kerning.
6. `Archival Frame` — restrained image mask/border with strong negative space.

**No use of the Indian national emblem, Supreme Court seal, court logos, or official insignia without an actual right and reason to do so.**

## 3.2 Color system

| Token | Hex | Usage |
|---|---|---|
| `--ink-950` | `#17212B` | Primary dark backgrounds and primary body text |
| `--ink-800` | `#2A3946` | Secondary headings and dark surfaces |
| `--parchment-50` | `#F7F5F0` | Main warm off-white background |
| `--paper-100` | `#EFEAE1` | Alternate section background |
| `--stone-300` | `#D5CEC1` | Dividers, neutral borders |
| `--brass-600` | `#92774E` | Sparse accents, borders, icons |
| `--brass-300` | `#CAB18A` | Decorative accents on dark fields |
| `--slate-600` | `#5C666E` | Muted supporting copy |
| `--white` | `#FFFFFF` | Cards on dark, modal content |
| `--danger` | `#9B3737` | Admin validation/errors only |

Use brass sparingly. **Never set small body copy in pale gold on white or rely on an accent color if it fails WCAG contrast.** Verify contrast in browser.

Suggested composition balance: ~65% parchment/ivory, ~25% navy/ink, ~10% muted stone/brass/detail.

## 3.3 Typography

- **Display / editorial headings:** `Cormorant Garamond` (or `Libre Baskerville` if visual testing favors clarity). Use one display serif, not both.
- **Body / navigation / admin-independent site UI:** `Inter` or `Manrope`, choose one.
- Load fonts with `next/font`; include robust fallbacks and avoid external-font layout shift.
- H1 desktop: `clamp(3.25rem, 6vw, 6.75rem)`, line-height ~0.95–1.08.
- H1 mobile: `clamp(2.6rem, 11vw, 4rem)`, line-height ~1.0–1.1.
- H2 desktop: `clamp(2.25rem, 4vw, 4.2rem)`.
- Body: 16–18px, line-height 1.6–1.8, max readable measure 66–74 characters.
- Uppercase micro-labels: 11–12px, letter-spacing 0.14–0.22em; ensure readability.
- Keep judicial-style language elegant but understandable. **Never trade comprehensibility for decorative legal jargon.**

## 3.4 Layout

- Max content width: 1280px (plus appropriate page gutters).
- Desktop horizontal padding: 48–80px; tablet: 32px; mobile: 20–24px.
- Section spacing desktop: 112–152px; tablet: 80–104px; mobile: 64–80px.
- Mostly 12-column desktop grid, 6-column tablet, single-column mobile.
- Editorial left-aligned body content; justified text is discouraged on small screens.
- Thin 1px dividers, squared or small-radius surfaces (4–8px), no bubbly pill-card aesthetic.
- Long-page rhythm: broad architectural hero → restrained information block → warm/light section → dark institutional footer.

## 3.5 Imagery

**Hero art direction (if used):** A quiet, high-resolution architectural shot of Indian courthouse-style columns or a stone corridor in natural diffused daylight; architectural rather than theatrical; no people required; sophisticated crop with negative space.

- Implement through CMS media upload, alt text, focal point, and responsive image variants.
- Default to an elegant **CSS-only typographic hero** if no properly licensed image is available.
- Do not scrape court websites or download protected court photography without verifying rights.
- Images should be monochrome/warm neutral or naturally color-graded, never heavily filtered.
- Never fake images of the client, their office, or claimed courtroom appearances.
- Low-bandwidth responsive images via `next/image`; optimized WebP/AVIF as appropriate.

## 3.6 Motion

- Header opacity/line transitions: 150–250ms.
- On-scroll reveal: subtle 8–16px translation and fade only, with initial content accessible and no JS dependency.
- Underline reveal on navigation hover/focus.
- Slow crop/scale effect on one image only if tasteful and performant.
- `prefers-reduced-motion`: remove nonessential transforms and scrolling effects.
- No full-screen preloader, scroll hijack, video background, heavy Lottie, WebGL, complex GSAP timeline, or cursor replacement.

---

# 4. INFORMATION ARCHITECTURE & NAVIGATION

**Navigation must read like a legal practice, without inventing an official-court role.**

## 4.1 Primary navigation

| Public label | Route | Meaning / conventional page name | Default public mode |
|---|---|---|---|
| **The Chambers** | `/chambers` | About / firm overview and approved particulars | Show only approved factual data |
| **Areas of Practice** | `/practice` | Practice areas / services | Show approved factual list |
| **The Advocates** | `/advocates` | Team / lawyer profiles | Show only approved profiles and particulars |
| **Legal Notes** | `/legal-notes` | Articles / insights / updates | Hide until separately approved |
| **Contact** | `/contact` | Office address and contact details | Show approved details; form off by default |

Logo/wordmark links to `/`. Do **not** add “Case Wins”, “Success Stories”, “Our Clients”, or “Reviews”.

Optional alternate nav labels requiring accessibility/content review: `The Practice` (practice areas), `From the Record` (notes), `Correspondence` (contact). Preferred implementation keeps labels self-explanatory and legal-flavored.

## 4.2 Utility links

In footer: `Professional Particulars`, `Disclaimer`, `Privacy Notice`, `Terms of Use` (if applicable), `Accessibility` (optional). Make real pages; no dead links.

## 4.3 Public pages

| Route | Template | Primary modules | CMS-controlled |
|---|---|---|---|
| `/` | Home | Hero, identity, areas summary, approved factual profile, office details | Yes |
| `/chambers` | Chambers | Identity, approved introduction, registration/qualifications, office | Yes |
| `/practice` | Areas index | Approved practice-area listing | Yes |
| `/practice/[slug]` | Practice detail | Factual description, scope, related approved content | Optional and **approval-gated** |
| `/advocates` | Advocate directory | Approved advocate particulars | Yes |
| `/advocates/[slug]` | Advocate profile | Qualifications, enrolment particulars, practice areas | Yes; approval-gated fields |
| `/legal-notes` | Editorial index | Published notes with date, category, search | **Disabled by default** |
| `/legal-notes/[slug]` | Editorial article | Date, author, source, body, notices | **Disabled by default** |
| `/contact` | Contact | Address, phone, email, office information, optional form | Yes; form gated |
| `/disclaimer` | Legal text | Lawyer-approved notice | Yes |
| `/privacy` | Legal text | Privacy notice | Yes |
| `/terms` | Legal text | Terms if supplied/approved | Yes |
| `/404` | System | Helpful route navigation | No |
| `/admin` | Secure CMS | Dashboard and administration | Protected |

## 4.4 Homepage structural wireframe

```text
┌──────────────────────────────────────────────────────────────────────┐
│ VERY THIN TOP RULE                                                 │
│ [WORDMARK]     THE CHAMBERS   AREAS OF PRACTICE   THE ADVOCATES ...│
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│     ADVOCATE / CHAMBERS                                             │
│                                                                      │
│     [FIRM / ADVOCATE NAME]                  [OPTIONAL COURT-         │
│     [FACTUAL DESIGNATION / CITY]            ARCHITECTURE IMAGE]     │
│                                                                      │
│     [approved identifying sentence]                                 │
│     View Areas of Practice  ──────────────                          │
│                                                                      │
│                                             01 / THE PRACTICE        │
├──────────────────────────────────────────────────────────────────────┤
│  01 / THE CHAMBERS                                                  │
│  [Approved particulars and a spare editorial composition]           │
├──────────────────────────────────────────────────────────────────────┤
│  02 / AREAS OF PRACTICE                                              │
│  [Typographic list + thin separators; no promotional cards]         │
├──────────────────────────────────────────────────────────────────────┤
│  03 / THE ADVOCATE(S)                                                │
│  [Approved factual qualifications / profile link]                   │
├──────────────────────────────────────────────────────────────────────┤
│  04 / FROM THE LEGAL RECORD  (ONLY IF APPROVED)                      │
│  [Latest reviewed legal note list]                                   │
├──────────────────────────────────────────────────────────────────────┤
│  05 / CORRESPONDENCE                                                 │
│  [Office address | telephone | email]                                │
├──────────────────────────────────────────────────────────────────────┤
│ DARK NAVY FOOTER + WORDMARK + PROFESSIONAL PARTICULARS + POLICIES    │
└──────────────────────────────────────────────────────────────────────┘
```

### Rule for home content in restricted mode

Use identity/approved factual information as the hero. Hide anything aspirational/persuasive until explicitly approved. Maintain visual luxury through typography, pacing, architecture, and white space — **not through sales claims**.

---

# 5. PAGE-BY-PAGE EXPERIENCE

## 5.1 Home (`/`)

### Header

- Fixed-height, nonintrusive header; wordmark left, navigation right.
- Desktop height ~82–92px; mobile ~68–76px.
- Transparent over dark hero *only* if contrast remains correct; otherwise solid parchment.
- Thin bottom line; sticky on scroll without dramatic shrinking.
- Mobile menu is an accessible overlay/drawer with focus trapping, Escape close, backdrop, body-scroll lock.

### Hero

- Two-column layout at desktop, one-column at mobile.
- Small upper label `ADVOCATE & LEGAL PRACTICE` or actual approved designation.
- Large display serif: default public headline is the actual `[FIRM NAME]` / `[ADVOCATE NAME]`.
- Secondary line is factual, e.g. approved city or office information.
- Optional thin rule and single factual text link: `View Areas of Practice`.
- CMS-controlled hero architecture/photo only if correctly licensed and approved.

**Design exploration copy — NOT approved for publication:**
- `A Practice Rooted in Law.`
- `Principle. Precision. Practice.`
- `Within the Framework of Law.`

All poetic/positioning headlines above must remain development-only until the advocate approves them under the applicable rules.

### Areas overview

Display 3–6 approved areas using a simple vertical or two-column numbered list:

`01 — Civil Law`  
`02 — Criminal Law`  
`03 — Family Law`

These are **layout demonstration examples, not assertions about the client's actual practice**. Use real approved values before publication.

### Office/contact band

Show approved address, email and phone. Avoid pseudo-urgent appointment language. Use text-based links `Email the Office` / `View Contact Details` only if permitted.

### Optional reviewed editorial preview

A maximum of three `Legal Notes`, only when `publicationMode === expanded_approved` and each article is individually approved. No fabricated article titles or summaries in production.

## 5.2 The Chambers (`/chambers`)

- Heading and thin line: `The Chambers`.
- Factual professional identity, if approved.
- Structured information table for offices, enrolment and qualifications.
- Optional office photography only if authentic, approved and captioned.
- Do not invent a founding date, historic lineage, global reach, or institutional affiliation.

## 5.3 Areas of Practice (`/practice`)

- Minimal title: `Areas of Practice`.
- Approved numbered practice-area list, no icons needed.
- Entry shows area name plus very short approved neutral description.
- Optional detail route only when counsel authorizes expanded explanatory material.
- Do not claim specialization unless legally permissible and verified.

## 5.4 The Advocates (`/advocates`)

- Support one advocate elegantly (large, centered professional profile) or several advocates (2–3-column measured grid).
- Profile: factual name, enrolment info, qualifications, areas of practice, council information.
- Photographs optional; use only accurate supplied portraits if their publication is approved.
- No invented awards, prior judgeships, case wins, or biographies.

## 5.5 Legal Notes (`/legal-notes`) — gated

An editorial archive rather than a marketing blog:

- Category filter, search field, chronological list; each article shows publication date and approved category.
- Article includes title, named author, content, citations/sources, date last reviewed, and clear general-information notice.
- CMS allows future updates and publishing/unpublishing.
- All articles require legal/content approval and correct copyright permissions before publication.
- No case-specific client advice, personal data, or legal predictions generated without reviewer signoff.
- If not permitted, disable navigation, routes, RSS, sitemap entries, and preview snippets for this module.

## 5.6 Contact (`/contact`)

- Large editorial heading `Contact` with sublabel `Office & Correspondence`.
- Approved physical office address, email, phone; optional office hours if authorized.
- Copyable address and accurate `tel:` / `mailto:` links.
- Optional map embed: privacy-aware, lazy-loaded, no persistent third-party tracking by default.
- Optional inquiry form **off by default**, pending ethics/privacy approval.

### If contact form is approved

Fields: `Name`, `Email`, `Telephone (optional)`, `General inquiry category (optional)`, `Message (max 800 chars)`, required privacy/terms acknowledgment only where legally justified.

Show: `Please do not submit confidential information or documents through this form. Submission does not establish an advocate–client relationship.` — must be reviewed.

Do not ask for litigation documents, case history, Aadhaar, PAN, sensitive facts, or attachments. Store minimal fields, validate on server, rate limit, protect against spam, and use approved retention policy.

## 5.7 Error & empty states

- 404 title: `The page could not be located.`
- Secondary: `Return to the homepage or view the available sections.`
- Editorial archive empty: `No published notes are available.`
- No fabricated content or automatic fallback to draft items.

---

# 6. COMPONENT LIBRARY

Build reusable accessible components; variants should be typed.

| Component | Requirement |
|---|---|
| `SiteHeader` | Desktop nav + accessible mobile drawer |
| `Wordmark` | Text-first logo, optional approved monogram |
| `SectionIndex` | Small `01 / THE CHAMBERS` eyebrow |
| `EditorialHero` | Left text, optional art/photo, responsive |
| `ArchitecturalRule` | Fine horizontal/vertical decorative line |
| `SectionHeading` | Consistent serif heading and intro |
| `PracticeAreaList` | Numbered list with neutral hover/focus |
| `AdvocateProfile` | Factual particulars; optional verified photo |
| `ProfessionalParticulars` | Semantic `dl` layout for approved facts |
| `LegalNoteList` | Search/filter/pagination, gated |
| `ArticleBody` | Accessible long-form styles, source links |
| `OfficeDetails` | Address, phone/email links |
| `ContactForm` | Feature-gated, secure, accessible |
| `DisclaimerDialog` | Optional first-visit acknowledgment |
| `SiteFooter` | Large wordmark, factual address, policy links |
| `CMSImage` | `next/image`, alt/focal point, fallback |
| `Breadcrumbs` | On inner routes, lightweight |
| `EmptyState` | Neutral professional text |
| `ThemeDivider` | Thin accessible decorative separator |

### UI states

For all controls: keyboard focus visible, error/disabled/empty states where applicable, loading feedback, touch targets at least 44×44px, no color-only indicators.

---

# 7. CMS / ADMIN DASHBOARD

## 7.1 CMS choice

**Use Payload CMS 3.x (latest stable compatible release at installation)**, integrated natively with Next.js App Router and PostgreSQL. This is a single deployment/app architecture; no second React admin frontend is necessary.

Use Payload's built-in authentication, access control, drafts/versions where available, and hooks. Customize the administration with a restrained professional UI where feasible; public design tokens need not override the CMS's usable admin patterns.

## 7.2 Dashboard information architecture

```text
ADMIN DASHBOARD
│
├── Overview
│   ├── Draft items
│   ├── Awaiting legal approval
│   └── Recently published / updated
│
├── Website Content
│   ├── Homepage
│   ├── The Chambers
│   ├── Areas of Practice
│   ├── Advocates
│   ├── Legal Notes (gated)
│   └── Optional informational pages (gated)
│
├── Media Library
│
├── Office & Site Settings
│   ├── Firm / advocate identity
│   ├── Address / contacts
│   ├── Header / footer
│   ├── Branding / social preview
│   └── Compliance configuration
│
├── Policies & Notices
│   ├── Disclaimer
│   ├── Privacy Notice
│   └── Terms of Use
│
├── Form Submissions (ONLY if feature approved)
│
└── Administration
    ├── Users & Roles
    ├── Content approval log
    └── Audit history
```

## 7.3 Collections & Globals (implementation contract)

### `siteSettings` (Global)

Fields:
- `siteName`, `siteType` (`solo_chamber | law_firm`), `defaultLocale`, `siteUrl`.
- `logoLight`, `logoDark`, `favicon`, `defaultSocialImage`.
- `officeAddress` (structured street/locality/city/state/postalCode/country), `phones[]`, `emails[]`.
- `officeHours` (optional approved), `footerCopyrightName`.
- `publicationMode` (`restricted | expanded_approved`, default `restricted`).
- `featureFlags`: `showNotes`, `showPracticeDetails`, `showEnquiryForm`, `showExpandedProfiles`, `showDisclaimerDialog`, `showMapEmbed` (all false by default where not core factual content).
- `defaultSeoTitle`, `defaultSeoDescription`, `robotsIndexing` (production only when ready).
- `legalReviewerConfirmed` + `reviewReference` (admin-only governance fields).

### `navigation` (Global)

- Header navigation items: `label`, `href`, `requiresExpandedApproval`, `sortOrder`.
- Footer navigation and approved policy links.
- Reject invalid external URLs; avoid arbitrary HTML/code injection.

### `pages` (Collection)

- `title`, `slug`, `template`, `heroHeading`, `heroSubheading`, `heroMedia`.
- `contentBlocks[]`: predefined block types, not arbitrary scripts or HTML.
- `metaTitle`, `metaDescription`, `socialImage`, `canonicalUrl`.
- `status`, `legalApprovalStatus`, `approvedBy`, `approvedAt`, `publishedAt`, `lastReviewedAt`.
- Unique slugs; reserved route conflict prevention.

### `practiceAreas` (Collection)

- `name`, `slug`, `summary` (neutral/factual), `body` (optional approved), `displayOrder`.
- `relatedAdvocates` relationship.
- `status`, approval metadata, SEO optional.
- Prevent premature detail publication when not approved.

### `advocates` (Collection)

- `fullName`, `slug`, `designation` (factually verified), `portrait` optional.
- `enrolmentNumber`, `enrolmentDate`.
- `originalStateBarCouncil`, `currentStateBarCouncil`, `barAssociation`.
- `academicQualifications[]`, `professionalQualifications[]`, `practiceAreas[]`.
- `profileText` (gated expanded field), `sortOrder`, `isPublic`.
- Approval metadata and timestamps.
- **Protect private admin data from unintended exposure; only explicitly approved fields reach public queries.**

### `legalNotes` (Collection, disabled by default)

- `title`, `slug`, `excerpt`, `body` (rich text), `category`, `tags[]`.
- `author` relationship to approved advocate or literal byline (approved).
- `sourceReferences[]` with title and URL, `publishedAt`, `lastReviewedAt`.
- `featuredImage` optional, `seo` fields, `status` + approval metadata.
- Optional `scheduledPublishAt` only if implementation includes a reliable server-side publishing job; do not promise scheduling without an actual job runner.

### `legalPolicies` (Collection or Global)

- `policyType` (`disclaimer | privacy | terms | accessibility`), `title`, `body`, `effectiveDate`, `version`.
- Approval metadata; public policy links only for approved content.

### `media` (Collection)

- `file`, `alt`, `caption`, `credit`, `license/permissionStatus`, `focalPoint`.
- Allowed MIME types / size limits configured by the application.
- Use dedicated external object storage in production when appropriate.

### `contactSubmissions` (Collection — only if allowed)

- Minimal form fields only; `createdAt`, `status`, `retentionDeleteAt`.
- No public read access, no editing by unprivileged users.
- Optional email notification via approved transactional email provider.
- Encrypt in transit; restrict data at rest; configure limited retention.

### `users` (Auth Collection)

- `email`, `displayName`, `role`, `active`, `lastLoginAt` (if supported/audited).
- Roles: `super_admin`, `editor`, `legal_reviewer`.
- Only invite/created admin users; **public signup prohibited**.

### `contentApprovals` / `auditLogs` (Collection or plugin)

- `collection`, `recordId`, `contentVersion`, `action`, `actor`, `timestamp`, `approvalNote`.
- Immutable or append-only if possible.
- Keep a sufficient history of unpublishing and approval decisions.

## 7.4 Permissions matrix

| Action | Super Admin | Editor | Legal Reviewer |
|---|---|---|---|
| Edit drafts and media | Yes | Yes | Optional |
| Submit for legal review | Yes | Yes | Yes |
| Approve / reject legal content | Yes* | No | Yes |
| Publish approved content | Yes* | No | Yes |
| Manage public compliance mode | Yes* | No | No |
| Invite/remove users | Yes | No | No |
| Read contact submissions | As required | No by default | As required |
| View audit history | Yes | Limited | Yes |

`*` Super Admin's permission to publish is **not** permission to bypass required client/legal approval: enforce approval status and governance rules separately.

### Publication workflow

`Draft → Submitted for Review → Approved → Published → Archived`.

- Revisions to published items create a **new draft** requiring reapproval; they must not silently replace live content.
- Preview access is token-protected and `noindex`.
- Publishing triggers route/tag revalidation and sitemap refresh.
- Reject publishing attempts server-side if compliance mode or approval is not satisfied.
- Provide explicit confirmation before unpublish/delete.

---

# 8. TECHNICAL ARCHITECTURE

## 8.1 Version baseline (verified 05 Nov 2026)

Use the **latest stable compatible PATCH versions available on implementation day**, never canary, alpha, or release-candidate builds for production.

| Layer | Selected baseline | Notes |
|---|---|---|
| React | Latest stable supported by selected Next.js | TypeScript and React Server Components |
| Next.js | **16.4.5** | Stable at brief date; App Router |
| Node.js | **26.x LTS** | Active LTS at brief date; use latest patched 26.x compatible with deployment |
| Tailwind CSS | **4.3.x** | Use CSS-first Tailwind v4 configuration |
| CMS | **Payload CMS 3.x** | Native Next.js CMS; check supported patch ranges |
| Database | **PostgreSQL** | Production managed PostgreSQL recommended |
| ORM / adapters | Payload-supported Postgres adapter | No duplicated ORM layer unless justified |
| Package manager | **pnpm** | Lockfile committed |
| Language | TypeScript (latest stable supported) | Strict mode |
| Icon system | Lucide React (optional, minimal) | Do not build icon-heavy interface |
| Email | Configurable transactional SMTP/provider | Only for approved forms/notifications |
| Media | Object storage or managed upload storage | Rights metadata mandatory |

**Official compatibility and setup:**
- [Next.js releases](https://github.com/vercel/next.js/releases)
- [Node.js release schedule](https://github.com/nodejs/Release)
- [Tailwind v4 with Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
- [Payload installation and compatibility](https://payloadcms.com/docs/getting-started/installation)

If a newer stable release is available at build time, update only after validating Payload/Next/React/Node compatibility. Keep an explicit lockfile and do not upgrade breaking majors blindly.

## 8.2 Recommended project structure

```text
law-chambers/
├── src/
│   ├── app/
│   │   ├── (website)/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── chambers/page.tsx
│   │   │   ├── practice/page.tsx
│   │   │   ├── practice/[slug]/page.tsx
│   │   │   ├── advocates/page.tsx
│   │   │   ├── advocates/[slug]/page.tsx
│   │   │   ├── legal-notes/page.tsx
│   │   │   ├── legal-notes/[slug]/page.tsx
│   │   │   ├── contact/page.tsx
│   │   │   ├── disclaimer/page.tsx
│   │   │   ├── privacy/page.tsx
│   │   │   └── terms/page.tsx
│   │   ├── (payload)/
│   │   │   ├── admin/[[...segments]]/page.tsx
│   │   │   └── api/[...slug]/route.ts
│   │   ├── api/
│   │   │   ├── contact/route.ts       # approved-only endpoint
│   │   │   └── revalidate/route.ts    # authenticated if needed
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── layout/
│   │   ├── editorial/
│   │   ├── practice/
│   │   ├── advocates/
│   │   ├── legal-notes/
│   │   ├── forms/
│   │   └── ui/
│   ├── collections/
│   │   ├── Users.ts
│   │   ├── Media.ts
│   │   ├── Pages.ts
│   │   ├── PracticeAreas.ts
│   │   ├── Advocates.ts
│   │   ├── LegalNotes.ts
│   │   ├── LegalPolicies.ts
│   │   └── ContentApprovals.ts
│   ├── globals/
│   │   ├── SiteSettings.ts
│   │   └── Navigation.ts
│   ├── blocks/
│   ├── lib/
│   │   ├── payload.ts
│   │   ├── queries.ts
│   │   ├── access.ts
│   │   ├── publishing.ts
│   │   ├── validation.ts
│   │   └── seo.ts
│   ├── hooks/
│   ├── types/
│   └── payload.config.ts
├── tests/
├── public/
├── scripts/
├── migrations/
├── .env.example
├── package.json
├── pnpm-lock.yaml
├── README.md
└── CLIENT_CONTENT_CHECKLIST.md
```

The precise generated Payload App Router files may differ by installed version: **use the current official starter file shape** rather than forcing stale paths.

## 8.3 Rendering and data flow

```text
CMS author logs into /admin
         ↓
Creates or edits a draft
         ↓
Legal review / approval policy
         ↓
Publication + revalidation
         ↓
PostgreSQL (Payload collections)
         ↓
Next.js server components / data access
         ↓
Cached approved public pages
         ↓
Visitor (desktop / mobile / tablet)
```

- SSR/ISR or cached Server Components for public editorial/factual pages as appropriate.
- Fetch approved content on server; **never** rely solely on hiding content with CSS/client JS.
- No draft leakage through public APIs, search, OG previews, or metadata.
- Revalidate on published changes; unpublish updates sitemap and removes public visibility.
- Keep client-side JS minimal: mobile nav, optional filter/search enhancement, optional contact form, optional modal.

## 8.4 Design tokens and stylesheet

Use Tailwind CSS 4 `@theme` tokens or equivalent central CSS custom properties. Avoid obsolete Tailwind v3 setup patterns unless required by an officially supported integration.

Example starting point:

```css
@import "tailwindcss";

@theme {
  --color-ink: #17212b;
  --color-ink-soft: #2a3946;
  --color-parchment: #f7f5f0;
  --color-paper: #efeae1;
  --color-stone: #d5cec1;
  --color-brass: #92774e;
  --color-brass-light: #cab18a;
  --font-display: var(--font-cormorant), Georgia, serif;
  --font-body: var(--font-inter), Arial, sans-serif;
}

html { scroll-behavior: smooth; }
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 8.5 Environment template

Include values like:

```dotenv
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
DATABASE_URL=postgresql://USER:PASSWORD@HOST:5432/DBNAME
PAYLOAD_SECRET=REPLACE_WITH_STRONG_RANDOM_SECRET
REVALIDATION_SECRET=REPLACE_WITH_STRONG_RANDOM_SECRET

# Optional only when corresponding functionality is approved/enabled
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=
CONTACT_RECIPIENT_EMAIL=
MEDIA_STORAGE_BUCKET=
MEDIA_STORAGE_REGION=
MEDIA_STORAGE_ENDPOINT=
MEDIA_STORAGE_ACCESS_KEY_ID=
MEDIA_STORAGE_SECRET_ACCESS_KEY=
```

Never commit `.env` secrets. `NEXT_PUBLIC_*` must not contain secrets. Prefer managed hosting secrets and production database credentials with limited privileges.

---

# 9. SECURITY, PRIVACY, PERFORMANCE AND SEO

## 9.1 Security baseline

- HTTPS everywhere, secure cookies, HSTS when deployment supports it.
- Payload access controls enforced server-side across all collections/globals.
- Strong admin passwords, allow 2FA where supported/implemented; no public registration.
- Rate-limit login attempts and approved public form endpoints.
- Validate, normalize and sanitize inputs; protect against XSS, CSRF where relevant, SQL injection, open redirects.
- Strict media MIME/type/size checking; no arbitrary executable uploads; SVG uploads prohibited unless securely sanitized and justified.
- Keep dependencies patched; scan lockfile for vulnerabilities and remediate critical/high findings.
- Limit admin users, log meaningful actions, protect backup and storage access.
- Content Security Policy compatible with Next.js/Payload requirements; avoid overly broad wildcard sources.
- Keep private data out of log output, telemetry, preview JSON and browser local storage.
- Disable verbose stack traces in production.

## 9.2 Privacy and consent

- Build a lawyer-reviewed privacy policy using the data flows actually deployed.
- Form submissions, if approved, should collect the minimum necessary data.
- Do not put visitor messages into email subject lines, analytics events or public audit logs.
- Configure purpose, retention, deletion and data-subject request handling appropriate to applicable law.
- Prefer privacy-respecting, cookieless metrics if needed and approved. No analytics by default.
- Embeds (maps, video) must not surprise visitors with third-party tracking.

## 9.3 SEO — accurate information only

- Unique descriptive titles/meta descriptions based solely on approved facts.
- Semantic HTML (`header`, `nav`, `main`, `article`, `section`, `footer`).
- Canonicals, valid sitemap, robots, Open Graph tags, proper 404/410 behavior.
- Noindex admin, preview, drafts, and unpublished/gated modules.
- Implement basic `Organization`/appropriate structured data only after compliance review; avoid rating/review schemas, boastful service claims, or fabricated entities.
- No keyword stuffing, clickbait, paid-search campaign integration by default.
- SEO must not become covert solicitation.

## 9.4 Performance targets

For realistic mobile/desktop test conditions:

- Lighthouse Performance **90+** on representative routes, subject to real hosting and media.
- Accessibility **95+** target; no critical axe violations.
- Target Core Web Vitals: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 at the 75th percentile in real-user measurements.
- Avoid layout shifts from fonts, header, images and dialogs.
- No more than necessary JS for static content; defer below-the-fold images.
- Compress images, implement responsive sizes, cache appropriately.

## 9.5 Accessibility

- WCAG 2.2 AA as implementation target.
- Visible skip-to-content link; correct H1 once per page.
- Logical tab order, focus restoration for drawers/modals, proper labels and errors.
- Full keyboard navigation; no hover-only disclosure.
- Tested at 320px–1440px widths and 200% zoom/reflow.
- Respect reduced motion; no text rendered as images unless unavoidable.
- Alt text for meaningful photography; empty alt for purely decorative motifs.

---

# 10. RESPONSIVE SPECIFICATION

| Width | Header | Hero | Practice list | Advocates |
|---|---|---|---|---|
| `< 640px` | Wordmark + menu button | Stacked, typography first | Single column | Single column |
| `640–1023px` | Compact nav or drawer | Stacked or 60/40 | 1–2 columns | 2 columns if space |
| `1024–1439px` | Full nav | 55/45 columns | 2 columns | 2–3 columns |
| `>= 1440px` | Full nav, generous gutters | Large editorial split | 2–3 columns | 3 columns max |

Mobile must look intentionally designed: no clipped giant letters, thin illegible gold text, horizontal scrolling, cramped contact information, or distracting hero cropping. Mobile content order: identity first, essential factual information second, decorative imagery last.

---

# 11. COPYWRITING SYSTEM

## 11.1 Editorial rules

- Formal, quiet, readable Indian English.
- Precise and restrained; one useful idea per sentence.
- Prefer meaningful legal vocabulary (`Chambers`, `Advocate`, `Practice`, `Qualifications`, `Professional Particulars`, `Legal Notes`, `Correspondence`) but do not turn every interface label into an obscure court term.
- Use plain language for navigation and tasks; more ceremonial wording is permitted in decorative labels only.
- Avoid first-person triumphal claims or emotionally manipulative legal marketing.
- Never generate professional facts without source data.

## 11.2 Approved-facts-first sample UI strings

| Location | Default neutral string | Alternative — only after legal approval |
|---|---|---|
| Hero eyebrow | `ADVOCATE & LEGAL PRACTICE` | `IN THE SERVICE OF LAW` |
| Hero heading | `[ADVOCATE / FIRM NAME]` | `A Practice Rooted in Law.` |
| Hero link | `View Areas of Practice` | `Explore the Practice` |
| About section | `The Chambers` | `A Tradition of Thoughtful Practice` |
| Team section | `The Advocates` | `At the Bar` |
| Notes section | `Legal Notes` | `From the Legal Record` |
| Contact heading | `Contact` | `Office & Correspondence` |
| Footer description | `[FIRM NAME] — [CITY]` | `Principle. Precision. Practice.` |

**Do not ship the alternative column without client approval.** These are direction-setting examples, not final public legal claims.

## 11.3 Formatting legal content

- Names, qualifications and jurisdictions appear exactly as verified and approved.
- Spell out acronyms on first use for general audiences.
- Maintain dates, citations and accurate labels for every legal article.
- If naming statutes, verify their current titles and effective dates before publication.
- Source attribution must be genuine; no invented citations or court references.

---

# 12. FUNCTIONAL REQUIREMENTS / ACCEPTANCE CRITERIA

## 12.1 Public site

- [ ] Works on desktop, tablet and mobile; visually polished and cohesive.
- [ ] Header/nav links are correct and keyboard accessible.
- [ ] Home hero and sections render from approved CMS data.
- [ ] The Chambers shows only approved professional particulars.
- [ ] Areas of Practice is CMS-editable and correctly ordered.
- [ ] Advocate records support solo and multi-advocate structures.
- [ ] Contact details link correctly via telephone/email/address.
- [ ] Notes and article routes are absent publicly unless approved/enabled.
- [ ] Entire site has no visible placeholder professional claims in production.
- [ ] Missing content causes a thoughtful empty state, not a broken UI.
- [ ] Favicon, logos, fonts, social meta and responsive imagery work.
- [ ] Search engines cannot index preview, drafts, admin or hidden content.

## 12.2 Dashboard & workflow

- [ ] Admin login and restricted roles work.
- [ ] Non-admins cannot create admins or change compliance controls.
- [ ] Authorized editors can upload licensed media and edit draft content.
- [ ] Reviewers can approve/reject; publishing requires approval.
- [ ] Approved CMS changes become visible on the public site after revalidation.
- [ ] Modified public articles require fresh review.
- [ ] Unpublishing removes content from public listing, pages and sitemap.
- [ ] Non-approved pages cannot be accessed by slug guessing or API endpoints.
- [ ] Media has alt, source/rights metadata; dangerous uploads rejected.
- [ ] Audit trail records relevant content and approval events.

## 12.3 Quality gates

- [ ] `pnpm lint` passes.
- [ ] `pnpm typecheck` passes (add script if needed).
- [ ] `pnpm test` passes for critical logic.
- [ ] `pnpm build` passes.
- [ ] Verify page titles, meta tags, canonical, robots, sitemap.
- [ ] Verify responsive layout at 320, 375, 768, 1024 and 1440 px.
- [ ] Test keyboard nav, screen reader labels, focus visibility, reduced motion.
- [ ] Test denied publishing due to missing approval.
- [ ] Test form spam mitigation and storage access if form enabled.
- [ ] Verify database migration/backup and documented restore procedure.

## 12.4 Priority test scenarios

1. Editor creates a `PracticeArea` draft. Public site does not display it.
2. Reviewer approves and publishes. Public listing updates without rebuild/deploy.
3. Editor changes approved content. Previously published content remains live until new revision approved.
4. Reviewer rejects draft. It never appears in public APIs or sitemap.
5. Admin switches back to `restricted`. All expanded-only routes and cards disappear publicly.
6. An anonymous visitor cannot read pending articles by guessing API URLs.
7. Admin uploads invalid image MIME or oversized file; server rejects it.
8. Mobile menu is navigable by keyboard and does not trap focus after close.
9. Visitor sees correct office details and no fake placeholders.
10. Public site works correctly with JS restricted where content can be server rendered.

---

# 13. IMPLEMENTATION PHASES

## Phase 1 — Foundation

- Initialize compatible stable Next.js + React + Node + Payload + Tailwind + PostgreSQL.
- Set up project structure, formatting, linting, strict TypeScript, environment template.
- Build design tokens, typography, core layout, header, footer, mobile menu.
- Configure database and working `/admin` authentication.

## Phase 2 — Content models & compliance

- Define CMS collections and site globals.
- Implement access control, revisions, legal approval metadata, publish guards.
- Create seed data for **development only** with clearly labeled placeholders.
- Implement restricted-mode public data querying.

## Phase 3 — Public experience

- Build Home, Chambers, Practice, Advocates, Contact and policy pages.
- Add architectural hero option, approved media controls, professional particulars layouts.
- Implement responsive layouts and decorative animations without performance cost.

## Phase 4 — Optional gated modules

- Implement legal notes/articles behind flags and approval requirements.
- Implement approved contact form, if requested, with retention and security controls.
- Optional accessible acknowledgment dialog and lazy map embed.
- Add SEO metadata, sitemap, robots and caching.

## Phase 5 — Launch readiness

- Cross-browser tests, performance checks, axe accessibility tests, penetration/security checklist.
- CMS walkthrough and documentation for client.
- Verify all real facts, media rights, legal content approvals, privacy compliance, domain and email setup.
- Generate `CLIENT_CONTENT_CHECKLIST.md` and `LAUNCH_CHECKLIST.md`.
- Deploy staging first. **Do not activate public production indexing without the client's legal signoff.**

---

# 14. CLIENT INPUT CHECKLIST (NOT TO BLOCK INITIAL DEVELOPMENT)

Create these as fields and leave unpublished until the client supplies them:

| Item | Examples / verification | Required for launch? |
|---|---|---|
| Exact brand/chamber name | Legal spelling, capitalization | Yes |
| Single advocate or firm | Identify authentic operating structure | Yes |
| Advocate name(s) | As registered/approved | Yes |
| Enrolment / council information | Verify with client | As required by approved professional particulars |
| Qualifications | Exact verified degrees/descriptions | As approved |
| Areas of practice | Actual factual practice areas | Yes if shown |
| Office address | City, postal address | Yes |
| Telephone and email | Official published details | Yes |
| Approved website disclaimer | Lawyer-reviewed text | Yes |
| Bar Council compliance approval/process | Confirmation of applicable requirements | Yes |
| Domain / hosting ownership | DNS, server, backups | Yes |
| Brand logo | Official logo or approved text wordmark | Optional; text fallback |
| Advocate photos | Accurate originals + publication approval | Optional |
| Office/architectural imagery | Originals/licensed with usage rights | Optional |
| Legal Notes editorial policy | Approval workflow and content owners | If enabled |
| Form/privacy data policy | Retention, recipient, notice, safeguards | If form enabled |
| Analytics choice | Privacy/consent/legal signoff | Optional |

---

# 15. FINAL DELIVERY EXPECTATIONS FROM THE BUILD AGENT

The agent must finish with:

1. A running Next.js website matching this visual and functional specification.
2. A working Payload CMS at `/admin` with database persistence.
3. Properly modeled data and legal-review publishing controls.
4. Meaningful demo placeholders **only in development/staging**; no fabricated professional facts in production.
5. `README.md` with local setup, environment configuration, CMS usage, migrations, deployment, backups and recovery.
6. `.env.example`, reproducible lockfile, database migration files and seed procedure.
7. `CLIENT_CONTENT_CHECKLIST.md` and `LAUNCH_CHECKLIST.md`.
8. Passing tests and a concise summary of what is working, gated, and waiting for real client content.

## Visual completion test

When the homepage first opens, a visitor should notice:

- **Courtroom-inspired gravitas, not courtroom-themed decoration.**
- **A premium editorial wordmark and legal typography.**
- **Quiet, architectural composition, ivory paper and ink-navy contrast.**
- **Sparse brass details and refined rules/dividers.**
- **Minimal motion and beautiful responsive typography.**
- **Accurate professional information rather than advertising or hype.**

The result must feel distinctly legal, distinctly Indian in its professional context, premium, modern, and enduring — without becoming visually heavy or legally misleading.

---

# 16. SOURCE NOTES AND MAINTENANCE

This brief's tech baseline and professional-conduct cautions were checked on **05 November 2026**. Versions and legal guidance may change before launch; verify them again at implementation and publication.

- Next.js stable releases: https://github.com/vercel/next.js/releases
- Node.js release/LTS schedule: https://github.com/nodejs/Release
- Tailwind CSS official installation: https://tailwindcss.com/docs/installation/framework-guides/nextjs
- Payload CMS official installation: https://payloadcms.com/docs/getting-started/installation
- Ministry of Law & Justice guidance on lawyer advertising: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2043470&lang=2&reg=3
- BCI Rules, Rule 36/Schedule (Supreme Court-hosted PDF study material): https://cdnbbsr.s3waas.gov.in/s3ec0490f1f4972d133619a60c30f3559e/documents/aorexam/18052023_051925.pdf
- DPDP notification context: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2190014&lang=1&reg=3

**End of master specification.**

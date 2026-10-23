# Portfolio launch checklist

This checklist records work required before the portfolio is described as production-ready. Mark an item complete only after collecting direct evidence.

## Repository and security

- [ ] Install dependencies from the lockfile with `npm ci`.
- [ ] Run `npm audit`; assess each finding and document any accepted risk. The first CI install reported one critical vulnerability; identify the affected package and remediation before merging.
- [ ] Re-run `npm run lint` after the apostrophe-escaping fix; confirm no errors remain.
- [ ] Run `npm run build` and resolve production-build errors.
- [ ] Confirm the GitHub Actions quality workflow runs successfully on this branch; adding the workflow does not itself mean any check has passed.
- [ ] Review the full repository tree for API routes, server actions, credentials, and unexpected files.
- [ ] Review current and historical Git content for accidentally committed secrets; ignoring environment files does not remove secrets from history.
- [ ] Verify the response headers on a deployed preview and ensure they do not break legitimate functionality.
- [ ] Consider a Content Security Policy after testing the real app output; do not add a speculative policy that breaks scripts or styles.
- [ ] Enable suitable branch protection / rules for `main`, if available.

## Domain, metadata, and assets

- [ ] Confirm the intended custom domain and verify its DNS and HTTPS status.
- [ ] Set canonical, Open Graph, and social-card URLs to the verified production domain.
- [ ] Add and verify an Open Graph/social-card image if using `summary_large_image`; do not point metadata at a missing asset.
- [ ] Confirm the favicon appears correctly on the deployed site and optimize the current 1.35 MB PNG if a smaller equivalent can be produced without loss.
- [ ] Verify the resume download target exists and opens the intended current file.
- [ ] Check all social links, project links, email links, and in-page anchors.
- [ ] Confirm whether a “Made with AI” label is present in the actual deployed UI and remove it if found and unwanted.

## Legal and privacy

- [ ] Inspect the full route tree to determine whether privacy and terms pages already exist under other paths.
- [ ] Decide whether privacy and terms pages are appropriate for the site's actual data collection and functionality.
- [ ] If needed, write accurate pages that reflect actual practices; do not claim analytics, cookies, contact forms, or data deletion features unless they exist.
- [ ] Add footer links only after the destinations are live and reviewed.

## Accessibility and responsive behavior

- [ ] Verify keyboard-only navigation and visible focus.
- [ ] Verify heading hierarchy, landmarks, link purpose, and accessible names.
- [ ] Check color contrast across the full palette.
- [ ] Respect reduced-motion preferences and avoid making animation necessary to understand content.
- [ ] Test mobile navigation, narrow screens, zoom, and long text.
- [ ] Test with an automated accessibility checker and manually review its findings.
- [ ] Verify there are no horizontal overflow issues at common viewport sizes.

## Design direction

Use the agreed palette: smoky black, olive drab, bone, and floral white. Aim for an editorial, crafted portfolio with strong typography, purposeful spacing, controlled shadows and occasional intentional tilts.

Avoid purple/blue gradients or glows, pill-shaped buttons, fake reviews or metrics, vague hero copy, excessive scroll animation, cursor effects, and generic AI-style filler.

## Current known observations

- The home page is a large client component with frequent Framer Motion usage.
- Existing styling uses blue/purple/cyan accents and many rounded cards/chips, which conflicts with the requested visual direction.
- Root metadata currently references the Vercel deployment URL and uses `summary_large_image` without a declared social image.
- A GitHub Actions workflow now exists at `.github/workflows/quality.yml` on `security/foundation-audit`; its execution result has not yet been verified.
- The App Router directory currently lists only `globals.css`, `icon.png`, `layout.tsx`, and `page.tsx`; no dedicated legal pages, `robots.ts`, or `sitemap.ts` appeared in that directory listing.
- The repository's `AGENTS.md` requires reading the installed Next.js docs under `node_modules/next/dist/docs/` before writing application code. Follow this before making route or component changes.
- A Vercel preview marked “Ready” confirms deployment status only; it does not prove functional correctness, accessibility, security, or launch readiness.
- First CI run: `npm ci` completed but reported one critical dependency vulnerability; `npm run lint` failed with seven `react/no-unescaped-entities` errors for apostrophes and one unused `SkillGroup` warning. Apostrophe entities have been fixed in the audit branch; rerun lint to confirm. The build and explicit `npm audit` steps were skipped after lint failed.
- Production build, dependency remediation, secret-history scan, custom-domain verification, and full live-site testing remain unverified.

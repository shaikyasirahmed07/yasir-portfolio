# Yasir Ahmed — Portfolio

A Next.js App Router portfolio for Shaik Yasir Ahmed. The existing olive, charcoal and bone visual identity, responsive layout, portrait, animated hero, project cards and theme switch have been retained while the codebase has been reorganised for easier maintenance.

## Tech stack

- Next.js App Router
- React 19 + TypeScript
- CSS custom properties and responsive CSS
- Lucide icons
- Context API for shared theme state

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production checks:

```bash
npm run lint
npm run build
npm start
```

## Project structure

```text
app/
  api/v1/health/route.ts     Versioned API health endpoint
  error.tsx                 Route-level error boundary
  not-found.tsx             404 page
  layout.tsx                Root metadata, styles and providers
  page.tsx                  Server-rendered page entry
  providers.tsx             Client provider composition

components/
  layout/
    SiteHeader.tsx          Navigation and theme control
    SiteShell.tsx            Page composition
  sections/
    HeroSection.tsx
    WorkSection.tsx
    TechSection.tsx
    AboutSection.tsx
    ServicesSection.tsx
    ContactSection.tsx
  ui/
    ScrollEffects.tsx        Scroll animation bootstrap

context/
  ThemeContext.tsx           Shared dark/light theme state

data/
  portfolio.ts               Typed project, service and skill content

hooks/
  useScrollEffects.ts        Reveal observer and scroll progress logic

lib/
  api/http.ts                Shared API responses, errors and handler wrapper
  config/env.ts              Server-only environment configuration

public/
  profile.png                Portfolio portrait
```

## Architecture notes

### UI and business/content separation

- Page content is data-driven from `data/portfolio.ts`.
- Each page section is an independent component under `components/sections`.
- The root page remains a small server component; only interactive elements use client components.
- Shared visual state (dark/light theme) lives in `ThemeContext`.
- Header menu state remains local to `SiteHeader`, since it is only used by that component.
- Scroll observers and progress tracking are isolated in `hooks/useScrollEffects.ts`.

### API conventions

All future API routes should live under `app/api/v1/<resource>/route.ts`.

Use the helpers in `lib/api/http.ts`:
- `successResponse(data, status)` for successful responses.
- `ApiError` for expected errors with an HTTP status and stable error code.
- `withApiHandler(handler)` to catch exceptions and return the common error shape.

Response envelope:

```json
{
  "success": true,
  "data": {},
  "error": null
}
```

Health check:

```text
GET /api/v1/health
```

No database or external service is currently connected, so the health route only reports application availability. Add resource-specific validation, authentication, rate limiting and service modules when a real API integration is introduced; do not place secrets or business logic in React components.

### Environment configuration

Copy `.env.example` to `.env.local`. Server-only variables are read through `lib/config/env.ts`. Do not commit `.env.local` and do not expose private keys using `NEXT_PUBLIC_` variables.

### Error handling

- `app/error.tsx` provides a recoverable UI for rendering errors.
- `app/not-found.tsx` handles unknown routes.
- API exceptions are normalised through `withApiHandler` and `errorResponse`.
- Browser storage access for theme preferences is guarded, so restricted storage does not crash the app.

## Updating portfolio content

Edit `data/portfolio.ts` to update projects, technologies or service descriptions. Update section components only when the layout or presentation needs to change. Replace `public/profile.png` to update the hero portrait while keeping the same filename.

## Maintenance

- Keep components focused and avoid adding client state unless interaction requires it.
- Keep API routes thin; move validation and business rules into `lib/` modules.
- Prefer typed data models and stable keys for mapped lists.
- Respect `prefers-reduced-motion` (already supported by the stylesheet).


## Troubleshooting local setup

If commands report `eslint: command not found`, `tsc: command not found` or `next: command not found`, dependencies have not been installed in this project directory yet. Run:

```bash
npm install
```

Then run `npm run lint`, `npm run typecheck` and `npm run build` again.

If TypeScript reports a JSON parse error in `tsconfig.json`, confirm the file ends with a normal closing brace and newline; do not leave literal `\n` characters after the JSON.

The portrait uses `next/image` with its original CSS class and crop to retain the existing hero appearance while allowing Next.js image optimisation.

# Shaik Yasir Ahmed | Software Engineer Portfolio

Personal portfolio built with Next.js, React, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

Live site: https://yasir-portfolio-pearl.vercel.app/

## About

The site presents my software engineering profile, experience, projects, technical skills, education, and contact links. It is intended to be a concise, accessible way to explore my work and background.

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Run locally

Requirements: Node.js compatible with the installed Next.js version and npm.

```bash
npm ci
npm run dev
```

Open http://localhost:3000 in your browser.

## Quality checks

Run these from the repository root before proposing or merging changes:

```bash
npm audit
npm run lint
npm run build
```

Review the output of each command. Do not treat an audit as complete unless the commands finish successfully and any reported issues have been assessed.

## Project structure

```
src/
  app/
    layout.tsx    # Root layout and site metadata
    page.tsx      # Portfolio page
    globals.css   # Global styles
```

## Contribution and deployment notes

- Make changes on a feature branch and review them in a pull request rather than committing directly to `main`.
- Verify the preview deployment on desktop and mobile before merging.
- Check navigation, external links, keyboard focus, reduced-motion behavior, page metadata, and response headers after changes.
- Keep personal information and credentials out of source control.
- The custom domain, legal pages, security review, accessibility review, and production checks must be verified separately before describing the site as launch-ready.

## License

No open-source license is currently declared. Unless a license is added, the repository should not be assumed to grant permission to reuse its code.

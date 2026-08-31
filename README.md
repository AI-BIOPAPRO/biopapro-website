# Biopapro Website

Global B2B manufacturer site for Biopapro — FSC-certified birchwood cutlery and paper straws, manufactured in Mumbai, exported to 18+ countries. Not e-commerce.

## Stack

- **Next.js 15** (App Router) · TypeScript
- **Tailwind CSS v4** — theme tokens in `styles/globals.css` (`@theme` block, no config file)
- **Motion** (`motion/react`) + **GSAP** for animation · **Lenis** for smooth scroll
- **Sanity** CMS — blog content + `/studio`

## Run locally

```bash
npm install
cp .env.example .env.local   # fill in the values you have
npm run dev                  # http://localhost:3000
```

`npm run build` — production build · `npm start` — serve it.

## Environment

See `.env.example`. Summary:

| Var | Purpose | If unset |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` / `_DATASET` / `_API_VERSION` | Sanity CMS | blog + sitemap fall back gracefully, no posts shown |
| `RESEND_API_KEY` + `CONTACT_FROM_EMAIL` | Contact form delivery (Resend REST API) | forms fall back to opening the visitor's mail client |
| `CONTACT_TO_EMAIL` | Inbox for inquiries | defaults to `export@biopapro.com` |

## Structure

```
app/            App Router routes + metadata
  api/contact/  Export-inquiry endpoint
  studio/       Sanity Studio (deploy separately or protect in production)
components/     Per-route section components + layout + shared
lib/            Data files, Sanity client/queries, config
sanity/         Sanity schemas
styles/         globals.css (design tokens)
docs/           PROJECT_BRAIN, CHANGELOG, TASKS, audits
```

## Deploy

Vercel (Pro — the Hobby tier is not licensed for commercial use). Set the environment
variables above in the project settings. `/studio` should be access-controlled or
split to its own deployment.

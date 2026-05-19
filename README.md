# Dania Khan — Portfolio

Personal portfolio website built with **Next.js 14**, showcasing projects, skills, and experience.

**Live:** [dania-portfolio04.netlify.app](https://dania-portfolio04.netlify.app)

## Tech Stack

- **Framework:** Next.js 14 (App Router, static export)
- **Styling:** CSS Modules, custom design system
- **UI Components:** React Icons
- **Forms:** EmailJS
- **Deployment:** Netlify

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your [EmailJS](https://www.emailjs.com/) credentials:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key |

## Build & Deploy

```bash
npm run build   # generates static output in /out
```

Deploy the `/out` folder to Netlify (or connect the repo for auto-deploy on push).

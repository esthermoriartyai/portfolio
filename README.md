# Esther Moriarty — Portfolio

Personal portfolio website built with Next.js, Tailwind CSS, and TypeScript.

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (included with Node.js)

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for production

```bash
npm run build
npm start
```

## Deploying to Vercel

1. Push the repository to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel will detect Next.js automatically — click **Deploy**

No environment variables are required.

## Project structure

```
src/
  app/
    page.tsx                          # Homepage
    layout.tsx                        # Root layout (Inter font, metadata)
    globals.css                       # Design tokens, global styles
    work/
      recipe-preferences/page.tsx     # Case study
      delivery-pricing/page.tsx       # Case study
      saint-loba/page.tsx             # Case study
  components/
    NavBar.tsx          # Sticky nav, mobile hamburger, scroll-active links
    Footer.tsx          # Copyright + social links
    CaseStudyLayout.tsx # Shared wrapper for case study pages
    AnimateInView.tsx   # Fade + slide-up on scroll (Intersection Observer)
    StatCounter.tsx     # Count-up animation for hero stats
    Eyebrow.tsx         # Section label with leading rule
    Tag.tsx             # Pill tag
    VideoBlock.tsx      # Video player or placeholder
    BackButton.tsx      # ← Back to work link
public/
  images/               # All images (portrait, MacBook mockup, case study screens)
```

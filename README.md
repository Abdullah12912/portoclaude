# Rifqi Abdullah — Living Portfolio

Personal website built with Next.js 15, TypeScript, Tailwind CSS v4, and Framer Motion.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Content:** Markdown / MDX
- **Deployment:** Vercel

## Structure

```
rifqi-portfolio/
├── app/
│   ├── (main)/          # Inner pages
│   │   ├── now/
│   │   ├── building/
│   │   ├── journey/
│   │   ├── notes/
│   │   ├── thinking/
│   │   └── contact/
│   ├── globals.css      # Design tokens + global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── components/
│   ├── layout/          # Nav, Footer
│   ├── sections/        # Hero, Now, Projects, Notes, Pulse
│   └── ui/              # Badge, ProgressBar, etc.
├── content/
│   ├── notes/           # Markdown notes
│   ├── projects/        # Project docs
│   └── thinking/        # Articles
└── lib/
    ├── data.ts          # Static content data
    ├── types.ts         # TypeScript interfaces
    └── utils.ts         # Helper functions
```

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#0A0A0A` | Background |
| `--color-text` | `#F0EDE6` | Primary text |
| `--color-gold` | `#C8A97E` | Accent / CTA |
| `--color-teal` | `#1D9E75` | Active / status |
| `--color-muted` | `#888580` | Secondary text |

## Getting Started

```bash
npm install
npm run dev
```

## Deploy

Push ke GitHub, connect ke Vercel. Done.

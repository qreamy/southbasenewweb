# Southbase Consulting AB — Website

Corporate website for Southbase Consulting AB, a Swedish sales consulting firm based in Helsingborg.

## Tech Stack

- **Framework**: Next.js 14 (App Router) with TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion (scroll-triggered reveals, staggered entrances)
- **Fonts**: Outfit (geometric sans) + Source Serif 4 (accent serif) via Google Fonts
- **Images**: Unsplash (placeholder photography)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout (fonts, nav, footer, metadata)
    page.tsx            # Home page
    about/page.tsx      # About page
    services/page.tsx   # Services page
    work/page.tsx       # Case Studies page
    careers/page.tsx    # Careers page
    contact/page.tsx    # Contact page
    globals.css         # Global styles, CSS variables, Tailwind layers
  components/
    Navigation.tsx      # Responsive header with mobile menu
    Footer.tsx          # Site footer
    Button.tsx          # Reusable button/link component
    SectionLabel.tsx    # Animated section label (uppercase caption)
    AnimatedSection.tsx # Scroll-triggered animation wrapper
    ServiceIcon.tsx     # SVG icons for services
  lib/
    constants.ts        # Company data, services, case studies, team, positions
    animations.ts       # Framer Motion animation variants
```

## Design System

**Colors** (defined as Tailwind tokens and CSS variables):
- `navy-900` — Primary dark (backgrounds, text)
- `cream-50` / `cream-100` — Light backgrounds
- `copper-500` / `copper-600` — Accent color
- `charcoal-*` — Secondary text tones

**Typography** (custom scale):
- `text-display-xl` through `text-display-sm` — Headlines
- `text-heading-lg` through `text-heading-sm` — Section headings
- `text-body-lg` / `text-body-md` / `text-body-sm` — Body copy
- `text-caption` — Labels, tags

## Deployment

Deploy to Vercel, Netlify, or any Node.js hosting:

```bash
npm run build
npm start
```

Or export as static:

```bash
npx next build
```

## License

Proprietary. Southbase Consulting AB.

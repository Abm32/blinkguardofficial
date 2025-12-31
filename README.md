# BlinkGuard Landing Page

A modern, high-converting landing page for BlinkGuard - a Solana security tool that protects wallets from drainers.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Font:** Inter (Google Fonts)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
blinkguardofficial/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main landing page
│   └── globals.css     # Global styles and Tailwind
├── components/
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section with CTA
│   ├── HowItWorks.tsx  # 3-step process section
│   ├── Features.tsx    # Feature cards
│   ├── WhyThisMatters.tsx # Grant pitch section
│   ├── Footer.tsx      # Footer with social links
│   └── Section.tsx     # Reusable section wrapper
└── public/
    └── icon.png        # BlinkGuard logo
```

## Design Features

- **Dark Mode Only:** Deep black background (#050505) with Solana gradient blobs
- **Glassmorphism:** Cards with backdrop blur and subtle borders
- **Gradient Buttons:** Solana purple-to-green gradients
- **Smooth Animations:** Framer Motion fade-ins on scroll
- **Fully Responsive:** Mobile-first design

## Customization

- Update social links in `components/Footer.tsx` and `components/Navbar.tsx`
- Modify grant text in `components/WhyThisMatters.tsx`
- Adjust colors in `tailwind.config.ts`
- Update metadata in `app/layout.tsx`

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

This project is optimized for Vercel deployment. See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for detailed instructions.

**Quick Deploy:**
1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Deploy! (Vercel auto-detects Next.js settings)

## Vercel Optimizations

- ✅ Complete SEO metadata (Open Graph, Twitter Cards)
- ✅ Auto-generated sitemap.xml and robots.txt
- ✅ Optimized font loading
- ✅ Static page generation
- ✅ Error boundaries and loading states
- ✅ Hydration-safe animations


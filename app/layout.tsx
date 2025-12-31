import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#050505',
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blinkguard.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'BlinkGuard - Don\'t Blink. Verify.',
    template: '%s | BlinkGuard',
  },
  description: 'The open-source browser extension that simulates Solana Actions & Blinks on X/Twitter before you sign. Protect your wallet from drainers.',
  keywords: ['Solana', 'Security', 'Wallet Protection', 'Browser Extension', 'Blink', 'Solana Actions', 'Web3 Security'],
  authors: [{ name: 'BlinkGuard Team' }],
  creator: 'BlinkGuard Team',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'BlinkGuard - Don\'t Blink. Verify.',
    description: 'The open-source browser extension that simulates Solana Actions & Blinks on X/Twitter before you sign. Protect your wallet from drainers.',
    siteName: 'BlinkGuard',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'BlinkGuard Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BlinkGuard - Don\'t Blink. Verify.',
    description: 'The open-source browser extension that simulates Solana Actions & Blinks on X/Twitter before you sign. Protect your wallet from drainers.',
    images: ['/icon.png'],
    creator: '@blinkguard',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  )
}


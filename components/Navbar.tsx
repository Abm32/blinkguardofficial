'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image
                src="/icon.png"
                alt="BlinkGuard Logo"
                width={32}
                height={32}
                className="object-contain transition-transform group-hover:scale-110"
                priority
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
              BlinkGuard
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="#features" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link 
              href="https://github.com/Abm32/BlinkGuard" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              GitHub
            </Link>
            <Link 
              href="#docs" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Docs
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="#install"
            className="px-4 py-2 bg-gradient-solana text-black font-bold rounded-lg hover:opacity-90 transition-opacity"
          >
            Install Extension
          </Link>
        </div>
      </div>
    </nav>
  )
}


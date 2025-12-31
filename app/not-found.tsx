import Link from 'next/link'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] px-4">
      <div className="glassmorphism rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-300 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-solana text-black font-bold rounded-lg hover:opacity-90 transition-opacity"
        >
          <Home className="w-5 h-5" />
          <span>Go home</span>
        </Link>
      </div>
    </div>
  )
}


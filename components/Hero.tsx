'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Download, Github } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Don't Blink.{' '}
            <span className="bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
              Verify.
            </span>
          </h1>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="gradient-blob w-96 h-96 bg-solana-purple top-0 left-1/4" />
        <div className="gradient-blob w-96 h-96 bg-solana-green bottom-0 right-1/4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
        >
          Don't Blink.{' '}
          <span className="bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
            Verify.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          The open-source browser extension that simulates Solana Actions & Blinks on X/Twitter before you sign. Protect your wallet from drainers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="#download"
            className="px-8 py-4 bg-gradient-solana text-black font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center space-x-2"
          >
            <Download className="w-5 h-5" />
            <span>Download POC</span>
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-colors flex items-center space-x-2"
          >
            <Github className="w-5 h-5" />
            <span>View on GitHub</span>
          </Link>
        </motion.div>

        {/* Mock Browser Window */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="glassmorphism rounded-lg p-1">
            <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
              {/* Browser Chrome */}
              <div className="flex items-center space-x-2 p-3 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <div className="flex-1 mx-4 bg-white/5 rounded px-3 py-1 text-sm text-gray-400">
                  twitter.com/...
                </div>
              </div>
              
              {/* Tweet Content */}
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-solana" />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-bold">@solana_user</span>
                      <span className="text-gray-400">· 2h</span>
                    </div>
                    <p className="mb-4">Check out this amazing Solana Action! 🚀</p>
                    <div className="relative">
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-solana" />
                          <span className="font-semibold">Solana Action</span>
                        </div>
                        <p className="text-sm text-gray-300">Click to interact with this Solana transaction</p>
                      </div>
                      
                      {/* BlinkGuard Overlay */}
                      <div className="absolute inset-0 bg-solana-green/20 border-2 border-solana-green rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <div className="bg-solana-green/90 px-4 py-2 rounded-lg flex items-center space-x-2">
                          <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-black font-bold">BlinkGuard: Verified Safe</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}


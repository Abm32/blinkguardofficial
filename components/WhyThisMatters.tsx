'use client'

import { motion } from 'framer-motion'
import Section from './Section'

export default function WhyThisMatters() {
  return (
    <Section id="why-this-matters">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glassmorphism rounded-2xl p-12 text-center max-w-4xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Why This Matters
        </h2>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Built as a Public Good for the Solana Ecosystem.
        </p>
        <p className="text-2xl font-bold bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
          Applying for Solana Foundation Grants 2026
        </p>
      </motion.div>
    </Section>
  )
}


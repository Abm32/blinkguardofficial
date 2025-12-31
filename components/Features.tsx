'use client'

import { motion } from 'framer-motion'
import { Database, Lock, Zap } from 'lucide-react'
import Section from './Section'

const features = [
  {
    icon: Database,
    title: 'Open Source Registry',
    description: 'Community-maintained database of malicious links.',
  },
  {
    icon: Lock,
    title: 'Privacy First',
    description: 'Local DOM analysis, no private keys ever touched.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Simulations complete in <200ms using Helius/QuickNode.',
  },
]

export default function Features() {
  return (
    <Section id="features">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Features
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Built with security and performance in mind
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glassmorphism rounded-lg p-8 hover:bg-white/10 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-solana mb-6">
                <Icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}


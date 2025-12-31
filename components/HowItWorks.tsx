'use client'

import { motion } from 'framer-motion'
import { Search, Zap, Shield } from 'lucide-react'
import Section from './Section'

const steps = [
  {
    icon: Search,
    title: 'Detect',
    description: 'We identify Solana Action URLs in your timeline.',
  },
  {
    icon: Zap,
    title: 'Simulate',
    description: 'We run a background simulation using Solana RPC.',
  },
  {
    icon: Shield,
    title: 'Protect',
    description: 'You see a Green Shield or Red Warning instantly.',
  },
]

export default function HowItWorks() {
  return (
    <Section id="how-it-works">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          How It Works
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Three simple steps to keep your wallet safe
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glassmorphism rounded-lg p-8 text-center hover:bg-white/10 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-solana mb-6">
                <Icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}


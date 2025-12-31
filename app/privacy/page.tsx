import Link from 'next/link'
import { ArrowLeft, Mail } from 'lucide-react'
import Section from '@/components/Section'

export const metadata = {
  title: 'Privacy Policy',
  description: 'BlinkGuard Privacy Policy - How we handle your data',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#050505] pt-16">
      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-gray-300 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          {/* Privacy Policy Content */}
          <div className="glassmorphism rounded-lg p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
              Privacy Policy for BlinkGuard
            </h1>
            
            <p className="text-gray-400 mb-8">
              <strong>Last Updated:</strong> January 1, 2026
            </p>

            <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
              <p>
                BlinkGuard ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we handle your data when you use our browser extension.
              </p>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">1. Data Collection</h2>
                <p className="mb-4">
                  We do not collect, store, or transmit any personally identifiable information (PII).
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Website Content:</strong> The extension temporarily analyzes the text and links on specific social media sites (X.com, Twitter.com) solely to identify "Solana Action" URLs. This data is processed locally within your browser and is not sent to our servers, except for the specific Action URL being simulated.
                  </li>
                  <li>
                    <strong>Transaction Simulation:</strong> When a Blink is detected, the URL is sent to our simulation API to check for safety. We do not store the user's wallet address or private keys.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">2. Data Usage</h2>
                <p>
                  The data we process is used exclusively for the single purpose of:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Simulating Solana transactions to detect malicious intent.</li>
                  <li>Displaying a safety status overlay to the user.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">3. Third-Party Services</h2>
                <p>
                  We use reputable RPC providers (e.g., Helius, QuickNode) to simulate transactions. These providers receive the transaction instruction data but do not receive your personal browsing history.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 mt-8">4. Contact</h2>
                <p>
                  For questions, please contact:{' '}
                  <a
                    href="mailto:abhimanyurbsa@gmail.com"
                    className="text-solana-green hover:text-solana-purple transition-colors inline-flex items-center space-x-1"
                  >
                    <Mail className="w-4 h-4" />
                    <span>abhimanyurbsa@gmail.com</span>
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}


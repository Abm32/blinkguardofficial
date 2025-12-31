import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import WhyThisMatters from '@/components/WhyThisMatters'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <WhyThisMatters />
      <Footer />
    </main>
  )
}


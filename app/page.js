import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import { Problems, Benefits, Transform } from '@/components/Sections'
import RifdaSection from '@/components/RifdaSection'
import Programs from '@/components/Programs'
import Gallery from '@/components/Gallery'
import { Testimonials, FAQ } from '@/components/TestimonialsFAQ'
import { TrialCTA, Footer } from '@/components/TrialCTAFooter'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Benefits />
        <RifdaSection />
        <Transform />
        <Programs />
        <Gallery />
        <Testimonials />
        <FAQ />
        <TrialCTA />
      </main>
      <Footer />
    </>
  )
}

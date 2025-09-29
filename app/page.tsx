import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemIdentification } from "@/components/problem-identification"
import { ObjectionHandling } from "@/components/objection-handling"
import { SocialProof } from "@/components/social-proof"
import { Services } from "@/components/services"
import { AboutTherapists } from "@/components/about-therapists"
import { VisionSection } from "@/components/vision-section"
import { PromiseSection } from "@/components/promise-section"
import { FinalCTA } from "@/components/final-cta"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemIdentification />
      <ObjectionHandling />
      <SocialProof />
      <AboutTherapists />
      <Services />
      <VisionSection />
      <PromiseSection />
      <FinalCTA />
      <ContactForm />
      <Footer />
    </main>
  )
}

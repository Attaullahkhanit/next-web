import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-purple-100 via-purple-50 to-purple-100 min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

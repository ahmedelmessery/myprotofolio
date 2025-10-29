import LogoShowcase from './components/LogoShowcase'
import Navbar from './components/Navbar'
import Contact from './sections/Contact'
import Experience from './sections/ExperienceSection'
import FeatureCards from './sections/FeatureCards'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import ShowCaseSection from './sections/ShowCaseSection'
import Testimonials from './sections/Testimonials'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowCaseSection />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App

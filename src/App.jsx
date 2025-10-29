import LogoShowcase from './components/LogoShowcase'
import Navbar from './components/Navbar'
import Contact from './sections/Contact'
import Experience from './sections/ExperienceSection'
import FeatureCards from './sections/FeatureCards'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import ShowCaseSection from './sections/ShowCaseSection'
import Testimonials from './sections/Testimonials'
import { Helmet } from 'react-helmet-async'

const App = () => {
  return (
    <>
      <Helmet>
        <title>Ahmed El-Messery | Frontend Developer</title>
        <meta
          name='description'
          content='Portfolio for MERN Frontend Developer Ahmed El-Messery'
        />
      </Helmet>
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

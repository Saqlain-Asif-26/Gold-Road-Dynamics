import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CardSection from './components/CardSection'
import SolutionSection from './components/SolutionSection'
import PartnerSection from './components/PartnerSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className='bg-[#FFFCF2]'>
      <Navbar />
      <HeroSection />
      <CardSection />
      <SolutionSection />
      <PartnerSection />
      <Footer />
    </div>
  )
}

export default App
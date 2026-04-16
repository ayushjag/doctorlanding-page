import React from 'react'
import Navbar from './components/Navbar/Navbar.view'
import Hero from './components/Hero/Hero.view'
import Expertise from './components/Expertise'
import Specialists from './components/Specialists'
import Atmosphere from './components/Atmosphere'
import ContactAndFooter from './components/ContactAndFooter'
import WhyChooseUs from './components/WhyChooseUs'

const page = () => {
  return (
    <div>
       <main className="font-sans bg-gray-50">
      <Navbar />
      <Hero />
            <Expertise />
            <WhyChooseUs/>
            <Specialists/>
            <Atmosphere/>
            <ContactAndFooter/>

    </main>
    </div>
  )
}

export default page
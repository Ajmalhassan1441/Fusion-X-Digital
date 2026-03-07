import React from 'react'
import Hero from './component/home/Hero'
import Services from './component/home/Service'
import Portfolio from './component/home/Portfolio'
import Testimonials from './component/home/Testimonials'
import CTA from './component/home/Cta'

const page = () => {
  return (
  // home ka page 
  <>
  <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <CTA />
   </>
  )
}

export default page

import React from 'react'
import ServicesCTA from '../component/service/ServicesCTA'
import PricingSection from '../component/service/PricingSection'
import ServiceProcess from '../component/service/ServiceProcess'
import ServicesGrid from '../component/service/ServicesGrid'
import ServicesHero from '../component/service/ServicesHero'

const page = () => {
  return (
 <>
      <ServicesHero />
      <ServicesGrid />
      <ServiceProcess />
      <PricingSection />
      <ServicesCTA />
 </>
  )
}
export default page

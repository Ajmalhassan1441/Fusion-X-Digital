import React from 'react'
import PortfolioCTA from '../component/portfolio/PortfolioCTA'
import CaseStudy from '../component/portfolio/CaseStudy'
import PortfolioGrid from '../component/portfolio/PortfolioGrid'
import PortfolioHero from '../component/portfolio/PortfolioHero'

const Page = () => {
  return (
    // portfolio ka page 
   <>
    <PortfolioHero />
      <PortfolioGrid />
      <CaseStudy />
      <PortfolioCTA />
   </>
  )
}

export default Page
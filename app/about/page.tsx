import React from 'react'
import AboutCTA from '../component/about/AboutCTA'
import Values from '../component/about/Values'
import Team from '../component/about/Team'
import CompanyStory from '../component/about/CompanyStory'
import AboutHero from '../component/about/AboutHero'

const Page = () => {
  return (
    <>
    <AboutHero />
      <CompanyStory />
      <Team />      
      <Values />
      <AboutCTA />
    </>
  )
}

export default Page

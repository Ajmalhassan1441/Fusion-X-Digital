import React from 'react'
import ContactCTA from '../component/contact/ContactCTA'
import ContactForm from '../component/contact/ContactForm'
import ContactInfo from '../component/contact/ContactInfo'
import ContactHero from '../component/contact/ContactHero'
import Map from '../component/contact/Map'

const Page = () => {
  return (
    // contact ka page 
    <>
    <ContactHero />
      <ContactInfo />
      <ContactForm />
      <Map />
      <ContactCTA />
    </>
  )
}

export default Page

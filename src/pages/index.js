import React from 'react'
import LeadSection from '../components/LeadSection';
import Main from '../components/elements/Main';
import ServicesSection from '../components/ServicesSection';
import SpecialtiesSection from '../components/SpecialtiesSection';
import ContactSection from '../components/ContactSection';

const IndexPage = () => (
  <Main>
    <LeadSection />
    <ServicesSection />
    <SpecialtiesSection />
    <ContactSection />
  </Main>
)

export default IndexPage

import React from 'react'
import Link from 'gatsby-link'
import LeadSection from '../components/LeadSection';
import Main from '../components/elements/Main';
import ServicesSection from '../components/ServicesSection';
import SpecialtiesSection from '../components/SpecialtiesSection';

const IndexPage = () => (
  <Main>
    <LeadSection />
    <ServicesSection />
    <SpecialtiesSection />
    <Link to="/page-2/">Go to page 2</Link>
  </Main>
)

export default IndexPage

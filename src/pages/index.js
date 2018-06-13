import React from 'react'
import Link from 'gatsby-link'
import LeadSection from '../components/LeadSection';
import Main from '../components/elements/Main';

const IndexPage = () => (
  <Main>
    <LeadSection />
    <Link to="/page-2/">Go to page 2</Link>
  </Main>
)

export default IndexPage

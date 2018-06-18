import React from 'react'
import LeadSection from '../components/LeadSection';
import ServicesSection from '../components/ServicesSection';
import SpecialtiesSection from '../components/SpecialtiesSection';
import ContactSection from '../components/ContactSection';
import HomeLayout from '../layouts/HomeLayout';

const IndexPage = () => (
  <HomeLayout title="Clio + Calliope App Development">
    <LeadSection />
    <ServicesSection />
    <SpecialtiesSection />
    <ContactSection />
  </HomeLayout>
)

export default IndexPage

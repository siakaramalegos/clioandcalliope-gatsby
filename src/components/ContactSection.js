import React from 'react'
import { Section } from './elements/Section';
import Lead from './elements/Lead';
import ButtonLink from './elements/Button';

export default () => (
  <Section maxWidth="1220px" style={{ marginBottom: '64px' }} >
    <h1>Let's get started</h1>
    <Lead center style={{ marginBottom: '32px' }}>Every project is unique. Whatever your goals, we work closely with you to bring your project to life.</Lead>
    <ButtonLink to="contact.html">Work with us</ButtonLink>
  </Section>
)

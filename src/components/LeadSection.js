import React from 'react'
import Link from 'gatsby-link'
import ButtonLink from './elements/Button';
import Lead from './elements/Lead';
import { Section } from './elements/Section';

export default () => (
  <Section className="center">
    <Lead>
      Our expert team creates clean, beautiful, and easy-to-use web and mobile applications.
    </Lead>
    <Lead style={{ marginBottom: '32px' }}>
      Let's create something together.
    </Lead>
    <ButtonLink to="contact.html">Work with us</ButtonLink>
  </Section>
)

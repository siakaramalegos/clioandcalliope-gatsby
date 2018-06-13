import React from 'react'
import Link from 'gatsby-link'
import ButtonLink from './elements/Button';
import Lead from './elements/Lead';

export default () => (
  <section id="lead-section" className="inset-960 center">
    <Lead>
      Our expert team creates clean, beautiful, and easy-to-use web and mobile applications.
    </Lead>
    <Lead>
      Let's create something together.
    </Lead>
    <div className="vertical-space-lg"></div>
    <ButtonLink to="contact.html">Work with us</ButtonLink>
    <Link to="contact.html" className="button uppercase">Work with us</Link>
  </section>
)

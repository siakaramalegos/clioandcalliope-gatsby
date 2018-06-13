import React from 'react'
import styled from 'styled-components'
import { Section } from "./elements/Section";
import webImage from '../images/web.jpg'
import designImage from '../images/design.jpg'
import consultingImage from '../images/consulting.jpg'
import mobileImage from '../images/mobile.jpg'

const Service = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;

  @media (min-width: 750px) {
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    text-align: ${props => props.reverse ? 'right' : 'left'};
    justify-content: space-between;
  }
`

const ServiceDescription = styled.div`
  font-size: 1.2em;
  max-width: 500px;
`

const Spacer = styled.div`
  width: 32px;
  @media (min-width: 750px) {
    width: 64;
  }
  @media (min-width: 960px) {
    width: 128px;
  }
  @media (min-width: 1080px) {
    width: 128px;
  }
`

const ServiceImage = styled.img`
  height: auto;
  max-width: 500px;
  padding: 32px 0 0 0;
  width: 100%;

  @media (min-width: 750px) {
    box-sizing: border-box;
    height: auto;
    width: 50%;
  }
`

export default () => (
  <Section maxWidth="1220px">
    <h1>What we can do for you</h1>

    <Service reverse>
      <ServiceImage src={webImage} alt="Desk and computer with website on screen" />
      <Spacer />
      <ServiceDescription className="right">
        <h2>Web</h2>
        <p>We create functional, elegant websites and web apps that increase customer engagement.</p>
        <p>Our responsive designs look great on any platform, from desktop to mobile and tablet.</p>
      </ServiceDescription>
    </Service>

    <Service>
      <ServiceImage src={mobileImage} alt="Mobile phone with paper mockups" />
      <Spacer />
      <ServiceDescription className="service-description">
        <h2>Mobile</h2>
        <p>Our intuitive and beautiful mobile applications work across both iOS and Android platforms. </p>
        <p>We can help you take your mobile app idea from concept to reality.</p>
      </ServiceDescription>
    </Service>

    <Service reverse>
      <ServiceImage src={designImage} alt="Wooden desk top with t-square, markers, and leather notebook" />
      <Spacer />
      <ServiceDescription className="service-description right">
        <h2>Design + UX</h2>
        <p>We help connect you with your audience and get results. From branding to design systems, user research to interfaces,
          we've got you covered.</p>
        <p>We create consistent, accessible, and stunning user experiences.</p>
      </ServiceDescription>
    </Service>

    <Service>
      <ServiceImage src={consultingImage} alt="Four people fist-bumping over a desk" />
      <Spacer />
      <ServiceDescription className="service-description">
        <h2>Consulting</h2>
        <p>Looking to augment your team with additional design and development expertise? </p>
        <p>Whether you're expanding or training your team, we'll work with you to meet your goals.
        </p>
      </ServiceDescription>
    </Service>
  </Section>
)
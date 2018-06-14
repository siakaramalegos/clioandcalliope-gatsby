import React from 'react'
import { SectionGradient } from './elements/Section';
import Lead from './elements/Lead';
import theme from './theme';
import styled from 'styled-components';
import reactIcon from '../static/react.svg'
import railsIcon from '../static/rails.svg'
import nodeIcon from '../static/node.svg'

const SpecialtiesList = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;

  &:after {
    content: "";
    flex: auto;
  }
`

const Specialty = styled.li`
  box-sizing: border-box;
  margin-top: 8px;
  line-height: 32px;
  text-align: center;
  width: 50%;
  text-align: center;

  &:after {
    content: "";
    flex: auto;
  }

  @media (min-width: 750px) {
    width: 33.33333%;
    font-size: 0.9em;
    text-align: center;
  }

  @media (min-width: 1080px) {
    width: 25%;
    text-align: center;
  }
`

const Inset = styled.div`
  max-width: 1220px;
`

const TechnologiesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  list-style: none;
  margin: 32px -16px 64px;
  padding: 0;
`

const Technology = styled.li`
  align-items: center;
  display: flex;
  flex-direction: column;
  line-height: 42px;
  margin: 16px;
  width: 102px;
  @media (min-width: 750px) {
    width: 140px;
  }
  i.fa {
    font-size: 50px;
  }
`

const TechIcon = styled.img`
  height: 50px;
  width: 50px;
`

const Title = styled.h1`
  color: ${theme.colors.white};
  margin-top: 32px;
  @media (min-width: 750px) {
    margin-top: 64px;
  }
`

export default () => (
  <SectionGradient maxWidth="100vw">
    <Inset>
      <Lead light center>We constantly push our skills to stay current with emerging technologies needed for modern applications.</Lead>

      <Title>Specialties</Title>

      <SpecialtiesList>
        <Specialty>Branding</Specialty>
        <Specialty>Product Design</Specialty>
        <Specialty>Print Design</Specialty>
        <Specialty>Design Systems</Specialty>
        <Specialty>Mobile Design</Specialty>
        <Specialty>User Testing</Specialty>
        <Specialty>User Experience</Specialty>
        <Specialty>Accessibity</Specialty>
        <Specialty>Rapid Prototyping</Specialty>
        <Specialty>Agile Development</Specialty>
      </SpecialtiesList>

      <TechnologiesList>
        <Technology>
          <TechIcon src={reactIcon} alt="React JS logo" />
          <span>React JS</span>
        </Technology>
        <Technology>
          <TechIcon src={reactIcon} alt="React JS logo" />
          <span>React Native</span>
        </Technology>
        <Technology>
          <i className="fa fa-apple" aria-hidden="true"></i>
          <span>iOS</span>
        </Technology>
        <Technology>
          <i className="fa fa-android" aria-hidden="true"></i>
          <span>Android</span>
        </Technology>
        <Technology>
          <TechIcon src={nodeIcon} alt="Node logo" />
          <span>Node.js</span>
        </Technology>
        <Technology>
          <TechIcon src={railsIcon} alt="Ruby on Rails logo" />
          <span>Ruby on Rails</span>
        </Technology>
      </TechnologiesList>
    </Inset>
  </SectionGradient>
)

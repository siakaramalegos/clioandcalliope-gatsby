import React from 'react'
import styled from 'styled-components';
import theme from './theme';
import logoWhite from '../images/logo_white.svg'
import heroBg from '../images/hero_bg.jpg'
import HeroNav from './HeroNav';

const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: ${theme.colors.aqua}; /* fallback for old browsers */
  background-image: url(${heroBg});
  background-size: cover;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 90%, 0% 100%);
  height: 40vh;
  min-height: 450px;

  @media (min-width: 750px) {
    min-height: 550px;
  }

  @media (min-width: 960px) {
    height: 55vh;
  }

  @media (min-width: 1080px) {
    height: 65vh;
    min-height: 650px;
  }
`

const Subtitle = styled.h2`
  color: ${theme.colors.black};
  font-family: 'Muli', sans-serif;
  font-size: 1.7em;
  padding: 0 8px;
  margin: 0;
  max-width: 400px;

  @media (min-width: 750px) {
    font-size: calc(16px + 2vw);
    padding: 0 128px;
    max-width: 550px;
  }
  @media (min-width: 960px) {
    max-width: 550px;
  }
  @media (min-width: 1080px) {
    max-width: 720px;
  }
`

const Logo = styled.img`
  height: auto;
  width: 80%;
  max-width: 960px;
  margin: 36px 0;
`

export default () => (
  <Header>
    <HeroNav />
    <Logo src={logoWhite} alt="Clio + Calliope logo" />
    <Subtitle>
      We create beautiful websites and mobile apps.
    </Subtitle>
  </Header>
)

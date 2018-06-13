// import React from 'react'
import styled from 'styled-components'
import theme from '../theme';

export const Section = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: ${props => props.maxWidth ? props.maxWidth : '960px'};
  padding: 32px 16px;
  /* max-width: 100%; */
  @media (min-width: 750px) {
    padding: 64px 32px;
  }
`

export const SectionGradient = Section.extend`
  background-color: ${theme.colors.aqua}; /* fallback for old browsers */
  background-image: linear-gradient(to right top, #0686ad 0%, #2bbbae 100%);
  box-sizing: border-box;
  clip-path: polygon(0% 0%, 50% 5%, 100% 0%, 100% 92%, 50% 98%, 0% 92%);
  color: ${theme.colors.white};
  padding-top: 80px;
  width: 100vw;
  @media (min-width: 750px) {
    padding-top: 96px;
  }
  @media (min-width: 1080px) {
    clip-path: polygon(0% 0%, 50% 8%, 100% 0%, 100% 91%, 50% 100%, 0% 91%);
    padding-top: 160px;
  }
`

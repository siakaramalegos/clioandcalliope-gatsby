// import React from 'react'
import styled from 'styled-components'

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

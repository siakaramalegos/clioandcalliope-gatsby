// import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

const Lead = styled.p`
  color: ${props => props.light ? theme.colors.white : theme.colors.teal};
  font-size: 1.5em;
  font-weight: 400;
  line-height: 1.5;
  margin: 16px 0 0;
  text-align: ${props => props.center ? 'center' : 'text-left'};

  @media (min-width: 750px) {
    font-size: 1.8em;
    margin: 32px 0 0;
  }
`

export default Lead

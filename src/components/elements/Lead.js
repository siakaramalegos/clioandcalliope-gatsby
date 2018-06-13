import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import theme from '../theme'

const Lead = styled.p`
  color: ${theme.colors.teal};
    font-size: 1.5em;
    font-weight: 400;
    line-height: 1.5;
    margin: 16px 8px;

    @media (min-width: 750px) {
      font-size: 1.8em;
      margin: 0 32px 32px 32px;
    }

    @media (min-width: 960px) {
      margin: 0 64px 8px 64px;
    }

    @media (min-width: 1080px) {
      margin: 32px 8px 8px 8px;
    }
`

export default Lead

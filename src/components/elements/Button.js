import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import theme from '../theme'

const ButtonLink = styled(Link)`
  background-color: ${theme.colors.orange};
  border-radius: 2px;
  box-shadow: 0 3px 20px 3px rgba(0,0,0,0.1);
  display: inline-block;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.accent};
  font-size: 24px;
  font-weight: 500;
  padding: 16px 32px;
  text-decoration: none;

  &:hover {
    background-color: ${theme.colors.lightOrange};
    transition: background-color 500ms ease;
  }
`
export default ButtonLink

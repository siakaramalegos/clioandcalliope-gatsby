import React from 'react'
import styled from 'styled-components'
import theme from './theme';

const Footer = styled.footer`
  align-items: center;
  background-color: ${theme.colors.teal};
  clip-path: polygon(0% 30%, 50% 0%, 100% 30%, 100% 100%, 0% 100%);
  color: ${theme.colors.lightGrey};
  display: flex;
  justify-content: space-between;
  margin-top: -50px;
  padding: 64px 32px 16px;
`

const Copyright = styled.p`
  font-weight: 300;
  font-size: 0.8em;
`

const SocialMediaLink = styled.a`
  color: ${theme.colors.lightGrey};
  font-size: 1.6em;
  margin-left: 16px;
  text-decoration: none;

  &:hover {
    color: ${theme.colors.darkenedLightGrey};
  }
`

export default () => (
  <Footer>
    <Copyright>
      &copy; 2015-{new Date().getFullYear()} Clio + Calliope LLC
    </Copyright>
    <div className="social-media right">
      <p>
        <SocialMediaLink
          href="https://twitter.com/clioandcalliope"
          target="_blank" rel="noopener noreferrer">
          <span className="sr-only">Twitter</span>
          <i className="fa fa-twitter-square" aria-hidden="true"></i>
        </SocialMediaLink>
        <SocialMediaLink
          href="https://www.facebook.com/clioandcalliope/"
          target="_blank" rel="noopener noreferrer">
          <span className="sr-only">Facebook</span>
          <i className="fa fa-facebook-square" aria-hidden="true"></i>
        </SocialMediaLink>
        <SocialMediaLink
          href="https://medium.com/clio-calliope"
          target="_blank" rel="noopener noreferrer">
          <span className="sr-only">Medium</span>
          <i className="fa fa-medium" aria-hidden="true"></i>
        </SocialMediaLink>
      </p>
    </div>
  </Footer>
)

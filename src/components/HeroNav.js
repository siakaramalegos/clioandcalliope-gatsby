import React, { Component } from 'react'
import styled from 'styled-components';
import theme from './theme';

const Nav = styled.nav`
  align-items: center;
  display: flex;
  height: 96px;
  justify-content: space-between;
  max-width: 1220px;
  width: 100%;
  ul {
    list-style: none;
    display: none;
    &.is-open{ display: block; }
  }
  li {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  @media (min-width: 750px) {
    justify-content: flex-end;
    ul {display: block}
    li {
      display: inline-block;
      flex-direction: row;
      width: auto;
    }
    .mobile-only {
      display: none;
    }
  }
`

const NavLink = styled.a`
  color: ${theme.colors.white};
  font-size: 14px;
  padding: 16px;
  text-decoration: none;
  &:active {color: ${theme.colors.lighterGrey};}
  &:hover {color: ${theme.colors.lightMustard};}
  i.fa {font-size: 20px;}
  @media (min-width: 750px) {
    font-size: 16px;
  }
  @media (min-width: 960px) {
    font-size: 22px;
  }
`

const Hamburger = ({ isOpen, onClick }) => {
  if (isOpen) { return null }

  return (
    <NavLink onClick={onClick} href="" className="mobile-only">
      <span className="sr-only">Menu</span>
      <i className="fa fa-bars" aria-hidden="true"></i>
    </NavLink>
  )
}

export default class HeroNav extends Component {
  constructor() {
    super()
    this.state = { open: false }
  }

  onClickOpen = (e) => {
    e.preventDefault()
    this.setState({ open: true })
  }

  onClickClose = (e) => {
    e.preventDefault()
    this.setState({ open: false })
  }

  render() {
    return (
      <Nav role="navigation">
        <Hamburger isOpen={this.state.open} onClick={this.onClickOpen} />

        <ul className={this.state.open ? 'is-open' : ''}>
          <li className="mobile-only">
            <NavLink
              onClick={this.onClickClose}
              href="">
              <span className="sr-only">Close Menu</span>
              <span aria-hidden="true">x</span>
            </NavLink>
          </li>
          <li>
            <NavLink href="#services" data-scroll className="same-page-link">services</NavLink>
          </li>
          <li><NavLink href="about.html">about</NavLink></li>
          <li><NavLink href="contact.html">contact</NavLink></li>
        </ul>
      </Nav>
    )
  }
}

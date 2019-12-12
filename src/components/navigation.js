import React from "react"
import styled from "styled-components"
import { Link } from 'react-scroll'

const NavList = styled.ul`
  padding-top: 20px;
  padding-bottom: 15px;
  display: flex;
  justify-content: center;
  list-style-type: none;
  border-bottom: 1px solid #37f1ee;

  a {
    font-family: Montserrat, sans-serif;
    padding: 10px;
    cursor: pointer;
  }
`

// ref: https://stackoverflow.com/questions/54715462/how-to-scroll-to-a-specific-targeted-component-when-clicking-on-navbar-link

const Navigation = () => (
  <nav>
    <NavList>
      <Link
        to="projects"
        spy={true}
        smooth={true}
        duration={500}
      >
        Projects
      </Link>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
      >
        Contact
      </Link>
    </NavList>
  </nav>
)

export default Navigation;
import React from "react"
import styled from "styled-components"

const NavList = styled.ul`
  padding-top: 20px;
  padding-bottom: 15px;
  display: flex;
  justify-content: center;
  list-style-type: none;
  border-bottom: 1px solid #37f1ee;
`
const NavLink = styled.li`
  font-family: Montserrat, sans-serif;
  padding: 10px;
`
const Navigation = () => (
  <nav>
    <NavList>
      <NavLink>Home</NavLink>
      <NavLink>Projects</NavLink>
      <NavLink>Blog</NavLink>
      <NavLink>Contact</NavLink>
    </NavList>
  </nav>
)

export default Navigation;
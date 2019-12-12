import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  text-align: center;
  border-top: 1px solid #37f1ee;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`

const Footer = () => (
  <FooterWrapper>
    <p>Katherine Picazo &copy; 2019</p>
    <p>Powered by Gatsby, Styled Components and Netlify</p>
  </FooterWrapper>
) 

export default Footer
import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  padding: 10px;
  text-align: center;
  border-top: 1px solid #37f1ee;
`

const Footer = () => (
  <FooterWrapper>
    <p>Powered by Gatsby, Styled Components and Netlify</p>
  </FooterWrapper>
) 

export default Footer
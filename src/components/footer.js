import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  text-align: center;
  border-top: 1px solid #37f1ee;

  background-color: rgba(0, 0, 0, 0.8);
  color: white;

  @media (max-width: 500px) {
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
import React from "react"
import styled from "styled-components"

const HeroWrapper = styled.section`
  padding-top: 300px;
  margin-bottom: 200px;

  @media (max-width: 425px) {
    padding-top: 100px;
    margin-bottom: 100px;
  }
`

const HeroHeading = styled.h1`
  font-size: 3em;
  font-weight: 700;
`

const Pink = styled.span`
  text-shadow: 5px 5px #e424f9;
`

const Description = styled.p`
  max-width: 600px;
`

const Hero = () => (
  <HeroWrapper>
    <HeroHeading>Hi, I'm <Pink>Katherine Picazo.</Pink></HeroHeading>
    <Description>
      I'm a junior web developer currently living in Calgary. I like learning new things. 
      Sometimes I'm crazy and try to use a new framework 2 days before a project is due.
    </Description>
  </HeroWrapper>
)

export default Hero;
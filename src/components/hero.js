import React from "react"
import styled from "styled-components"

const HeroWrapper = styled.div`
  padding-top: 200px;
  padding-left: 200px;
`

const HeroHeading = styled.h1`
  font-size: 3em;
  font-weight: 700;
`

const Pink = styled.span`
  text-shadow: 5px 5px #e424f9;
`

const Hero = () => (
  <HeroWrapper>
    <HeroHeading>Hi, I'm <Pink>Katherine Picazo.</Pink></HeroHeading>
    <p>I'm a junior web developer currently living in Calgary.</p>
  </HeroWrapper>
)

export default Hero;
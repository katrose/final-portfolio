import React from "react"
import styled from "styled-components"
import heroImg from "../images/code-coder-coding-computer-270404.jpg"
import Fade from "react-reveal/Fade"

const HeroWrapper = styled.section`
  background-image: url(${heroImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rebeccapurple;

  color: white;

  padding-top: 170px;
  padding-bottom: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 425px) {
    padding-top: 100px;
  }
`

const HeroHeading = styled.h1`
  margin-bottom: 0;
  font-size: 3.5em;
  font-weight: 700;

  @media (max-width: 728px) {
    padding: 30px;
  }
`
const Description = styled.p`
  font-size: 2em;
  max-width: 700px;

  @media (max-width: 728px) {
    padding: 30px;
  }
`

const Hero = () => (
  <HeroWrapper>
    <Fade bottom>
      <HeroHeading>Hi, I'm Katherine Picazo.</HeroHeading>
      <Description>
        I'm a junior web developer currently living in Calgary, Alberta, Canada.
      </Description>
    </Fade>
  </HeroWrapper>
)

export default Hero;
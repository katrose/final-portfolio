import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaDiscord } from "react-icons/fa"

const ContactWrapper = styled.section`
  padding-top: 50px;
  padding-right: 50px;
  padding-left: 50px;
  padding-bottom: 300px;
  background-color: #a6bbbb;

  h3 {
    font-size: 22px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    padding-bottom: 50px;
  }

`
const ContactHeading = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
`
const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const SocialMediaIcons = styled.div`
  display: grid;
  grid-template-columns: 3em 1fr;
  grid-gap: 5px;
`

const SocialMediaLinks = styled.a`
`

const FormGrid = styled.div`
  display: flex;
  flex-direction: column;

  input,
  textarea {
    margin-bottom: 10px;
  }

  input[type="submit"] {
    align-self: flex-start;
  }
`

const Contact = () => {
  return(
    <ContactWrapper>
        <ContactGrid>
          <Fade left>
            <div>
              <ContactHeading>Let's connect!</ContactHeading>
              <h3>You can find me on the following social media platforms, but if you prefer to shoot me an email, please fill out the form.</h3>
              <SocialMediaIcons>
                <a href="https://discordapp.com/channels/@me/309465561358663690"><FaDiscord size="3em" /></a>
                <p><a href="https://discordapp.com/channels/@me/309465561358663690">Kate#6448</a></p>
                <a href="https://github.com/katrose"><FaGithub size="3em" /></a>
                <p><a href="https://github.com/katrose">katrose</a></p>
                <a href="https://linkedin.com/in/katherinepicazo/"><FaLinkedin size="3em" /></a>
                <p><a href="https://linkedin.com/in/katherinepicazo/">katherinepicazo</a></p>
              </SocialMediaIcons>
            </div>
          </Fade>
          <Fade right>
            <form action="https://formspree.io/xbjjnogg" method="POST">
              <FormGrid>
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required/>

                <label for="email">Email</label>
                <input type="email" id="email" name="email" required/>

                <label for="message">Message</label>
                <textarea id="message" rows="15" name="message"></textarea>

                <input type="submit" value="Send" />
              </FormGrid>
            </form>
          </Fade>
        </ContactGrid>
    </ContactWrapper>
  )
}

export default Contact
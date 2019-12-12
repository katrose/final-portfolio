import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

const ContactWrapper = styled.section`
  margin-bottom: 300px;
`
const ContactHeading = styled.h2`
  font-size: 2.5em;
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
    <Fade left>
    <ContactWrapper>
      <ContactHeading>Let's connect!</ContactHeading>
      <h3>Fill out the form to send me an email.</h3>
      <form action="https://formspree.io/xbjjnogg" method="POST">
        <FormGrid>
          <label for="name">Name</label>
          <input type="text" id="name" name="name" />

          <label for="email">Email</label>
          <input type="email" id="email" name="email" />

          <label for="message">Message</label>
          <textarea id="message"></textarea>

          <input type="submit" value="Send" />
        </FormGrid>
      </form>
    </ContactWrapper>
    </Fade>
  )
}

export default Contact
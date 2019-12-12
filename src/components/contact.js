import React from "react"
import styled from "styled-components"

const ContactWrapper = styled.section`
  margin-bottom: 300px;
`

const ContactHeading = styled.h2`
  font-size: 2.5em;
`
const FormGrid = styled.div`
  display: flex;
  flex-direction: column;
`

const Contact = () => {
  return(
    <ContactWrapper>
      <ContactHeading>Let's connect</ContactHeading>
      <form action="https://formspree.io/xbjjnogg" method="POST">
        <FormGrid>
          <label for="name">Name</label>
          <input type="text" id="name" name="name" />

          <label for="email">Email</label>
          <input type="email" id="email" name="email" />

          <label for="message">Message</label>
          <textarea></textarea>

          <input type="submit" value="Send" />
        </FormGrid>
      </form>
    </ContactWrapper>
  )
}

export default Contact
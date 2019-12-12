import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Element } from 'react-scroll'
import Hero from "../components/hero"
import Projects from "../components/projects"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Element id="projects">
      <Projects />
    </Element>
    <Element id="contact">
      <Contact />
    </Element>
  </Layout>
)

export default IndexPage

/**
 * layout.js - sections of the website that you want to share across multiple pages
 *             e.g. header, footer, nav
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Navigation from "./navigation"
import Footer from "./footer"
import "./layout.css"

const GlobalLayout = styled.div`
  padding-left: 200px;
  padding-right: 200px;
`

// Query for site data
const Layout = ({ children }) => {


  return (
    <>
      <Navigation />
      <GlobalLayout>
        <main>{children}</main>
      </GlobalLayout>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About me</h1>
      <p>I'm a developer</p>
      <p>
        Contact me <Link to="/contact">Contact</Link>
      </p>
    </Layout>
  )
}

export default AboutPage

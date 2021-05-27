import React from "react"
import { Helmet } from "react-helmet"
import Layout from "@/layouts/Main"
import Promo from "@/components/pages/Promo"
import Solutions from "@/components/pages/Solutions"
import About from "@/components/pages/About"

export default () => {
  return (
    <Layout>
      <Helmet title="Cardano Ecosystem" />
      <Promo />
      <Solutions />
      <About />
    </Layout>
  )
}

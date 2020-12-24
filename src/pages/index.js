import React from "react"
import { Helmet } from "react-helmet"
import Layout from "@/layouts/Main"
import Features from "@/components/Features"
import WhyUs from "@/components/WhyUs"
import Wallet from "@/components/Wallet"
import About from "@/components/About"
import Roadmap from "@/components/Roadmap"
import Map from "@/components/Map"

export default () => {
  return (
    <Layout>
      <Helmet title="Homepage">
        <meta
          name="description"
          content="RAY Netwrok Cardano poooooooools. Advanced staking."
        />
      </Helmet>
      <Roadmap />
      <Map />
      <WhyUs />
      <Features />
      <Wallet />
      <About />
    </Layout>
  )
}

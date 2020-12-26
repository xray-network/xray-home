import React from "react"
import { Helmet } from "react-helmet"
import Layout from "@/layouts/Main"
import Features from "@/components/Features"
import WhyUs from "@/components/WhyUs"
import Wallet from "@/components/Wallet"
import About from "@/components/About"
import Roadmap from "@/components/Roadmap"
import Map from "@/components/Map"
import Promo from "@/components/Promo"

export default () => {
  return (
    <Layout>
      <Helmet title="Cardano pools. Advanced ADA staking.">
        <meta property="og:url" content="https://rraayy.com" />
        <meta
          name="description"
          content="RAY Network Cardano pools. Advanced ADA staking."
        />
      </Helmet>
      <Promo />
      <Roadmap />
      <Map />
      <WhyUs />
      <Features />
      <Wallet />
      <About />
    </Layout>
  )
}

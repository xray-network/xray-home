import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Promo from "@/components/Promo"
import Stats from "@/components/Stats"
import PromoISPO from "@/components/PromoISPO"
import Ecosystem from "@/components/Ecosystem"
import About from "@/components/About/about"
import Map from "@/components/Map"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="Cardano Ecosystem" />
      <Promo />
      <Stats />
      <PromoISPO />
      <Ecosystem />
      <About />
      <Map />
    </MainLayout>
  )
}

export default Page

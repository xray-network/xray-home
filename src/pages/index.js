import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Promo from "@/components/Promo"
import About from "@/components/About"
import Solutions from "@/components/Solutions"
import Map from "@/components/Map"
import Community from "@/components/Community"
import BannerISPO from "@/components/BannerISPO"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="Cardano Ecosystem" />
      <Promo />
      <BannerISPO />
      <Solutions />
      <About />
      <Map />
      <Community />
    </MainLayout>
  )
}

export default Page

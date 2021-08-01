import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Promo from "@/components/pages/Promo"
import About from "@/components/pages/About"
import Solutions from "@/components/shared/Solutions"
import Map from "@/components/shared/Map"
import Community from "@/components/shared/Community"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="Cardano Ecosystem" />
      <Promo />
      <Solutions />
      <About />
      <Map />
      <Community />
    </MainLayout>
  )
}

export default Page

import React from "react"
import { Helmet } from "react-helmet"
import BannerPromo from "@/components/BannerPromo"
import Performance from "@/components/Performance"
import BannerSwap from "@/components/BannerSwap"
import Ecosystem from "@/components/Ecosystem"
import About from "@/components/About/about"
import Map from "@/components/Map"

const Page = () => {
  return (
    <div>
      <Helmet title="Cardano Ecosystem" />
      <BannerPromo />
      <BannerSwap />
      <Performance />
      <Ecosystem />
      <About />
      <Map />
    </div>
  )
}

export default Page

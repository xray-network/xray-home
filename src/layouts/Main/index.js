import React from "react"
import { Helmet } from "react-helmet"
import Presale from '@/components/modals/presale'
import Rewards from '@/components/modals/rewards'
import Menu from '@/components/layout/Menu'
// import Announce from '@/components/layout/Announce'
import Footer from '@/components/layout/Footer'
import Cookies from '@/components/layout/Cookies'
import Questions from "@/components/layout/Questions"
import Community from "@/components/layout/Community"
import Map from "@/components/layout/Map"

export default ({ children }) => {
  return (
    <div>
      <Helmet titleTemplate="%s | Ray Network" title="Cardano Ecosystem">
        <meta property="og:url" content="https://rraayy.com" />
        <meta
          name="description"
          content="Advanced Ecosystem for Cardano Blockchain Platform. All about ADA finances (DeFi) in one place."
        />
      </Helmet>
      <Presale />
      <Rewards />
      {/* <Announce /> */}
      <Menu />
      {children}
      <Map />
      <Community />
      <Questions />
      <Footer />
      <Cookies />
    </div>
  )
}

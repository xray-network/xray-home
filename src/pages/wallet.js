import React from "react"
import { Helmet } from "react-helmet"
import Submenu from "@/components/Submenu"
import RayWallet from "@/components/RayWallet"
import Ecosystem from "@/components/Ecosystem"

const Page = () => {
  return (
    <div>
      <Helmet title="RayWallet" />
      <Submenu type="ecosystem" />
      <RayWallet />
      <Ecosystem />
    </div>
  )
}

export default Page

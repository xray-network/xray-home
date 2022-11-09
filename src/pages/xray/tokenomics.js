import React from "react"
import { Helmet } from "react-helmet"
import Submenu from "@/components/Submenu"
import XrayTokenomics from "@/components/XRAY/tokenomics"
import Ecosystem from "@/components/Ecosystem"

const Page = () => {
  return (
    <div>
      <Helmet title="XRAY Tokenomics" />
      <Submenu type="xray" />
      <XrayTokenomics />
      <Ecosystem />
    </div>
  )
}

export default Page

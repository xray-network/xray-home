import React from "react"
import { Helmet } from "react-helmet"
import Submenu from "@/components/Submenu"
import XraySwap from "@/components/XRAY/swap"
// import Ecosystem from "@/components/Ecosystem"

const Page = () => {
  return (
    <div>
      <Helmet title="XRAY Swap Event" />
      <Submenu type="xray" />
      <XraySwap />
      {/* <Ecosystem /> */}
    </div>
  )
}

export default Page

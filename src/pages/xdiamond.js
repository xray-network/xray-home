import React from "react"
import { Helmet } from "react-helmet"
import Submenu from "@/components/Submenu"
import Xdiamond from "@/components/XDIAMOND"
import Ecosystem from "@/components/Ecosystem"

const Page = () => {
  return (
    <div>
      <Helmet title="XDIAMOND sNFT" />
      <Submenu type="xray" />
      <Xdiamond />
      <Ecosystem />
    </div>
  )
}

export default Page

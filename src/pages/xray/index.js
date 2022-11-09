import React from "react"
import { Helmet } from "react-helmet"
import Submenu from "@/components/Submenu"
import Xray from "@/components/XRAY/xray"
import Ecosystem from "@/components/Ecosystem"

const Page = () => {
  return (
    <div>
      <Helmet title="XRAY Token" />
      <Submenu type="xray" />
      <Xray />
      <Ecosystem />
    </div>
  )
}

export default Page

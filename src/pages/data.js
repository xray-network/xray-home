import React from "react"
import { Helmet } from "react-helmet"
import Submenu from "@/components/Submenu"
import RayData from "@/components/RayData"
import Ecosystem from "@/components/Ecosystem"

const Page = () => {
  return (
    <div>
      <Helmet title="RayData" />
      <Submenu type="ecosystem" />
      <RayData />
      <Ecosystem />
    </div>
  )
}

export default Page

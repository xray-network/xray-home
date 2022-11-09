import React from "react"
import { Helmet } from "react-helmet"
import Submenu from "@/components/Submenu"
import RayGraph from "@/components/RayGraph"
import Ecosystem from "@/components/Ecosystem"

const Page = () => {
  return (
    <div>
      <Helmet title="RayGraph" />
      <Submenu type="ecosystem" />
      <RayGraph />
      <Ecosystem />
    </div>
  )
}

export default Page

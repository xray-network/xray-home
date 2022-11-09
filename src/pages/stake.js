import React from "react"
import { Helmet } from "react-helmet"
import Submenu from "@/components/Submenu"
import RayStake from "@/components/RayStake"
import Ecosystem from "@/components/Ecosystem"

const Page = () => {
  return (
    <div>
      <Helmet title="RayStake" />
      <Submenu type="ecosystem" />
      <RayStake />
      <Ecosystem />
    </div>
  )
}

export default Page

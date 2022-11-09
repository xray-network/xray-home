import React from "react"
import { Helmet } from "react-helmet"
import Submenu from "@/components/Submenu"
import RayPad from "@/components/RayPad"
import Ecosystem from "@/components/Ecosystem"

const Page = () => {
  return (
    <div>
      <Helmet title="RayPad" />
      <Submenu type="ecosystem" />
      <RayPad />
      <Ecosystem />
    </div>
  )
}

export default Page

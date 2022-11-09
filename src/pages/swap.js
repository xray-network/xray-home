import React from "react"
import { Helmet } from "react-helmet"
import Submenu from "@/components/Submenu"
import RaySwap from "@/components/RaySwap"
import Ecosystem from "@/components/Ecosystem"

const Page = () => {
  return (
    <div>
      <Helmet title="RaySwap" />
      <Submenu type="ecosystem" />
      <RaySwap />
      <Ecosystem />
    </div>
  )
}

export default Page

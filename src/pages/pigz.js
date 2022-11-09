import React from "react"
import { Helmet } from "react-helmet"
import Submenu from "@/components/Submenu"
import Pigz from "@/components/Pigz"
import Ecosystem from "@/components/Ecosystem"

const Page = () => {
  return (
    <div>
      <Helmet title="PIGZ.IO" />
      <Submenu type="ecosystem" />
      <Pigz />
      <Ecosystem />
    </div>
  )
}

export default Page

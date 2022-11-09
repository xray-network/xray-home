import React from "react"
import { Helmet } from "react-helmet"
import Submenu from "@/components/Submenu"
import Ecosystem from "@/components/Ecosystem"

const Page = () => {
  return (
    <div>
      <Helmet title="Ecosystem" />
      <Submenu type="ecosystem" />
      <Ecosystem />
    </div>
  )
}

export default Page

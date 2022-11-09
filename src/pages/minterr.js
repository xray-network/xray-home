import React from "react"
import { Helmet } from "react-helmet"
import Submenu from "@/components/Submenu"
import Minterr from "@/components/Minterr"
import Ecosystem from "@/components/Ecosystem"

const Page = () => {
  return (
    <div>
      <Helmet title="Minterr" />
      <Submenu type="ecosystem" />
      <Minterr />
      <Ecosystem />
    </div>
  )
}

export default Page

import React from "react"
import { Helmet } from "react-helmet"
import Submenu from "@/components/Submenu"
import Roadmap from "@/components/Roadmap"
import Updates from "@/components/Updates"

const Page = () => {
  return (
    <div>
      <Helmet title="Roadmap" />
      <Submenu type="developers" />
      <Roadmap />
      <Updates />
    </div>
  )
}

export default Page

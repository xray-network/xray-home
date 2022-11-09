import React from "react"
import { Helmet } from "react-helmet"
import Submenu from "@/components/Submenu"
import Developers from "@/components/Developers"

const Page = () => {
  return (
    <div>
      <Helmet title="Developers" />
      <Submenu type="developers" />
      <Developers />
    </div>
  )
}

export default Page

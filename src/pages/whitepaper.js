import React from "react"
import { Helmet } from "react-helmet"
import Submenu from "@/components/Submenu"
import Whitepaper from "@/components/Whitepaper"

const Page = () => {
  return (
    <div>
      <Helmet title="Whitepaper" />
      <Submenu type="developers" />
      <Whitepaper />
    </div>
  )
}

export default Page

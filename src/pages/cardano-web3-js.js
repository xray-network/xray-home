import React from "react"
import { Helmet } from "react-helmet"
import Submenu from "@/components/Submenu"
import CardanoWeb3 from "@/components/CardanoWeb3"
import Ecosystem from "@/components/Ecosystem"

const Page = () => {
  return (
    <div>
      <Helmet title="CardanoWeb3.js" />
      <Submenu type="ecosystem" />
      <CardanoWeb3 />
      <Ecosystem />
    </div>
  )
}

export default Page

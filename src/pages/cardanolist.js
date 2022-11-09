import React from "react"
import { Helmet } from "react-helmet"
import Submenu from "@/components/Submenu"
import CardanoList from "@/components/CardanoList"
import Ecosystem from "@/components/Ecosystem"

const Page = () => {
  return (
    <div>
      <Helmet title="Cardanolist.io" />
      <Submenu type="ecosystem" />
      <CardanoList />
      <Ecosystem />
    </div>
  )
}

export default Page

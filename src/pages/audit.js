import React from "react"
import { Helmet } from "react-helmet"
import Submenu from "@/components/Submenu"
import Audit from "@/components/Audit"

const Page = () => {
  return (
    <div>
      <Helmet title="Audit" />
      <Submenu type="developers" />
      <Audit />
    </div>
  )
}

export default Page

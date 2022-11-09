import React from "react"
import { Helmet } from "react-helmet"
import Submenu from "@/components/Submenu"
import Community from "@/components/Community"

const Page = () => {
  return (
    <div>
      <Helmet title="Community" />
      <Community />
    </div>
  )
}

export default Page

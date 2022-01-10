import React from "react"
import { Helmet } from "react-helmet"
import Submenu from "@/components/Submenu"
import MainLayout from "@/layouts/Main"
import Roadmap from "@/components/Roadmap"
import Updates from "@/components/Updates"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="Roadmap" />
      <Submenu type="developers" />
      <Roadmap />
      <Updates />
    </MainLayout>
  )
}

export default Page

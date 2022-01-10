import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Submenu from "@/components/Submenu"
import Ecosystem from "@/components/Ecosystem"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="Ecosystem" />
      <Submenu type="ecosystem" />
      <Ecosystem />
    </MainLayout>
  )
}

export default Page

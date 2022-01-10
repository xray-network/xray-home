import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Submenu from "@/components/Submenu"
import XrayDistribution from "@/components/XRAY/distribution"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="XRAY Distribution" />
      <Submenu type="xray" />
      <XrayDistribution />
    </MainLayout>
  )
}

export default Page

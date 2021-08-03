import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import XrayDistribution from "@/components/pages/XrayDistribution"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="XRAY Distribution" />
      <XrayDistribution />
    </MainLayout>
  )
}

export default Page

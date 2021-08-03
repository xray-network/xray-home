import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import XrayTokenomics from "@/components/pages/XrayTokenomics"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="XRAY Tokenomics" />
      <XrayTokenomics />
    </MainLayout>
  )
}

export default Page

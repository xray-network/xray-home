import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import XrayPromo from "@/components/pages/XrayPromo"
import XrayIntroducing from "@/components/pages/XrayIntroducing"
import XrayGovernance from "@/components/pages/XrayGovernance"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="XRAY Token" />
      <XrayPromo />
      <XrayIntroducing />
      <XrayGovernance />
    </MainLayout>
  )
}

export default Page

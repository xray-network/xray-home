import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Submenu from "@/components/Submenu"
import XrayTokenomics from "@/components/XRAY/tokenomics"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="XRAY Tokenomics" />
      <Submenu type="xray" />
      <XrayTokenomics />
    </MainLayout>
  )
}

export default Page

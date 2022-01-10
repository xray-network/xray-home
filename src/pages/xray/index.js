import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Submenu from "@/components/Submenu"
import XrayPromo from "@/components/XRAY/promo"
import XrayIntroducing from "@/components/XRAY/introducing"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="XRAY Introducing" />
      <Submenu type="xray" />
      <XrayPromo />
      <XrayIntroducing />
    </MainLayout>
  )
}

export default Page

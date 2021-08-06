import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import XrayDiamond from "@/components/XrayDiamond"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="XDIAMOND" />
      <XrayDiamond />
    </MainLayout>
  )
}

export default Page

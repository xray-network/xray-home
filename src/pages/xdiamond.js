import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Submenu from "@/components/Submenu"
import Xdiamond from "@/components/XDIAMOND"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="XDIAMOND NFT" />
      <Submenu type="xray" />
      <Xdiamond />
    </MainLayout>
  )
}

export default Page

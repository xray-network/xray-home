import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Submenu from "@/components/Submenu"
import RayWallet from "@/components/RayWallet"
import Ecosystem from "@/components/Ecosystem"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="RayWallet" />
      <Submenu type="ecosystem" />
      <RayWallet />
      <Ecosystem />
    </MainLayout>
  )
}

export default Page

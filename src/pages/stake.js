import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Submenu from "@/components/Submenu"
import RayStake from "@/components/RayStake"
import Ecosystem from "@/components/Ecosystem"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="RayStake" />
      <Submenu type="ecosystem" />
      <RayStake />
      <Ecosystem />
    </MainLayout>
  )
}

export default Page

import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Submenu from "@/components/Submenu"
import RayGraph from "@/components/RayGraph"
import Ecosystem from "@/components/Ecosystem"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="RayGraph" />
      <Submenu type="ecosystem" />
      <RayGraph />
      <Ecosystem />
    </MainLayout>
  )
}

export default Page

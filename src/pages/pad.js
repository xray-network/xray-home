import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Submenu from "@/components/Submenu"
import RayPad from "@/components/RayPad"
import Ecosystem from "@/components/Ecosystem"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="RayPad" />
      <Submenu type="ecosystem" />
      <RayPad />
      <Ecosystem />
    </MainLayout>
  )
}

export default Page

import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Submenu from "@/components/Submenu"
import RaySwap from "@/components/RaySwap"
import Ecosystem from "@/components/Ecosystem"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="RaySwap" />
      <Submenu type="ecosystem" />
      <RaySwap />
      <Ecosystem />
    </MainLayout>
  )
}

export default Page

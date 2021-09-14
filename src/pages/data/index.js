import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Data from "@/components/Data"
import Solutions from "@/components/Solutions"
import Community from "@/components/Community"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="RayData" />
      <Data />
      <Solutions />
      <Community />
    </MainLayout>
  )
}

export default Page

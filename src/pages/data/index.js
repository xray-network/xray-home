import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Data from "@/components/pages/Data"
import Solutions from "@/components/shared/Solutions"
import Community from "@/components/shared/Community"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="Ray Data" />
      <Data />
      <Solutions />
      <Community />
    </MainLayout>
  )
}

export default Page

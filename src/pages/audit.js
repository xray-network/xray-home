import React from "react"
import { Helmet } from "react-helmet"
import Submenu from "@/components/Submenu"
import MainLayout from "@/layouts/Main"
import Audit from "@/components/Audit"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="Audit" />
      <Submenu type="developers" />
      <Audit />
    </MainLayout>
  )
}

export default Page

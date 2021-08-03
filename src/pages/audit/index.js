import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Audit from "@/components/shared/Audit"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="Audit" />
      <Audit />
    </MainLayout>
  )
}

export default Page

import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import GettingStarted from "@/components/GettingStarted"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="Getting Started" />
      <GettingStarted />
    </MainLayout>
  )
}

export default Page

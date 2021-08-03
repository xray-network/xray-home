import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Graph from "@/components/pages/Graph"
import Solutions from "@/components/shared/Solutions"
import Community from "@/components/shared/Community"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="Ray Graph" />
      <Graph />
      <Solutions />
      <Community />
    </MainLayout>
  )
}

export default Page

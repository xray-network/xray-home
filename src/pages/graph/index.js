import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Graph from "@/components/Graph"
import Solutions from "@/components/Solutions"
import Community from "@/components/Community"

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

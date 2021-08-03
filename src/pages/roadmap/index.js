import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Roadmap from "@/components/pages/Roadmap"
import Solutions from "@/components/shared/Solutions"
import Community from "@/components/shared/Community"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="Roadmap & Updates" />
      <Roadmap />
      <Solutions />
      <Community />
    </MainLayout>
  )
}

export default Page
import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Roadmap from "@/components/Roadmap"
import Solutions from "@/components/Solutions"
import Community from "@/components/Community"

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

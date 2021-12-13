import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Pad from "@/components/Pad"
import Solutions from "@/components/Solutions"
import Community from "@/components/Community"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="RayPad" />
      <Pad />
      <Solutions />
      <Community />
    </MainLayout>
  )
}

export default Page

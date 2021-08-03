import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Kickstart from "@/components/shared/Kickstart"
import Solutions from "@/components/shared/Solutions"
import Community from "@/components/shared/Community"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="Ray Kickstart" />
      <Kickstart />
      <Solutions />
      <Community />
    </MainLayout>
  )
}

export default Page

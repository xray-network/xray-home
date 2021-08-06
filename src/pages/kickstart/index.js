import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Kickstart from "@/components/Kickstart"
import Solutions from "@/components/Solutions"
import Community from "@/components/Community"

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

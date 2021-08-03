import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Swap from "@/components/shared/Swap"
import Solutions from "@/components/shared/Solutions"
import Community from "@/components/shared/Community"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="Ray Swap" />
      <Swap />
      <Solutions />
      <Community />
    </MainLayout>
  )
}

export default Page

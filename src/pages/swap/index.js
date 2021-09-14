import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Swap from "@/components/Swap"
import Solutions from "@/components/Solutions"
import Community from "@/components/Community"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="RaySwap" />
      <Swap />
      <Solutions />
      <Community />
    </MainLayout>
  )
}

export default Page

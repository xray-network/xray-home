import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Wallet from "@/components/shared/Wallet"
import Solutions from "@/components/shared/Solutions"
import Community from "@/components/shared/Community"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="Ray Wallet" />
      <Wallet />
      <Solutions />
      <Community />
    </MainLayout>
  )
}

export default Page

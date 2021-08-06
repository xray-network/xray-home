import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Wallet from "@/components/Wallet"
import Solutions from "@/components/Solutions"
import Community from "@/components/Community"

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

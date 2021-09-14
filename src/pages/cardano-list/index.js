import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import TokensList from "@/components/TokensList"
import Solutions from "@/components/Solutions"
import Community from "@/components/Community"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="Cardano List" />
      <TokensList />
      <Solutions />
      <Community />
    </MainLayout>
  )
}

export default Page

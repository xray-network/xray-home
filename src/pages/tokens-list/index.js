import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import TokensList from "@/components/pages/TokensList"
import Solutions from "@/components/shared/Solutions"
import Community from "@/components/shared/Community"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="Tokens List" />
      <TokensList />
      <Solutions />
      <Community />
    </MainLayout>
  )
}

export default Page
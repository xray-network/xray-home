import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Nft from "@/components/pages/NFT"
import Solutions from "@/components/shared/Solutions"
import Community from "@/components/shared/Community"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="Ray NFT" />
      <Nft />
      <Solutions />
      <Community />
    </MainLayout>
  )
}

export default Page

import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Nft from "@/components/NFT"
import Solutions from "@/components/Solutions"
import Community from "@/components/Community"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="RayNFT" />
      <Nft />
      <Solutions />
      <Community />
    </MainLayout>
  )
}

export default Page

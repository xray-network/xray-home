import React from "react"
import { Helmet } from "react-helmet"
import Layout from "@/layouts/Main"
import Nft from "@/components/pages/Nft"

export default () => {
  return (
    <Layout>
      <Helmet title="NFT Marketplace" />
      <Nft />
    </Layout>
  )
}

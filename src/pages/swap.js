import React from "react"
import { Helmet } from "react-helmet"
import Layout from "@/layouts/Main"
import Swap from "@/components/pages/Swap"

export default () => {
  return (
    <Layout>
      <Helmet title="DeFi Swap" />
      <Swap />
    </Layout>
  )
}

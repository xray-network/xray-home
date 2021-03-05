import React from "react"
import { Helmet } from "react-helmet"
import Layout from "@/layouts/Main"
import Wallet from "@/components/pages/Wallet"

export default () => {
  return (
    <Layout>
      <Helmet title="Cardano Light Wallet" />
      <Wallet />
    </Layout>
  )
}

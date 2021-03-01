import React from "react"
import { Helmet } from "react-helmet"
import Layout from "@/layouts/Main"
import Stake from "@/components/pages/Stake"

export default () => {
  return (
    <Layout>
      <Helmet title="Stake Pools" />
      <Stake />
    </Layout>
  )
}

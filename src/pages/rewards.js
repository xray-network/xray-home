import React from "react"
import { Helmet } from "react-helmet"
import Layout from "@/layouts/Main"
import Rewards from "@/components/pages/Rewards"

export default () => {
  return (
    <Layout>
      <Helmet title="Rewards" />
      <Rewards />
    </Layout>
  )
}

import React from "react"
import { Helmet } from "react-helmet"
import Layout from "@/layouts/Main"
import KickStart from "@/components/pages/KickStart"

export default () => {
  return (
    <Layout>
      <Helmet title="KickStart Crowdfunding" />
      <KickStart />
    </Layout>
  )
}

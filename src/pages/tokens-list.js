import React from "react"
import { Helmet } from "react-helmet"
import Layout from "@/layouts/Main"
import TokensList from "@/components/pages/TokensList"

export default () => {
  return (
    <Layout>
      <Helmet title="Tokens List" />
      <TokensList />
    </Layout>
  )
}

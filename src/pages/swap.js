import React from "react"
import { Helmet } from "react-helmet"
import Layout from "@/layouts/Main"

export default () => {
  return (
    <Layout>
      <Helmet title="DeFi Swap" />
      <div className="ray__block">
        <div className="container-fluid">
          [swap]
        </div>
      </div>
    </Layout>
  )
}

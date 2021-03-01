import React from "react"
import { Helmet } from "react-helmet"
import Layout from "@/layouts/Main"
import RayToken from "@/components/pages/RayToken"

export default () => {
  return (
    <Layout>
      <Helmet title="Ray Token" />
      <RayToken />
    </Layout>
  )
}

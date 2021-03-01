import React from "react"
import { Helmet } from "react-helmet"
import Layout from "@/layouts/Main"
import DataContainers from "@/components/pages/DataContainers"

export default () => {
  return (
    <Layout>
      <Helmet title="Data Containers" />
      <DataContainers />
    </Layout>
  )
}

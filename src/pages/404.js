import React from "react"
import { Helmet } from "react-helmet"
import Layout from "@/layouts/Main"
import Error404 from "@/components/404"

export default () => {
  return (
    <Layout>
      <Helmet title="Page Not Found">
        <meta name="description" content="Page 404" />
      </Helmet>
      <Error404 />
    </Layout>
  )
}

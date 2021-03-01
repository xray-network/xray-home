import React from "react"
import { Helmet } from "react-helmet"
import LayoutEmpty from "@/layouts/Empty"
import Error404 from "@/components/pages/404"

export default () => {
  return (
    <LayoutEmpty>
      <Helmet title="Page Not Found">
        <meta name="description" content="Page 404" />
      </Helmet>
      <Error404 />
    </LayoutEmpty>
  )
}

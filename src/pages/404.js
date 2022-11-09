import React from "react"
import { Helmet } from "react-helmet"
import Error404 from "@/components/404"

const Page404 = () => {
  return (
    <div>
      <Helmet title="Page Not Found">
        <meta name="description" content="Page 404" />
      </Helmet>
      <Error404 />
    </div>
  )
}

export default Page404

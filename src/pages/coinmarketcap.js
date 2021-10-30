import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Error404 from "@/components/404"

const Page404 = () => {
  return (
    <MainLayout>
      <Helmet title="Page Not Found">
        <meta name="description" content="Page 404" />
      </Helmet>
      <div className="py-5 text-center">
        <h2>✅ CoinMarketCap Request Proof</h2>
      </div>
    </MainLayout>
  )
}

export default Page404

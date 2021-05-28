import React from "react"
import { Helmet } from "react-helmet"
import LayoutPage from "@/layouts/Page"
import Updates from "@/components/pages/Updates"

export default () => {
  return (
    <LayoutPage>
      <Helmet title="Cardano Ecosystem" />
      <Updates />
    </LayoutPage>
  )
}

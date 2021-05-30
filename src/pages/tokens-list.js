import React from "react"
import { Helmet } from "react-helmet"
import LayoutPage from "@/layouts/Page"
import TokensList from "@/components/pages/TokensList"

export default () => {
  return (
    <LayoutPage>
      <Helmet title="Ray Tokens List" />
      <TokensList />
    </LayoutPage>
  )
}

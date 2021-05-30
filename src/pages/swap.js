import React from "react"
import { Helmet } from "react-helmet"
import LayoutPage from "@/layouts/Page"
import Swap from "@/components/pages/Swap"

export default () => {
  return (
    <LayoutPage>
      <Helmet title="Ray Swap" />
      <Swap />
    </LayoutPage>
  )
}

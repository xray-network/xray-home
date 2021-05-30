import React from "react"
import { Helmet } from "react-helmet"
import LayoutPage from "@/layouts/Page"
import Stake from "@/components/pages/Stake"

export default () => {
  return (
    <LayoutPage>
      <Helmet title="Ray Stake" />
      <Stake />
    </LayoutPage>
  )
}

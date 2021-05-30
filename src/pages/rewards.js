import React from "react"
import { Helmet } from "react-helmet"
import LayoutPage from "@/layouts/Page"
import Rewards from "@/components/pages/Rewards"

export default () => {
  return (
    <LayoutPage>
      <Helmet title="Ray Rewards" />
      <Rewards />
    </LayoutPage>
  )
}

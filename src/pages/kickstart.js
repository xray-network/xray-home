import React from "react"
import { Helmet } from "react-helmet"
import LayoutPage from "@/layouts/Page"
import KickStart from "@/components/pages/KickStart"

export default () => {
  return (
    <LayoutPage>
      <Helmet title="Ray KickStart" />
      <KickStart />
    </LayoutPage>
  )
}

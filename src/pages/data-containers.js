import React from "react"
import { Helmet } from "react-helmet"
import LayoutPage from "@/layouts/Page"
import DataContainers from "@/components/pages/DataContainers"

export default () => {
  return (
    <LayoutPage>
      <Helmet title="Ray Data Containers" />
      <DataContainers />
    </LayoutPage>
  )
}

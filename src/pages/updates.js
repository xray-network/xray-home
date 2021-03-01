import React from "react"
import { Helmet } from "react-helmet"
import LayoutEmpty from "@/layouts/Empty"
import Updates from "@/components/pages/Updates"

export default () => {
  return (
    <LayoutEmpty>
      <Helmet title="Updates" />
      <Updates />
    </LayoutEmpty>
  )
}

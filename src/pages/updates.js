import React from "react"
import { Helmet } from "react-helmet"
import LayoutEmpty from "@/layouts/Empty"

export default () => {
  return (
    <LayoutEmpty>
      <Helmet title="Updates" />
      <div className="ray__block">
        <div className="container-fluid">
          [updates]
        </div>
      </div>
    </LayoutEmpty>
  )
}

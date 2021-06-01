import React from "react"
import { Helmet } from "react-helmet"
import LayoutWiki from "@/layouts/Wiki"

export default () => {
  return (
    <LayoutWiki>
      <Helmet title="Logo & Brand" />
      <div className="ray__block">
        <h5>Logo & Brand</h5>
        <div className="ray__line" />
        <h5>Media files</h5>
        <div className="ray__line" />
      </div>
    </LayoutWiki>
  )
}

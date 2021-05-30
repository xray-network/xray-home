import React from "react"
import { Helmet } from "react-helmet"
import LayoutWiki from "@/layouts/Wiki"

export default () => {
  return (
    <LayoutWiki>
      <Helmet title="Liquidity Providers Wiki" />
      <div className="ray__block">
        <h5>No articles yet</h5>
      </div>
    </LayoutWiki>
  )
}

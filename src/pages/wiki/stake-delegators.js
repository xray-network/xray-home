import React from "react"
import { Helmet } from "react-helmet"
import LayoutWiki from "@/layouts/Wiki"

export default () => {
  return (
    <LayoutWiki>
      <Helmet title="Stake Delegators Wiki" />
      <div className="ray__block">
        [stake-delegators]
      </div>
    </LayoutWiki>
  )
}

import React from "react"
import { Helmet } from "react-helmet"
import LayoutPage from "@/layouts/Page"

export default () => {
  return (
    <LayoutPage>
      <Helmet title="Cardano Ecosystem" />
      <div className="ray__block">
        [tokens-list]
      </div>
    </LayoutPage>
  )
}

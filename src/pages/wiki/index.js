import React from "react"
import { Helmet } from "react-helmet"
import LayoutEmpty from "@/layouts/Empty"

export default () => {
  return (
    <LayoutEmpty>
      <Helmet title="Cardano Wiki" />
      <div className="ray__block">
        <div className="container-fluid">
          <h2 className="ray__heading mb-4">Cardano Wiki & Tutorials </h2>
          <p className="mb-5">
            Articles will be added soon. Stay tuned!
          </p>
        </div>
      </div>
    </LayoutEmpty>
  )
}

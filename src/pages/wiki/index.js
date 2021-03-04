import React from "react"
import { Helmet } from "react-helmet"
import LayoutEmpty from "@/layouts/Empty"

export default () => {
  return (
    <LayoutEmpty>
      <Helmet title="Wiki & Cardani Tutorials" />
      <div className="ray__block">
        <div className="container-fluid">
          <h2 className="ray__heading mb-4">Ray Wiki & Cardano Tutorials </h2>
          <p className="mb-5">
            Articles will be added soon. Stay tuned!
          </p>
        </div>
      </div>
    </LayoutEmpty>
  )
}

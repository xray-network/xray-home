import React from "react"
import { Helmet } from "react-helmet"
import { Alert } from "antd"
import LayoutEmpty from "@/layouts/Empty"

export default () => {
  return (
    <LayoutEmpty>
      <Helmet title="Wiki & Cardano Tutorials" />
      <div className="ray__block">
        <div className="container-fluid">
          <h2 className="ray__heading mb-5">RAY Wiki & Cardano Tutorials </h2>
          <div className="row">
            <div className="col-sm-3">
              <h5>RAY</h5>
              <div className="mb-5">
                No articles
              </div>
              <h5>Cardano</h5>
              <div className="mb-5">
                No articles
              </div>
            </div>
            <div className="col-sm-9">
              <Alert
                message="No articles yet"
                description="Articles will be added soon. Stay tuned!"
                type="info"
                showIcon
              />
            </div>
          </div>
        </div>
      </div>
    </LayoutEmpty>
  )
}

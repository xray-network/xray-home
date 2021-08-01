import React from "react"
import { Button, Tooltip } from "antd"
import Heading from "@/components/shared/Heading"
import { SVGLink } from "@/svg"
// import style from "./style.module.scss"

const Kickstart = () => {
  return (
    <div className="ray__block">
      <Heading id="graph">
        Ray Graph. Graphql API Provisioning
      </Heading>
      <p>
        [text]
      </p>
      <h5 className="mb-4">What is GraphQL?</h5>
      <p>
        [text]
      </p>
      <div className="mt-4 pt-3">
        <Tooltip title="soon" className="me-3 mb-2">
          <span className="d-inline-block">
            <Button
              className="ray__btn ray__btn--round"
              href="/"
              disabled
            >
              <span>
                Ray Graph
              </span>
              <span className="ray__icon ms-2">
                <SVGLink />
              </span>
            </Button>
          </span>
        </Tooltip>
        <span className="d-inline-block">
          <a
            className="ray__btn ray__btn--round ray__btn--transparent"
            href="https://docs.rraayy.com/services/ray-graph"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>
              SDK / Documentation
            </span>
          </a>
        </span>
      </div>
    </div>
  )
}

export default Kickstart

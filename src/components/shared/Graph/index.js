import React from "react"
import { Button, Tooltip } from "antd"
import Heading from "@/components/shared/Heading"
import { SVGLink } from "@/svg"
// import style from "./style.module.scss"

const Kickstart = () => {
  return (
    <div className="ray__block">
      <Heading id="graph">
        <strong>Ray Graph</strong>, GraphQL API provisioning
      </Heading>
      <p>
        Any dAPP needs to get historical blockchain data, so Ray Graph is ready to let you deploy graphql-based APIs to access historical data and websockets to directly access ledger node state. Ray Graph's work uses automation to deploy a scalable infrastructure in the Cloudflare cloud.
      </p>
      <p className="mb-5">
        All you need to do is to top up your special ADA address. Then a server with the latest version of cardano-graphql and ogmios will be deployed to handle gql queries and websockets. Just use CardanoWeb3.js on top of this infrastructure to populate your dApp, it's that easy!
      </p>
      <h5 className="mb-5"><strong>What is GraphQL?</strong></h5>
      <p className="mb-5">
        GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.
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

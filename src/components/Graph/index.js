import React from "react"
import Heading from "@/components/Heading"
import { SVGLink } from "@/svg"
// import style from "./style.module.scss"

const Kickstart = () => {
  return (
    <div className="ray__block">
      <Heading id="graph">
        <strong>RayGraph</strong>, GraphQL API provisioning
      </Heading>
      <p>
        Any dAPP needs to get historical blockchain data, so RayGraph is ready
        to let you deploy graphql-based APIs to access historical data and
        websockets to directly access node ledger state. It uses automated
        scalable deploys to Cloudflare infrastructure.
      </p>
      <p className="mb-5">
        Top up your account ADA address and a server with the latest version of
        cardano-graphql and ogmios will be deployed to handle gql queries and
        websockets. Just use CardanoWeb3.js on top of this to populate your
        dApp!
      </p>
      <h5 className="mb-5">
        <strong>What is GraphQL?</strong>
      </h5>
      <p className="mb-5">
        GraphQL is a query language for APIs and a runtime for fulfilling those
        queries with your existing data. GraphQL provides a complete and
        understandable description of the data in your API, gives clients the
        power to ask for exactly what they need and nothing more, makes it
        easier to evolve APIs over time, and enables powerful developer tools.
      </p>
      <div className="mt-4 pt-3">
        <span className="d-inline-block mb-3 me-3">
          <a
            className="ray__btn ray__btn--round"
            href="https://raygraph.io"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>RayGraph</span>
            <span className="ray__icon ms-2">
              <SVGLink />
            </span>
          </a>
        </span>
        <span className="d-inline-block">
          <a
            className="ray__btn ray__btn--round ray__btn--transparent"
            href="https://docs.raynetwork.com/services/raygraph"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>SDK / Documentation</span>
          </a>
        </span>
      </div>
    </div>
  )
}

export default Kickstart

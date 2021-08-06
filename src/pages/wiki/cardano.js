import React from "react"
import { Helmet } from "react-helmet"
import Heading from "@/components/Heading"
import LayoutWiki from "@/layouts/Wiki"

const Page = () => {
  return (
    <LayoutWiki>
      <Helmet title="Cardano Wiki" />
      <Heading id="cardano">
        <strong>Cardano Wiki</strong>
      </Heading>

      <h5>
        <strong>What is the Cardano?</strong>
      </h5>
      <p>
        Cardano is a public blockchain platform. It is open source and
        decentralized, with consensus achieved using proof of stake. It can
        facilitate peer-to-peer transactions with its internal cryptocurrency{" "}
        <span className="ray__ticker">ADA</span>.
      </p>
      <div className="ray__line mb-4" />

      <h5>
        <strong>Where can I read more about Cardano?</strong>
      </h5>
      <ul>
        <li>
          {" "}
          <a
            href="https://cardano.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://cardano.org/
          </a>
        </li>
        <li>
          {" "}
          <a
            href="https://coinmarketcap.com/currencies/cardano/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://coinmarketcap.com/currencies/cardano/
          </a>
        </li>
      </ul>
    </LayoutWiki>
  )
}

export default Page

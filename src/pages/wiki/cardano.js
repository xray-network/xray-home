import React from "react"
import { Helmet } from "react-helmet"
import LayoutWiki from "@/layouts/Wiki"

export default () => {
  return (
    <LayoutWiki>
      <Helmet title="Cardano Wiki" />
      <div className="ray__block">
        <h5>What is the Cardano?</h5>
        <p>Cardano is a public blockchain platform. It is open source and decentralized, with consensus achieved using proof of stake. It can facilitate peer-to-peer transactions with its internal cryptocurrency <span className="ray__ticker">ADA</span>.</p>
        <div className="ray__line" />
        <h5>Where can I read more about Cardano?</h5>
        <ul>
          <li> <a href="https://cardano.org/" target="_blank" rel="noopener noreferrer">https://cardano.org/</a></li>
          <li> <a href="https://coinmarketcap.com/currencies/cardano/" target="_blank" rel="noopener noreferrer">https://coinmarketcap.com/currencies/cardano/</a></li>
        </ul>
        <div className="ray__line" />
      </div>
    </LayoutWiki>
  )
}

import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import LayoutWiki from "@/layouts/Wiki"

export default () => {
  return (
    <LayoutWiki>
      <Helmet title="Wiki" />
      <div className="ray__block">
        <Link className="ray__wiki__link" to="/wiki/ray-network/">
          <i className="fe fe-arrow-right ray__wiki__link__icon" />
          Ray Network Information
        </Link>
        <Link className="ray__wiki__link" to="/wiki/cardano/">
          <i className="fe fe-arrow-right ray__wiki__link__icon" />
          Cardano Information
        </Link>
        <Link className="ray__wiki__link" to="/wiki/stake-delegators/">
          <i className="fe fe-arrow-right ray__wiki__link__icon" />
          Stake Delegators Information
        </Link>
        <Link className="ray__wiki__link" to="/wiki/liquidity-providers/">
          <i className="fe fe-arrow-right ray__wiki__link__icon" />
          Liquidity Providers Information
        </Link>
        <Link className="ray__wiki__link" to="/wiki/brand/">
          <i className="fe fe-arrow-right ray__wiki__link__icon" />
          Logo & Brand
        </Link>
      </div>
    </LayoutWiki>
  )
}

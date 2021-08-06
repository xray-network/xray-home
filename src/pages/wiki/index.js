import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import LayoutWiki from "@/layouts/Wiki"
import Heading from "@/components/Heading"
import * as style from "./style.module.scss"

const Page = () => {
  return (
    <LayoutWiki>
      <Helmet title="Wiki" />
      <Heading id="table-of-contents">
        <strong>Table of Contents</strong>
      </Heading>
      <div>
        <Link className={style.wikiLink} to="/wiki/ray-network/">
          <i className="fe fe-arrow-right ray__wiki__link__icon" />
          Ray Network Information
        </Link>
        <Link className={style.wikiLink} to="/wiki/cardano/">
          <i className="fe fe-arrow-right ray__wiki__link__icon" />
          Cardano Information
        </Link>
        <Link className={style.wikiLink} to="/wiki/stake-delegators/">
          <i className="fe fe-arrow-right ray__wiki__link__icon" />
          Stake Delegators Information
        </Link>
        <Link className={style.wikiLink} to="/wiki/liquidity-providers/">
          <i className="fe fe-arrow-right ray__wiki__link__icon" />
          Liquidity Providers Information
        </Link>
        <Link className={style.wikiLink} to="/wiki/brand/">
          <i className="fe fe-arrow-right ray__wiki__link__icon" />
          Logo & Brand
        </Link>
      </div>
    </LayoutWiki>
  )
}

export default Page

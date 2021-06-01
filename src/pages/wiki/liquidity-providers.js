import React from "react"
import { Helmet } from "react-helmet"
import LayoutWiki from "@/layouts/Wiki"

export default () => {
  return (
    <LayoutWiki>
      <Helmet title="Liquidity Providers Wiki" />
      <div className="ray__block">
        <h5>What is the Liquidity Providers program?</h5>
        <p>This is a program for distributing <span className="ray__ticker">XRAY</span> tokens to liquidity providers.</p>
        <div className="ray__line" />
        <h5>When does this program start?</h5>
        <p>The program will be available as soon as Ray Swap launches (when smart contracts are available on the Cardano blockchain).</p>
        <div className="ray__line" />
      </div>
    </LayoutWiki>
  )
}

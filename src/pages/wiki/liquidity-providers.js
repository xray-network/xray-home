import React from "react"
import { Helmet } from "react-helmet"
import Heading from "@/components/Heading"
import LayoutWiki from "@/layouts/Wiki"

const Page = () => {
  return (
    <LayoutWiki>
      <Helmet title="Liquidity Providers Wiki" />
      <Heading id="liquidity-provider">
        <strong>Liquidity Providers Wiki</strong>
      </Heading>

      <h5>
        <strong>What is the Liquidity Providers program?</strong>
      </h5>
      <p>
        This is a program for distributing{" "}
        <span className="ray__ticker">XRAY</span> tokens to liquidity providers.
      </p>
      <div className="ray__line mb-4" />

      <h5>
        <strong>When does this program start?</strong>
      </h5>
      <p>
        The program will be available as soon as RaySwap launches (when smart
        contracts are available on the Cardano blockchain).
      </p>
    </LayoutWiki>
  )
}

export default Page

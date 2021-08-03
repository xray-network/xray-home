import React from "react"
import Heading from "@/components/shared/Heading"
// import style from "./style.module.scss"

const XrayGovernance = () => {
  return (
    <div className="ray__block">
      <Heading id="governance">
        <strong>Governance</strong> assets
      </Heading>
      <p>
        A community-managed treasury opens up a world of infinite possibilities. We hope to see a variety of experimentation, including ecosystem grants and public goods funding, both of which can foster additional Ray Network ecosystem growth. Ray Network has set the standard for automated liquidity provision: it is now time to set the benchmark for responsible but radical, long-term aligned on-chain governance systems.
      </p>
      <p>
        Ray Network governance will be live from day one (smart contract release date).
      </p>
      <p>
        In the meantime, XRAY holders will have immediate ownership of:
      </p>
      <ul>
        <li>Ray Network governance</li>
        <li>XRAY community treasury</li>
        <li>The protocol fee switch</li>
      </ul>
      <p>
        Initial governance parameters are as follows:
      </p>
      <ul className="mb-5">
        <li>1% of XRAY total supply (delegated) to submit a governance proposal</li>
        <li>4% of XRAY supply required to vote ’yes’ to reach quorum</li>
        <li>7 day voting period</li>
        <li>2 day timelock delay on execution</li>
      </ul>
    </div>
  )
}

export default XrayGovernance

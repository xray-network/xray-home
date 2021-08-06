import React from "react"
import { Link } from "gatsby"
import Heading from "@/components/Heading"
// import style from "./style.module.scss"

const XrayIntroducing = () => {
  return (
    <div className="ray__block">
      <Heading id="introducing">
        Introducing <strong>XRAY</strong>
      </Heading>
      <h5 className="mb-5">
        <strong>What is Ray Network and XRAY token?</strong>
      </h5>
      <p>
        <a href="https://rraayy.com" target="_blank" rel="noopener noreferrer">
          Ray Network
        </a>{" "}
        is an advanced ecosystem for the{" "}
        <a href="https://cardano.org" target="_blank" rel="noopener noreferrer">
          Cardano
        </a>{" "}
        blockchain platform. Our goal is to create the best multifunctional DeFi
        ecosystem for Cardano blockchain. XRAY is a governance token that powers
        Ray Network ecosystem. This is well positioned for community-led growth,
        development, and self-sustainability token.
      </p>
      <p className="mb-5">
        Ticker:{" "}
        <strong className="bolder text-active">
          <span className="ray__ticker">XRAY</span>
        </strong>
        <br />
        Policy ID:{" "}
        <strong className="text-active">
          <span className="">
            ae2a0aa5a24b27d9868c4a73b7c08077ac21baade5eca0fa467a2bbd
          </span>
        </strong>
        <br />
        Fingerprint:{" "}
        <strong className="text-active">
          <span className="">asset14y0dxsz9s9nd2lefkqvuu7edqlsg5p70r3wyxa</span>
        </strong>
        <br />
        More info:{" "}
        <strong className="text-active">
          <a
            href="https://cardanoscan.io/token/a91ed340458166d57f29b019ce7b2d07e08a07cf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View in Explorer
          </a>
        </strong>
      </p>
      <h5 className="mb-5">
        <strong>What is the utility of the XRAY token?</strong>
      </h5>
      <p className="mb-5">
        When most services are fully launched, the token will be used as payment
        for those services, such as premium Ray NFT marketplace placement, Ray
        KickStart placement, tokens minting, will be used as a governance token,
        and yield farming in{" "}
        <a href="https://rayswap.org" target="_blank" rel="noopener noreferrer">
          Ray Swap
        </a>
        . Later we will announce our B2B solution based on{" "}
        <a
          href="https://atalaprism.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Atala PRISM
        </a>
        .
      </p>
      <h5 className="mb-5">
        <strong>Development team</strong>
      </h5>
      <p>
        We are a JavaScript-oriented company located in Kiev, Ukraine. We
        provide full circle integrations of different web systems for clients
        from all over the world based on our framework -{" "}
        <a
          href="https://visualbuilder.cloud"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visual Builder
        </a>
        . Since 2017 we have successfully implemented several cryptocurrency
        projects for our clients, and in 2021 we are ready and able to build own
        ecosystem.
      </p>
      <p className="mb-5">
        We are a completely open and non-anonymous team, more details in{" "}
        <Link to="/about/">About</Link> section.
      </p>
      <h5 className="mb-5">
        <strong>Open Source</strong>
      </h5>
      <p className="mb-5">
        Yes, we are fully open source and publish the code under the MIT
        license.{" "}
        <a
          href="https://github.com/ray-network"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github repository
        </a>
        .
      </p>
      <h5 className="mb-5">
        <strong>KYC/AML compliance</strong>
      </h5>
      <p className="mb-5">
        To successfully launch wallet and DEX, and not to violate laws of
        different countries, to be in compliance with SEC and IRS requirements,
        we are in the process of registering the company in{" "}
        <a
          href="https://e-resident.gov.ee/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Estonia
        </a>
        , one of the most loyal countries to cryptocurrency, to get a license to
        work with cryptocurrencies.
      </p>
    </div>
  )
}

export default XrayIntroducing

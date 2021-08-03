import React from "react"
import { Helmet } from "react-helmet"
import LayoutWiki from "@/layouts/Wiki"
import Heading from "@/components/shared/Heading"

const Page = () => {
  return (
    <LayoutWiki>
      <Helmet title="Ray Network Wiki" />
      <Heading id="ray-network">
        <strong>Ray Network</strong>
      </Heading>

      <h5><strong>What is the Ray Network?</strong></h5>
      <p>Ray Newtork is a decentralized finance ecosystem based on the Cardano blockchain platform. Our goal is to make smart contract payments available to anyone.</p>
      <div className="ray__line my-4" />

      <h5><strong>What is the <span className="ray__ticker">XRAY</span>?</strong></h5>
      <p><span className="ray__ticker">XRAY</span> token is a payment token for those services, such as premium Ray NFT marketplace placement, Ray KickStart placement, tokens minting, will be used as a governance token, yield farming in Ray Swap, and B2B service based on Atala PRISM.</p>
      <div className="ray__line my-4" />

      <h5><strong>What is the Ray Swap?</strong></h5>
      <p>Ray Swap is a decentralized finance protocol that is used to exchange cryptocurrencies. The protocol facilitates automated transactions between cryptocurrency tokens on the Cardano blockchain through the use of smart contracts.</p>
      <div className="ray__line my-4" />

      <h5><strong>What is the Ray KickStart?</strong></h5>
      <p>Ray KickStart exists to help bring creative projects to life through tokenization. It allows you to create and fund your projects in minutes. A crypto-home for services, products, film, music, art, theater, games, comics, design, photography, and more.</p>
      <div className="ray__line my-4" />

      <h5><strong>What is the Ray NFT Marketplace?</strong></h5>
      <p>Ray NFT is a decentralized non-fungible token (NFT) marketplace for buying, selling, and trading NFTs.</p>
    </LayoutWiki>
  )
}

export default Page

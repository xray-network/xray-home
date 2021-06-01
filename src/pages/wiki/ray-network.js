import React from "react"
import { Helmet } from "react-helmet"
import LayoutWiki from "@/layouts/Wiki"

export default () => {
  return (
    <LayoutWiki>
      <Helmet title="Ray Wiki" />
      <div className="ray__block">
        <h5>What is the Ray Network?</h5>
        <p>Ray Newtork is a decentralized finance ecosystem based on the Cardano blockchain platform. Our goal is to make smart contract payments available to anyone.</p>
        <div className="ray__line" />
        <h5>What is the <span className="ray__ticker">XRAY</span>?</h5>
        <p><span className="ray__ticker">XRAY</span> token is a payment token for those services, such as premium Ray NFT marketplace placement, Ray KickStart placement, tokens minting, will be used as a governance token, yield farming in Ray Swap, and B2B service based on Atala PRISM.</p>
        <div className="ray__line" />
        <h5>What is the Ray Swap?</h5>
        <p>Ray Swap is a decentralized finance protocol that is used to exchange cryptocurrencies. The protocol facilitates automated transactions between cryptocurrency tokens on the Cardano blockchain through the use of smart contracts.</p>
        <div className="ray__line" />
        <h5>What is the Ray KickStart?</h5>
        <p>Ray KickStart exists to help bring creative projects to life through tokenization. It allows you to create and fund your projects in minutes. A crypto-home for services, products, film, music, art, theater, games, comics, design, photography, and more.</p>
        <div className="ray__line" />
        <h5>What is the Ray NFT Marketplace?</h5>
        <p>Ray NFT is a decentralized non-fungible token (NFT) marketplace for buying, selling, and trading NFTs.</p>
        <div className="ray__line" />
      </div>
    </LayoutWiki>
  )
}

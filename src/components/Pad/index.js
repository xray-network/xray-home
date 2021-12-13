import React from "react"
import Heading from "@/components/Heading"
import { SVGLink } from "@/svg"
// import style from "./style.module.scss"

const Pad = () => {
  return (
    <div className="ray__block">
      <Heading id="kickstart">
        <strong>RayPad</strong>, Cardano IDO platform
      </Heading>
      <p>
        RayPad exists to help bring creative projects to life through
        tokenization. It allows you to create and fund your projects in minutes.
        A crypto-home for services, products, film, music, art, theater, games,
        comics, design, photography, and more.
      </p>
      <p className="mb-5">
        Our mission is to help bring creative projects to life.
      </p>
      <h5 className="mb-5">
        <strong>What is an Initial DEX Offering (IDO)?</strong>
      </h5>
      <p className="mb-5">
        An IDO refers to a project launching a coin or token via a decentralized
        liquidity exchange. This is a type of crypto asset exchange that depends
        on liquidity pools where traders can swap tokens, including crypto coins
        and stablecoins.
      </p>
      <div className="mt-4 pt-3">
        <span className="d-inline-block me-3 mb-2">
          <a
            className="ray__btn ray__btn--round"
            href="https://raypad.io"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="me-2">RayPad</span>
            <span className="ray__icon">
              <SVGLink />
            </span>
          </a>
        </span>
        <span className="d-inline-block">
          <a
            className="ray__btn ray__btn--round ray__btn--transparent"
            href="https://docs.raynetwork.com/smart-contracts/raypad"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>SDK / Documentation</span>
          </a>
        </span>
      </div>
    </div>
  )
}

export default Pad

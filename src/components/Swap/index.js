import React from "react"
import { Button } from "antd"
import Heading from "@/components/Heading"
import { SVGLink } from "@/svg"
// import style from "./style.module.scss"

const Swap = () => {
  return (
    <div className="ray__block">
      <Heading id="swap">
        <strong>RaySwap</strong>, Cardano DEX
      </Heading>
      <p>
        RaySwap is an automated liquidity protocol for creating liquidity and
        trading native tokens on Cardano. It eliminates trusted intermediaries
        and unnecessary forms of rent extraction, allowing for fast, efficient
        trading. Where it makes tradeoffs decentralization, censorship
        resistance, and security are prioritized.
      </p>
      <p className="mb-5">
        Ray is open-source software licensed under MIT License.
      </p>
      <h5 className="mb-5">
        <strong>How AMM swap works?</strong>
      </h5>
      <p className="mb-5">
        Prices are determined by the amount of each token in a pool. The smart
        contract maintains a constant using the following function:{" "}
        <code>x*y=k</code>. In this case <code>x = token0</code>,{" "}
        <code>y = token1</code>, <code>k = constant</code>. For each trade a
        certain amount of tokens are removed from the pool for an amount of the
        other token. To maintain <code>k</code>, the balances held by the smart
        contract are adjusted during the execution of the trade, therefore
        changing the price.
      </p>
      <div className="mt-4 pt-3 mb-5">
        <span className="d-inline-block me-3 mb-2">
          <Button
            className="ray__btn ray__btn--round"
            href="https://rayswap.io"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="me-2">RaySwap</span>
            <span className="ray__icon">
              <SVGLink />
            </span>
          </Button>
        </span>
        <span className="d-inline-block">
          <a
            className="ray__btn ray__btn--round ray__btn--transparent"
            href="https://docs.raynetwork.io/smart-contracts/rayswap"
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

export default Swap

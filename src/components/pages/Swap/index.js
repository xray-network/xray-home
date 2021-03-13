import React from "react"
import { Button, Tooltip } from "antd"
// import style from "./style.module.scss"

export default () => {
  return (
    <div className="ray__block">
      <div className="container-fluid">
        <h2 className="ray__heading mb-4">RAY Swap <sup>DeFi</sup></h2>
        <p>
          RAY Swap is an automated liquidity protocol for creating liquidity and trading native tokens
          on Cardano. It eliminates trusted intermediaries and unnecessary forms
          of rent extraction, allowing for fast, efficient trading.
          Where it makes tradeoffs decentralization, censorship resistance,
          and security are prioritized.
        </p>
        <p>
          RAY is open-source software licensed
          under MIT License.
        </p>
        <h2 className="ray__heading mb-4">How Swap Works</h2>
        <p>
          Prices are determined by the amount of each token in a pool. The smart
          contract maintains a constant using the following function: <code>x*y=k</code>.
          In this case <code>x = token0</code>, <code>y = token1</code>, <code>k = constant</code>. For each trade a
          certain amount of tokens are removed from the pool for an amount of
          the other token. To maintain <code>k</code>, the balances held by the smart contract
          are adjusted during the execution of the trade, therefore changing the price.
        </p>
        <div className="mt-4 pt-3 mb-5">
          <span className="d-inline-block mr-3 mb-2">
            <Button
              className="ray__btn"
              href="https://raywallet.io/#/swap"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>
                Visit Swap Center
              </span>
              <i className="fe fe-arrow-up-right ray__btn__icon" />
            </Button>
          </span>
          <Tooltip title="soon" className="mr-3 mb-2">
            <span className="d-inline-block">
              <Button
                className="ray__btn"
                href="/"
                disabled
              >
                <span>
                  Wiki
                </span>
              </Button>
            </span>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

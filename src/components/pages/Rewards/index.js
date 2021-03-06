import React from "react"
import { Button, Tooltip } from "antd"
// import style from "./style.module.scss"

export default () => {
  return (
    <div className="ray__block">
      <div className="container-fluid">
        <h2 className="ray__heading mb-4">RAY Rewards</h2>
        <p>Earn rewards by using RAY services.</p>
        <p>RAY is currently running several activities that allow you to earn rewards:</p>
        <ul>
          <li>Additional staking rewards in RAY Tokens</li>
          <li>Early users airdrop</li>
          <li>Twitter activities</li>
        </ul>
        <div className="mt-4 pt-3">
          <span className="d-inline-block mr-3 mb-2">
            <Button
              className="ray__btn"
              href="https://wallet.rraayy.com/#/rewards"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>
                Visit Rewards Center
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

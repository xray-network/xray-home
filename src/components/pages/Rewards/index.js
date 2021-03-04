import React from "react"
import { Button, Tooltip } from "antd"
// import style from "./style.module.scss"

export default () => {
  return (
    <div className="ray__block">
      <div className="container-fluid">
        <h2 className="ray__heading mb-4">Ray Rewards</h2>
        <p>Earn rewards by participating in the use of Ray Network services.</p>
        <p>Ray Network is currently running several activities that allow you to earn rewards:</p>
        <ul>
          <li>Additional staking rewards in Ray Tokens</li>
          <li>Early users airdrop</li>
          <li>Twitter activities</li>
        </ul>
        <div className="mt-4 pt-3">
          <Button
            className="ray__btn mr-3"
            href="https://wallet.rraayy.com/#/rewards"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>
              Visit Rewards Center
            </span>
            <i className="fe fe-arrow-up-right ray__btn__icon" />
          </Button>
          <Tooltip title="soon">
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

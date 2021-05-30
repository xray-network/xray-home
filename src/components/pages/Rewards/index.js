import React from "react"
import { Button, Tooltip } from "antd"
import Heading from "@/components/layout/Heading"
// import style from "./style.module.scss"

export default () => {
  return (
    <div className="ray__block">
      <Heading id="rewards">
        <strong className="bolder">Ray</strong> Rewards
      </Heading>
      <p>Earn rewards by using Ray services.</p>
      <p>Ray is currently running several activities that allow you to earn rewards:</p>
      <ul>
        <li>Early delegator rewards</li>
        <li>Liquidity provider rewards</li>
      </ul>
      <div className="mt-4 pt-3">
        <span className="d-inline-block mr-3 mb-2">
          <Button
            className="ray__button"
            href="https://x.rraayy.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>
              Distribution Rules
            </span>
            <i className="fe fe-arrow-up-right ray__button__icon" />
          </Button>
        </span>
        <span className="d-inline-block mr-3 mb-2">
          <Button
            className="ray__button"
            href="https://raywallet.io/#/rewards"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>
              Visit Rewards Center
            </span>
            <i className="fe fe-arrow-up-right ray__button__icon" />
          </Button>
        </span>
        <Tooltip title="soon" className="mr-3 mb-2">
          <span className="d-inline-block">
            <Button
              className="ray__button"
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
  )
}

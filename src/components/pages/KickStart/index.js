import React from "react"
import { Button, Tooltip } from "antd"
// import style from "./style.module.scss"

export default () => {
  return (
    <div className="ray__block">
      <div className="container-fluid">
        <h2 className="ray__heading mb-4">RAY KickStart Crowdfunding</h2>
        <p>
          RAY KickStart exists to help bring creative projects to life through tokenization.
          It allows you to create and fund your projects in minutes.
          A crypto-home for services, products, film, music, art, theater, games, comics, design, photography, and more.
        </p>
        <p>
          Our mission is to help bring creative projects to life.
        </p>
        <div className="mt-4 pt-3">
          <span className="d-inline-block mr-3 mb-2">
            <Button
              className="ray__btn"
              href="https://raywallet.io/#/kickstart"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>
                Visit Crowdfunding Center
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

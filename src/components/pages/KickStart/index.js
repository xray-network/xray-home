import React from "react"
import { Button, Tooltip } from "antd"
import Heading from "@/components/layout/Heading"
// import style from "./style.module.scss"

export default () => {
  return (
    <div className="ray__block">
      <Heading id="kickstart">
        <strong className="bolder">Ray</strong> KickStart Crowdfunding
      </Heading>
      <p>
        Ray KickStart exists to help bring creative projects to life through tokenization.
        It allows you to create and fund your projects in minutes.
        A crypto-home for services, products, film, music, art, theater, games, comics, design, photography, and more.
      </p>
      <p>
        Our mission is to help bring creative projects to life.
      </p>
      <div className="mt-4 pt-3">
        <span className="d-inline-block mr-3 mb-2">
          <Button
            className="ray__button"
            href="https://raywallet.io/#/kickstart"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>
              Visit Crowdfunding Center
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

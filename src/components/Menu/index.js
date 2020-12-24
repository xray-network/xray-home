/* eslint-disable no-alert */

import React from "react"
import { Link } from "gatsby"
import { Location } from "@reach/router"
import { Button, Tooltip } from "antd"
import style from "./style.module.scss"

const Header = () => {
  return (
    <div className="cui__block mb-0">
      <div className={`${style.header}`}>
        <Link to="/" className={style.logo}>
          <img src="/resources/img/logo.svg" alt="RAY Newtork" />
        </Link>
        <p className="text-muted">
          Deploy Data Clusters built with Atala PRISM
        </p>
        {/* <div className={style.menu}>
          <Link
            className={style.link}
            activeClassName={style.active}
            to="/"
          >
            Home
          </Link>
          <Link
            className={style.link}
            activeClassName={style.active}
            to="/info"
          >
            Ray Network
          </Link>
        </div> */}
      </div>
      <Tooltip title="Soon" placement="left">
        <Button
          className={`${style.fixed} ant-button cui__btn`}
        >
          <span>
            Visit GitHub
            <img src="/resources/img/github.png" alt="" />
          </span>
        </Button>
      </Tooltip>
    </div>
  )
}

export default props => (
  <Location>
    {locationProps => <Header {...locationProps} {...props} />}
  </Location>
)

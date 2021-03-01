import React from "react"
import { Link } from "gatsby"
import style from "./style.module.scss"

export default () => {
  return (
    <div className="ray__block mb-5" id="submenu">
      <div className="container-fluid">
        <div className={style.submenu}>
          <div className={style.title}>Ray Network Services</div>
          <Link to="/" activeClassName={style.active}>
            <span>Wallet</span>
            <span>Wallet</span>
          </Link>
          <Link to="/ray-token/" activeClassName={style.active}>
            <span>Ray Token</span>
            <span>Ray Token</span>
          </Link>
          <Link to="/stake/" activeClassName={style.active}>
            <span>Stake</span>
            <span>Stake</span>
          </Link>
          <Link to="/rewards/" activeClassName={style.active}>
            <span>Rewards</span>
            <span>Rewards</span>
          </Link>
          <Link to="/swap/" activeClassName={style.active}>
            <span>Swap</span>
            <span>Swap</span>
          </Link>
          <Link to="/kickstart/" activeClassName={style.active}>
            <span>KickStart</span>
            <span>KickStart</span>
          </Link>
          <Link to="/data-containers/" activeClassName={style.active}>
            <span>Data Containers</span>
            <span>Data Containers</span>
          </Link>
          <Link to="/tokens-list/" activeClassName={style.active}>
            <span>Tokens List</span>
            <span>Tokens List</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

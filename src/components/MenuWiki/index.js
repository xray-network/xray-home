/* eslint-disable no-alert */

import React from "react"
import { Link } from "gatsby"
import * as style from "./style.module.scss"

const wiki = [
  {
    title: "Table of Сontents",
    url: "/wiki/",
  },
  {
    title: "Ray Network",
    url: "/wiki/ray-network/",
  },
  {
    title: "Cardano",
    url: "/wiki/cardano/",
  },
  {
    title: "Stake Delegators",
    url: "/wiki/stake-delegators/",
  },
  {
    title: "Liquidity Providers",
    url: "/wiki/liquidity-providers/",
  },
  {
    title: "Logo & Brand",
    url: "/wiki/brand/",
  },
]

const MenuWiki = () => {
  return (
    <div>
      {wiki.map((item, index) => {
        return (
          <Link
            key={index}
            to={item.url}
            className={style.link}
            activeClassName={style.linkActive}
          >
            <span>{item.title}</span>
            <span>{item.title}</span>
          </Link>
        )
      })}
    </div>
  )
}

export default MenuWiki

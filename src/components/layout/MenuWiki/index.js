/* eslint-disable no-alert */

import React from "react"
import { Link } from "gatsby"
import Heading from "@/components/layout/Heading"
import style from "./style.module.scss"

const wiki = [
  {
    title: 'Wiki',
    url: '/wiki',
  },
  {
    title: 'Stake Delegators',
    url: '/wiki/stake-delegators',
  },
  {
    title: 'Liquidity Providers',
    url: '/wiki/liquidity-providers',
  },
  {
    title: 'Ray Network',
    url: '/wiki/ray',
  },
  {
    title: 'Cardano',
    url: '/wiki/cardano',
  },
  {
    title: 'Logo & Brand',
    url: '/wiki/brand',
  },
]

export default () => {
  return (
    <div className="ray__block mb-5">
      <Heading id="solutions">
        Ray <strong className="bolder">Wiki</strong>
      </Heading>
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

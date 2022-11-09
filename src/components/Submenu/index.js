import React from "react"
import { useLocation } from "@reach/router"
import { Link } from "gatsby"
import * as style from "./style.module.scss"
import { ecosystem, xray, developers } from "@/config"

const SubMenu = ({ type = "ecosystem" }) => {
  const location = useLocation()

  const map = {
    ecosystem,
    xray,
    developers,
  }

  const isEcosystem = ecosystem.map((i) => i.url).includes(location.pathname)
  const isXRAY = xray.map((i) => i.url).includes(location.pathname)
  const isDevelopers = developers.map((i) => i.url).includes(location.pathname)
  const isCommunity = location.pathname === "/community/"

  return (
    <div className="ray__block mb-0">
      <div className={style.menu}>
        {(map[type] || []).map((item, index) => {
          return item.external ? (
            <a href={item.url} target="_blank" rel="noopener noreferrer" key={index}>
              {item.dot && <span className={style.dot} />}
              {item.title} <i className="ri ri-ext ri-arrow_up" />
            </a>
          ) : (
            <Link to={item.url} activeClassName={style.linkActive} key={index}>
              {item.title}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default SubMenu

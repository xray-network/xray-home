import React from "react"
import { useLocation } from "@reach/router"
import { Link } from "gatsby"
import { useDispatch } from "react-redux"
import * as style from "./style.module.scss"
import { SVGRay } from "@/svg"
import { ecosystem, xray, developers } from "@/config"

const Menu = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  const switchMegaMenu = () => {
    dispatch({
      type: "settings/SWITCH_MEGA_MENU",
    })
  }

  const isEcosystem = ecosystem.map((i) => i.url).includes(location.pathname)
  const isXRAY = xray.map((i) => i.url).includes(location.pathname)
  const isDevelopers = developers.map((i) => i.url).includes(location.pathname)

  return (
    <div className={style.container}>
      <div className="ray__block mb-0">
        <div className={style.menu}>
          <div className={style.menuLogo}>
            <Link to="/" className={style.logo}>
              <SVGRay />
              <span>Ray Network</span>
            </Link>
          </div>
          <div className={style.menuItems}>
            <Link
              to="/ecosystem/"
              className={isEcosystem ? style.linkActive : ""}
              activeClassName={style.linkActive}
            >
              Ecosystem
            </Link>
            <Link
              to="/xray/"
              className={isXRAY ? style.linkActive : ""}
              activeClassName={style.linkActive}
            >
              XRAY
            </Link>
            <Link
              to="/developers/"
              className={isDevelopers ? style.linkActive : ""}
              activeClassName={style.linkActive}
            >
              Developers
            </Link>
            <Link to="/community/" activeClassName={style.linkActive}>
              Community
            </Link>
          </div>
          <div className={style.menuButtons}>
            <a
              href="https://raywallet.io"
              className="ant-btn ray__btn ray__btn--white ray__btn--round me-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri ri-wallet me-2" />
              <span>RayWallet</span>
            </a>
            <span
              className="ant-btn ray__btn ray__btn--icon ray__btn--round px-3"
              onClick={switchMegaMenu}
              onKeyPress={switchMegaMenu}
              role="button"
              tabIndex="0"
            >
              <i className="ri ri-menu" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu

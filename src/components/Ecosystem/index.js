import React from "react"
import { Link } from "gatsby"
import * as style from "./style.module.scss"
import { ecosystem } from "@/config"

const Ecosystem = () => {
  return (
    <div className="ray__block">
      <div className="ray__title">Ray Network Ecosystem</div>
      <div className="ray__title__descr">
        Explore the <strong>Ray Network</strong> Ecosystem.{" "}
        <strong>10+ unique projects</strong> waiting your DeFi actions
      </div>
      <div className="row">
        {ecosystem.map((item, index) => {
          return (
            <div key={index} className="col-md-4 col-sm-6 col-12">
              <div className={style.item}>
                {item.external && (
                  <a
                    href={item.url}
                    className={style.itemInner}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={style.itemInnerExternal}>
                      <i className="ri ri-ext ri-arrow_up" />
                    </span>
                    <div className={style.itemInnerTitle}>{item.title}</div>
                    <div>{item.descr}</div>
                  </a>
                )}
                {!item.external && (
                  <Link
                    to={item.url}
                    className={style.itemInner}
                    activeClassName={style.itemInnerActive}
                    partiallyActive
                  >
                    <div className={style.itemInnerTitle}>{item.title}</div>
                    <div>{item.descr}</div>
                  </Link>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Ecosystem

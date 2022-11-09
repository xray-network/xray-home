import React from "react"
import * as style from "./style.module.scss"
import { Link } from "gatsby"
import { developers } from "@/config"

const Developers = () => {
  return (
    <div className="ray__block">
      <div className="ray__title">Build Ray Network</div>
      <div className="ray__title__descr mb-5">
        Dive into the world of <strong>DeFi apps, integrations, and developer tooling</strong> built on top of the{" "}
        <strong>Ray Network</strong>
      </div>
      <div className="row">
        {developers.map((item, index) => {
          return (
            <div key={index} className="col-md-4 col-sm-6 col-12">
              <div className={style.item}>
                {item.external && (
                  <a href={item.url} className={style.itemInner} target="_blank" rel="noopener noreferrer">
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

export default Developers

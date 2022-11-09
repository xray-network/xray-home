import React from "react"
import { Link } from "gatsby"
import { todo } from "@/config"
import * as style from "./style.module.scss"

const WhereToStart = () => {
  return (
    <div>
      <div className="ray__block pt-5">
        <div className="ray__title">Explore Ray Network & Use The Ecosystem </div>
        <div className="ray__title__descr">
          <strong>Where To Start</strong>
        </div>
        <div className="mb-4">
          <div className="row">
            {todo.map((item, index) => {
              return (
                <div key={index} className="col-md-4 col-sm-6 col-12">
                  <div className={style.item}>
                    {item.external && (
                      <a href={item.url} className={style.itemInner} target="_blank" rel="noopener noreferrer">
                        <span className={style.itemInnerExternal}>
                          <i className="ri ri-ext ri-arrow_up" />
                        </span>
                        <div className={style.itemInnerTitle}>
                          {index + 1}. {item.title}
                        </div>
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
                        <div className={style.itemInnerTitle}>
                          {index + 1}. {item.title}
                        </div>
                        <div>{item.descr}</div>
                      </Link>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhereToStart

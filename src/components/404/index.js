import React from "react"
import style from "./style.module.scss"
import { Link } from "gatsby"

export default () => {
  return (
    <div className="cui__block">
      <div className={style.error}>
        <div className="row">
          <div className="col-lg-6">
            <div className={style.pig}>
              <img src="/resources/img/pig.svg" title="Ray Network Piglet" alt="Ray Network Piglet" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className={style.description}>
              <h1 className={style.title}>Page not found</h1>
              <p className="mb-4">
                This page is broken or the page has been moved. Try these pages instead:
              </p>
              <div className={style.links}>
                <Link className="mr-4 cui__link" to="/">
                  Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

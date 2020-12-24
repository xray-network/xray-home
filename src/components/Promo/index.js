import React from "react"
import { Tooltip } from "antd"
import style from "./style.module.scss"
import Rays from "../../../static/resources/img/rays.inline.svg"

export default () => {
  return (
    <div className="cui__block">
      <div className="container-fluid">
        <div className={style.header}>
          <div className={style.rays}>
            <Rays />
          </div>
          <div className={style.content}>
            <h1 className={`${style.title} mb-3`}>
              RAY pools are looking<br /> for delegators
            </h1>
            <div className={style.description}>
              <h5 className="mb-2">
                Join indirect funding by delegating your ADA to RAY pools. This will fund the development of a service that will provide a new approach to sharing data between members of various businesses. Data-models WYSIWYG editor, UI builder for admin panels, and universal client apps (desktop and mobile).
              </h5>
              <h5 className="mb-4 pb-3">
                Also, delegation is currently the only way to get RAYs.
              </h5>
            </div>
            <a href="#about" className="cui__btn mr-3">Read More</a>
            <Tooltip title="Soon">
              <a
                href="/"
                className="cui__btn cui__btn--light"
                onClick={e => e.preventDefault()}
              >
                Demo
              </a>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from "react"
import style from "./style.module.scss"

export default () => {
  return (
    <div className={style.outer}>
      <div className={style.bg}>
        <img src="/resources/images/bg.jpg" alt="" />
        <img src="/resources/images/bg.jpg" alt="" />
        <img src="/resources/images/bg.jpg" alt="" />
      </div>
    </div>
  )
}

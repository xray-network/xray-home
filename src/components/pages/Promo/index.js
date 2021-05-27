import React from "react"
import style from "./style.module.scss"

import SvgCardano from "../../../../static/resources/cardano.inline.svg"

export default () => {
  return (
    <div className="ray__block ray__block--bottom">
      <h1 className={style.text}>
        Advanced Ecosystem for{' '}
        <span className={style.cardano}>
          <SvgCardano />
        </span>{' '}
        Cardano Blockchain Platform
      </h1>
      <h2>
        <strong className="">All about ADA finances (DeFi) in one place</strong>
      </h2>
    </div>
  )
}

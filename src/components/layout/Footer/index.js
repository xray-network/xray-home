import React from "react"
import style from "./style.module.scss"

export default () => {
  return (
    <div className="ray__block ray__block--top">
      <div className={style.footer}>
        <div>
          <div className={style.logo}>
            <img src="/resources/logo.svg" alt="" />
            <span>Ray Network</span>
          </div>
          <p>
            Advanced Ecosystem for Cardano Blockchain Platform
          </p>
        </div>
        <div className={style.info}>
          <span>Powered with</span>{' '}
          <a
            href="https://cardano.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <strong>Cardano</strong>
            <img className={style.cardano} src="/resources/images/cardano.png" alt="Cardano" />
          </a>
        </div>
      </div>
    </div>
  )
}

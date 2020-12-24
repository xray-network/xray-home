import React from "react"
import style from "./style.module.scss"

export default () => {
  return (
    <div className="cui__block mb-4">
      <div className={`container-fluid ${style.footer}`}>
        <div className="row">
          <div className="col-md-6">
            <img class={style.logo} src="/resources/img/logo.svg" alt="RAY Network" />
            <p className="text-muted">Deploy Data Clusters built with Atala PRISM</p>
          </div>
          <div className="col-md-6 text-left text-md-right">
            Powered with Cardano
            <img className={style.cardano} src="/resources/img/cardano.png" alt="Cardano" />
          </div>
        </div>
      </div>
    </div>
  )
}

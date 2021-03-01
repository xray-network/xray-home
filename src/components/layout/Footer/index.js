import React from "react"
import { Link } from "gatsby"
import style from "./style.module.scss"

export default () => {
  return (
    <div className="ray__block mb-4">
      <div className={`container-fluid ${style.footer}`}>
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className={style.logoContainer}>
              <div className={style.logo}>
                <img src="/resources/logo.svg" alt="" />
                <div className={style.name}>NETWORK</div>
              </div>
            </Link>
            <p>
              <strong>Advanced Ecosystem</strong> for Cardano Blockchain Platform
            </p>
          </div>
          <div className="col-md-6 text-left text-md-right">
            Powered with{' '}
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
    </div>
  )
}

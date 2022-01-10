import React from "react"
import { Link } from "gatsby"
import * as style from "./style.module.scss"

const Head = () => {
  return (
    <div className={style.container}>
      <div className="ray__block text-center mb-0">
        <Link to="/xray/distribution/">
          <strong>
            <i className="ri ri-activity" /> XRAY Tokens 0% FEE ISPO is LIVE.
            Take part in the FREE tokens distribution &rarr;
          </strong>
        </Link>
      </div>
    </div>
  )
}

export default Head

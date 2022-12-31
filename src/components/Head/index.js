import React from "react"
import { Link } from "gatsby"
import * as style from "./style.module.scss"

const Head = () => {
  return (
    <div className={style.container}>
      <div className="ray__block text-center mb-0">
        <Link to="/xray/swap-event/">
          <strong>
            <span className="badge rounded-pill badge-success me-1">NEW</span>{" "}
            The Swap Event has been extended until July 1, 2023. Swap your old XRAY token for the new one. Read more &rarr;
          </strong>
        </Link>
      </div>
    </div>
  )
}

export default Head

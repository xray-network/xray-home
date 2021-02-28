import React from "react"
import style from "./style.module.scss"

export default () => {
  return (
    <div className="ray__block">
      <div className="container-fluid">

        <h2 className="ray__heading mb-4">Development Updates</h2>
        <p className="mb-5">
          Tracking development activity of the Ray Network Github repositories —{' '}
          <a
            href="https://github.com/ray-network/"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://github.com/ray-network/
          </a>
        </p>
        <div className={style.updates}>
          [table]
        </div>
      </div>
    </div>
  )
}

import React from "react"
import * as style from "./style.module.scss"

const RayData = () => {
  return (
    <div className="ray__block">
      <div className="ray__title">RayData</div>
      <div className="ray__title__descr">
        <strong>RayData</strong>, on-chain storage with access roles
      </div>
      <div>
        <p>
          RayData is a protocol that standardizes information written in a
          blockchain. The basic model is containers that are created by users,
          with write or read access allowed by the creator.
        </p>
        <p>
          For example, your medical records are always with you: when you visit
          a new doctor you can share the necessary historical data for your
          check-up, while at the same time the doctor will trust this
          information, knowing that it is really yours.
        </p>
        <p>
          There can be hundreds of such use cases in your daily life, from
          medical services, to car maintenance, to a trip to the store. The
          blockchain era will make your life more secure and simpler.
        </p>
        <p>
          Management of private information is made easier with{" "}
          <a
            href="https://www.atalaprism.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="ray__link"
          >
            Atala PRISM
          </a>
          .
        </p>
      </div>
      <div className="mt-4 pt-3 mb-5">
        <span className="d-inline-block me-3 mb-2">
          <a
            className="ray__btn ray__btn--round"
            href="https://raydata.io"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="me-2">RayData</span>
            <i className="ri ri-ext ri-arrow_up" />
          </a>
        </span>
        <span className="d-inline-block">
          <a
            className="ray__btn ray__btn--round ray__btn--transparent"
            href="https://docs.raynetwork.io/services/raydata"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="me-2">SDK / Documentation</span>
            <i className="ri ri-ext ri-arrow_up" />
          </a>
        </span>
      </div>
      <div className={style.image}>
        <img
          src="/resources/images/scheme.png"
          alt=""
          className="img-fluid"
        />
      </div>
    </div>
  )
}

export default RayData

import React from "react"
import { useSelector } from "react-redux"
import { SVGLink } from "@/svg"
import Heading from "@/components/Heading"

const Data = () => {
  const theme = useSelector((state) => state.settings.theme)

  return (
    <div className="ray__block">
      <Heading id="data">
        <strong>RayData</strong>, on-chain storage with access roles
      </Heading>
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
            <span className="ray__icon">
              <SVGLink />
            </span>
          </a>
        </span>
        <span className="d-inline-block">
          <a
            className="ray__btn ray__btn--round ray__btn--transparent"
            href="https://docs.raynetwork.com/services/raydata"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>SDK / Documentation</span>
          </a>
        </span>
      </div>
      <div>
        {theme === "default" && (
          <img
            src="/resources/images/scheme.png"
            alt=""
            className="img-fluid"
          />
        )}
        {theme !== "default" && (
          <img
            src="/resources/images/scheme-dark.png"
            alt=""
            className="img-fluid"
          />
        )}
      </div>
    </div>
  )
}

export default Data

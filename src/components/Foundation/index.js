import React from "react"

const Foundation = () => {
  return (
    <div className="ray__block">
      <div className="ray__title">Ray Foundation</div>
      <div className="ray__title__descr">
        We exist to <strong>enable community-driven innovation</strong> to benefit people around the world
      </div>
      <div>
        <p className="mb-5">
          We are a non-profit foundation that is responsible for contracting protocol maintainers, funding ecosystem
          development, and shepherding core governance of the Ray Network
        </p>
      </div>
      <div className="mt-4 pt-3 mb-5">
        <span className="d-inline-block me-3 mb-2">
          <a
            className="ray__btn ray__btn--round"
            href="https://ray.foundation"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="me-2">Ray Foundation</span>
            <i className="ri ri-ext ri-arrow_up" />
          </a>
        </span>
      </div>
    </div>
  )
}

export default Foundation

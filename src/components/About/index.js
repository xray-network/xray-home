import React from "react"
import style from "./style.module.scss"

export default () => {
  return (
    <div className="cui__block border-top pt-5" id="about">
      <div className="container-fluid pt-4">
        <div className="text-center">
          <h1 className={`${style.title} mb-3`}>About RAY Network</h1>
          <h4 className="mb-4">
            Welcome to the world of Internet 3.0 and IoT
          </h4>
        </div>
        <div className={style.header}>
          <div className={style.description}>
            <p className="text-text">
              Ray Network is an integrated data exchange system between your customers and your business. In one click you can deploy a cluster in cloud, create a user interface (admin panel) with the business logic you need using Visual Builder and your CRM (or whatever) is ready.
              Your customers simply download the Ray Network app (or you can use an API for build your own app), authorize using Atala PRISM, and grant access to data sharing between app and yours or any other clusters.
            </p>
          </div>
        </div>
        <div className={style.outer}>
          <div className={style.container}>
            <div className={style.apps}>
              <img src="/resources/img/apps.png" alt="" />
            </div>
            <div className={style.scheme}>
              <a
                href="/resources/img/ray-blockchain.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/resources/img/ray-blockchain.jpg" alt="RAY Network Shceme" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mb-5 pb-2">
          <h1 className={style.title}>
            More information coming soon!
            {' '}
            <span role="img" aria-label="">🚀</span>
          </h1>
        </div>
      </div>
    </div >
  )
}

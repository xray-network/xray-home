import React from "react"
import * as style from "./style.module.scss"

const Team = () => {
  return (
    <div className="ray__block">
      <div className="ray__title">Robots and Humans</div>
      <div className="ray__title__descr">
        <strong>Ray Network</strong> team
      </div>
      <p>
        Our Visual Builder development team has some great full-stack developers
        who are ready to take on their assigned tasks. The result is the already
        working{" "}
        <a href="http://raywallet.io" target="_blank" rel="noopener noreferrer">
          RayWallet
        </a>
        ,{" "}
        <a href="http://raystake.io" target="_blank" rel="noopener noreferrer">
          RayStake
        </a>
        ,{" "}
        <a href="http://cardanolist.io" target="_blank" rel="noopener noreferrer">
          CardanoList.io
        </a>
        , and{" "}
        <a href="http://minterr.io" target="_blank" rel="noopener noreferrer">
          Minterr.io
        </a>
        . At the heart of which is our{" "}
        <a
          href="https://github.com/ray-network/cardano-web3.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          CardanoWeb3.js
        </a>{" "}
        framework, which allows you to work with the Cardano blockchain without
        headaches.
      </p>
      <p>
        We believe that a small group of professionals is ready to solve big
        problems. An example of this could be Uniswap, when several people made
        the world's # 1 distributed token trading exchange. We have a lot of
        work ahead of us, finding the best professionals in the crypto industry
        who would be ready to make the largest DeFi platform for Cardano. We
        believe that these goals are achievable and we are on the way to it!
      </p>
      <div className={style.quote}>
        <div>"</div>
        <div>
          We have experience integrating Ethereum blockchain solutions into our
          clients' products, so we have something to compare Cardano with. We
          believe that IOG team will solve all their tasks and Cardano eUTXO
          model will become the best blockchain technology in the near future!
        </div>
      </div>
      <div className={style.team}>
        <div className={style.teammate}>
          <div className={style.teammateImage}>
            <img src="/resources/images/1519127873441.jpg" alt="" />
          </div>
          <div>
            <div>
              <strong>Nick Tabolich</strong>
            </div>
            <div>Founder & Core Developer</div>
            <div>
              <a
                href="https://www.linkedin.com/in/nicktabolich/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <div className={style.teammate}>
          <div className={style.teammateImage}>
            <img src="/resources/images/3441151912787.jpg" alt="" />
          </div>
          <div>
            <div>
              <strong>Alex Tarasov</strong>
            </div>
            <div>Core & Infrastructure Developer</div>
            <div>
              <a
                href="https://www.linkedin.com/in/alexey-tarasov-13600048/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <div className={style.teammate}>
          <div className={style.teammateImage}>+5</div>
          <div>
            <div>
              <strong>Full-Stack Developers</strong>
            </div>
            <div>Full & Part-Time Employment </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team

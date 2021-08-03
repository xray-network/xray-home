import React from "react"
import Heading from "@/components/shared/Heading"
import * as style from "./style.module.scss"

const AboutCompany = () => {
  return (
    <div className="ray__block">
      <Heading id="team">
        <strong>Ray Network</strong> Team
      </Heading>
      <p>
        We provide full circle integrations of different web systems for clients from all over the world based on our framework - <a href="https://visualbuilder.cloud" target="_blank" rel="noopener noreferrer">Visual Builder</a>. Since 2017 we have successfully implemented several cryptocurrency projects for our clients, and in 2021 we are ready and able to build own ecosystem.
      </p>
      <p>We believe that a small group of professionals is ready to solve big problems. An example of this could be Uniswap, when several people made the world's # 1 distributed token trading exchange.</p>
      <p>Our Visual Builder development team has some great full-stack developers who are ready to take on their assigned tasks. The result is the already working <a href="http://raywallet.io" target="_blank" rel="noopener noreferrer">Ray Wallet</a> and <a href="http://minterr.io" target="_blank" rel="noopener noreferrer">Minterr.io</a>. At the heart of which is our <a href="https://github.com/ray-network/cardano-web3.js" target="_blank" rel="noopener noreferrer">CardanoWeb3.js</a> framework, which allows you to work with the Cardano blockchain without headaches.</p>
      <p>We have a lot of work ahead of us, finding the best professionals in the crypto industry who would be ready to make the largest DeFi platform for Cardano. We believe that these goals are achievable and we are on the way to it!</p>
      <div className={style.quote}>
        <div>
          "
        </div>
        <div>We have experience integrating Ethereum into our clients' products, so we have something to compare Cardano with. We believe that IOG team will solve all their tasks and Cardano eUTXO model will become the best blockchain technology in the near future!</div>
      </div>
      <div className={style.ceo}>
        <div className={style.ceoImage}><img src="/resources/images/1519127873441.jpeg" alt="" /></div>
        <div>
          <div><strong>Nick Tabolich</strong></div>
          <div>Ray Labs DAO Founder</div>
          <div>
            <a href="https://www.linkedin.com/in/nicktabolich/" target="_blank" rel="noopener noreferrer">Linkedin</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCompany

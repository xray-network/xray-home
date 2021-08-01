import React from "react"
import Heading from "@/components/shared/Heading"
import { SVGDiamond, SVGZap, SVGBookmark, SVGWallet, SVGShieldCheck, SVGCompass } from "@/svg"
import * as style from "./style.module.scss"

const items = [
  {
    title: "Future-Proof Blockchain Solutions",
    icon: <SVGCompass />,
  },
  {
    title: "Secure and Sustainable DApps",
    icon: <SVGShieldCheck />,
  },
  {
    title: "Audited Smart Contracts",
    icon: <SVGBookmark />,
  },
  {
    title: "Multi-Featured Light Wallet",
    icon: <SVGWallet />,
  },
  {
    title: "Community Loyalty Programs",
    icon: <SVGDiamond />,
  },
  {
    title: "Low Latency Infrastructure",
    icon: <SVGZap />,
  },
]

const About = () => {
  return (
    <div className="ray__block">
      <div className={style.features}>
        <Heading id="about">
          About Ray Network
        </Heading>
        <p>Ray Network is an advanced <a href="https://github.com/ray-network" target="_blank" rel="noopener noreferrer" className="ray__link">open source</a> ecosystem for the Cardano blockchain platform. It includes a light wallet with many features such as: sending and receiving funds, defi swap, NFT marketplace, staking center and others.</p>
        <p>
          Our services increase blockchain use adoption; they empowers regular users, developers, creators, liquidity providers and traders to participate in a financial marketplace that is open and accessible to all.
        </p>
        <p className="mb-5">
          Ray Network was founded by Sellpixels.com, owner of the{' '}
          <a href="https://visualbuilder.cloud/" target="_blank" rel="noopener noreferrer" className="ray__link">Visual Builder</a>{' '}
          SAAS platform that helps hundreds of technology companies around the world build web applications. Sellpixels.com provides full circle software development services such as frontend, backend, microservices, ci/cd, ui/ux, and more.
        </p>
        <div className="row">
          {items.map((item, index) => (
            <div key={index} className="col-lg-4 col-sm-6 col-12">
              <div className={style.item}>
                <div className={style.icon}>
                  <span className="ray__icon">
                    {item.icon}
                  </span>
                </div>
                <div className={style.title}>{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About

import React from "react"
import { Helmet } from "react-helmet"
import LayoutWiki from "@/layouts/Wiki"
import style from "./style.module.scss"

const logos = ['logo.png', 'logo-inverse.png', 'logo-white.png', 'logo-black.png']
const svg = ['logo.svg', 'logo-inverse.svg', 'logo-white.svg', 'logo-black.svg']
const logosFull = [
  'ray-network.png',
  'ray-wallet.png',
  'ray-xray.png',
  'ray-swap.png',
  'ray-stake.png',
  'ray-rewards.png',
  'ray-kickstart.png',
  'ray-nft.png',
  'ray-data-containers.png',
  'ray-tokens-list.png',
  'ray-docs.png',
  'ray-wiki.png',
  'ray-cardano-web3.png',
]

const media = [
  'diamond.png',
  'xray.png',
  'trolley.png',
  'pig.png',
  'rocket.png',
  'lambo.png',
  'hodl-trianle.png',
  'hodl-word.png',
  'chart-down.png',
  'chart-up.png',
  'dispersion.png',
  'coin-ray.png',
  'coin-ada.png',
  'coin-ergo.png',
]

export default () => {
  return (
    <LayoutWiki>
      <Helmet title="Logo & Brand" />
      <div className="ray__block">
        <h5>Font & Colors</h5>
        <p>
          Font: <span className="ray__ticker text-active">Inter</span> - <a href="https://fonts.google.com/specimen/Inter">https://fonts.google.com/specimen/Inter</a>
        </p>
        <p>
          Blue color: <span className="ray__ticker text-active">#1940ed</span> Dark color: <span className="ray__ticker text-active">#04021D</span>
        </p>
        <div className="ray__line" />
        <h5>Logo & Brand</h5>
        <div className={style.brandLogos}>
          {logos.map((item, index) => <img src={`/wiki/brand/${item}`} key={index} alt="" />)}
        </div>
        <div className={style.brandLogosFull}>
          <div className="row">
            {logosFull.map((item, index) => (
              <div className="col-md-4">
                <div className={style.brandDark}>
                  <img src={`/wiki/brand/${item}`} key={index} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="ray__line" />
        <h5>Svg</h5>
        <div className={style.brandLogos}>
          {svg.map((item, index) => <img src={`/wiki/brand/${item}`} key={index} alt="" />)}
        </div>
        <div className="ray__line" />
        <h5>Media Files</h5>
        <div className={style.brandMedia}>
          {media.map((item, index) => <img src={`/wiki/media/${item}`} key={index} alt="" />)}
        </div>
        <div className="ray__line" />
      </div>
    </LayoutWiki>
  )
}

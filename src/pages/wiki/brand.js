import React from "react"
import { Helmet } from "react-helmet"
import LayoutWiki from "@/layouts/Wiki"
import Heading from "@/components/shared/Heading"
import * as style from "./style.module.scss"

const svg = ['logo.svg', 'logo-inverse.svg', 'logo-white.svg', 'logo-black.svg']

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

const Page = () => {
  return (
    <LayoutWiki>
      <Helmet title="Logo & Brand" />
      <Heading id="logo-and-brand">
        <strong>Logo & Brand</strong>
      </Heading>

      <h5><strong>Logo (Svg)</strong></h5>
      <div className="mb-5">
        <div className={style.brandLogos}>
          {svg.map((item, index) => <img src={`/resources/brand/${item}`} key={index} alt="" />)}
        </div>
      </div>

      <h5><strong>Font & Colors</strong></h5>
      <p>
        Font: <span className="ray__ticker text-active">Inter</span> - <a href="https://fonts.google.com/specimen/Inter">https://fonts.google.com/specimen/Inter</a>
      </p>
      <p className="mb-5">
        Blue: <span className="ray__ticker text-active">#1940ed</span>{' '}
        Dark: <span className="ray__ticker text-active">#253858</span>{' '}
        Gray: <span className="ray__ticker text-active">#F4F4F5</span>{' '}
      </p>

      <h5><strong>Media Files</strong></h5>
      <div className={style.brandMedia}>
        {media.map((item, index) => <img src={`/resources/stickers/${item}`} key={index} alt="" />)}
      </div>
    </LayoutWiki>
  )
}

export default Page
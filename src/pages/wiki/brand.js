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
        Logo & Brand
      </Heading>

      <h5>Logo (Svg)</h5>
      <div className="mb-5">
        <div className={style.brandLogos}>
          {svg.map((item, index) => <img src={`/resources/brand/${item}`} key={index} alt="" />)}
        </div>
      </div>

      <h5>Font & Colors</h5>
      <p>
        Font: <span className="ray__ticker text-active">Inter</span> - <a href="https://fonts.google.com/specimen/Inter">https://fonts.google.com/specimen/Inter</a>
      </p>
      <p className="mb-5">
        Blue color: <span className="ray__ticker text-active">#1940ed</span>{' '}
        Dark color: <span className="ray__ticker text-active">#04021D</span>{' '}
        Pastel color: <span className="ray__ticker text-active">#FEEDEB</span>{' '}
      </p>

      <h5>Media Files</h5>
      <div className={style.brandMedia}>
        {media.map((item, index) => <img src={`/resources/stickers/${item}`} key={index} alt="" />)}
      </div>
    </LayoutWiki>
  )
}

export default Page
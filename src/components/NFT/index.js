import React from "react"
import AliceCarousel from "react-alice-carousel"
import { Button } from "antd"
import Heading from "@/components/Heading"
import { SVGLink } from "@/svg"
import * as style from "./style.module.scss"

const items = [
  "1.gif",
  "2.png",
  "3.gif",
  "4.gif",
  "5.png",
  "6.png",
  "7.gif",
  "8.gif",
  "9.png",
  "10.png",
  "11.png",
  "12.png",
]

const Nft = () => {
  return (
    <div className="ray__block">
      <Heading id="nft">
        <strong>RayNFT</strong>, Cardano NFT Marketplace
      </Heading>
      <p>
        RayNFT is a decentralized marketplace for digital goods, including
        collectibles, gaming items, digital art, and other digital assets that
        are backed by a blockchain. On RayNFT, you can buy, sell, and trade any
        of these items with anyone in the world.
      </p>
      <p className="mb-5">
        Trading on on RayNFT takes place through a smart contract, meaning that
        no central authority ever holds custody of your items.
      </p>
      <h5 className="mb-5">
        <strong>What is an NFT?</strong>
      </h5>
      <p className="mb-5">
        NFTs are tokens that we can use to represent ownership of unique items.
        They let us tokenise things like art, collectibles, even real estate.
        They can only have one official owner at a time and they're secured by
        the Cardano blockchain – no one can modify the record of ownership or
        copy/paste a new NFT into existence.
      </p>
      <div className="mt-4 pt-3 mb-5">
        <span className="d-inline-block me-3 mb-2">
          <Button
            className="ray__btn ray__btn--round"
            href="https://app.raywallet.io/#/nft"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="me-2">RayNFT</span>
            <span className="ray__icon">
              <SVGLink />
            </span>
          </Button>
        </span>
        <span className="d-inline-block">
          <a
            className="ray__btn ray__btn--round ray__btn--transparent"
            href="https://docs.rraayy.com/smart-contracts/ray-nft"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>SDK / Documentation</span>
          </a>
        </span>
      </div>
      <div className={`${style.slider} mb-4`}>
        <div className={style.sliderInner}>
          <AliceCarousel
            autoHeight={false}
            infinite
            disableButtonsControls
            disableDotsControls
            autoPlay
            autoPlayInterval={3000}
            mouseTracking
            autoWidth
          >
            {items.slice(0, -6).map((item, index) => (
              <div key={index} className={style.itemOuter}>
                <div className={style.item}>
                  <div className="d-flex mb-3">
                    <div className={style.itemCollection}>R</div>
                    <div className={style.itemCollection}>W</div>
                    <div className="ms-auto">...</div>
                  </div>
                  <div className={style.itemImage}>
                    <img src={`/resources/nft/${item}`} alt="" />
                  </div>
                  <div className={style.itemTitle}>
                    xray{Math.random().toString(36).substring(7)}
                  </div>
                  <a
                    href="https://app.raywallet.io/#/nft"
                    className={`${style.itemLink} ray__link`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Place Bid
                  </a>
                </div>
              </div>
            ))}
          </AliceCarousel>
        </div>
      </div>
      <div className={style.slider}>
        <div className={style.sliderInner}>
          <AliceCarousel
            autoHeight={false}
            infinite
            disableButtonsControls
            disableDotsControls
            autoPlay
            autoPlayInterval={3000}
            mouseTracking
            autoWidth
          >
            {items.slice(6).map((item, index) => (
              <div key={index} className={style.itemOuter}>
                <div className={style.item}>
                  <div className="d-flex mb-3">
                    <div className={style.itemCollection}>R</div>
                    <div className={style.itemCollection}>D</div>
                    <div className="ms-auto">...</div>
                  </div>
                  <div className={style.itemImage}>
                    <img src={`/resources/nft/${item}`} alt="" />
                  </div>
                  <div className={style.itemTitle}>
                    xray{Math.random().toString(36).substring(7)}
                  </div>
                  <a
                    href="https://app.raywallet.io/#/nft"
                    className={`${style.itemLink} ray__link`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Place Bid
                  </a>
                </div>
              </div>
            ))}
          </AliceCarousel>
        </div>
      </div>
    </div>
  )
}

export default Nft

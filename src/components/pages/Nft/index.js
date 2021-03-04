import React from "react"
import AliceCarousel from "react-alice-carousel"
import { Button, Tooltip } from "antd"
import style from "./style.module.scss"

const items = [
  '1.gif', '2.png', '3.gif', '4.gif', '5.jpg', '6.gif',
  '7.gif', '8.gif', '9.gif', '10.gif', '11.png', '12.png',
]

export default () => {
  return (
    <div className="ray__block">
      <div className="container-fluid">

        <h2 className="ray__heading mb-4">Ray NFT Marketplace</h2>
        <p>
          Ray NFT is a decentralized marketplace for digital goods, including collectibles, gaming items, digital art, and other digital assets that are backed by a blockchain like Ethereum. On Ray NFT, you can buy, sell, and trade any of these items with anyone in the world.
          </p>
        <p>
          Trading on on Ray NFT happens through a smart contract, meaning that no central authority ever holds custody of your items.
          </p>
        <div className="mt-4 pt-3 mb-5">
          <Button
            className="ray__btn mr-3"
            href="https://wallet.rraayy.com/#/rewards"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>
              Visit NFT Marketplace
            </span>
            <i className="fe fe-arrow-up-right ray__btn__icon" />
          </Button>
          <Tooltip title="soon">
            <span className="d-inline-block">
              <Button
                className="ray__btn"
                href="/"
                disabled
              >
                <span>
                  Wiki
                </span>
              </Button>
            </span>
          </Tooltip>
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
                      <div className={style.itemCollection}>
                        R
                      </div>
                      <div className={style.itemCollection}>
                        <i className="fe fe-user" />
                      </div>
                      <div className="ml-auto">
                        <i className="fe fe-more-horizontal" />
                      </div>
                    </div>
                    <div className={style.itemImage}>
                      <img src={`/resources/nft/${item}`} alt="" />
                    </div>
                    <div className={style.itemTitle}>
                      xray{Math.random().toString(36).substring(7)}
                    </div>
                    <a
                      href="https://wallet.rraayy.com/#/nft"
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
                      <div className={style.itemCollection}>
                        R
                      </div>
                      <div className={style.itemCollection}>
                        <i className="fe fe-user" />
                      </div>
                      <div className="ml-auto">
                        <i className="fe fe-more-horizontal" />
                      </div>
                    </div>
                    <div className={style.itemImage}>
                      <img src={`/resources/nft/${item}`} alt="" />
                    </div>
                    <div className={style.itemTitle}>
                      xray{Math.random().toString(36).substring(7)}
                    </div>
                    <a
                      href="https://wallet.rraayy.com/#/nft"
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
    </div>
  )
}

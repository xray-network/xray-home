import React, { useState, useEffect } from "react"
import { Input } from "antd"
import { useSelector } from "react-redux"
import Heading from "@/components/Heading"
import { format } from "@/utils"
import * as style from "./style.module.scss"

const XrayCalculator = () => {
  const pools = useSelector((state) => state.settings.pools)
  const prices = useSelector((state) => state.settings.prices)
  const [amount, setAmount] = useState(undefined)
  const [totalAda, setTotalAda] = useState(0)
  const [totalRay, setTotalRay] = useState(0)

  const rate = pools?.nextRate

  useEffect(() => {
    setTotalAda(amount * 0.05 || 0)
    setTotalRay((amount / (rate / 1000000)) * 73 || 0)
  }, [amount, rate])

  console.log(prices)

  return (
    <div className="ray__block">
      <Heading id="pools">
        <strong>Cardano staking calculator</strong>, calculate your returns
      </Heading>
      <p className="mb-5">
        Calculate your income in ADA and XRAY with rewards calculator. This form
        will help you calculate your income level over the course of a year,
        month, and era (5 days). Enter the number of ADAs you want to delegate
        to the RAY pools.
      </p>
      <div className="row mb-5">
        <div className="col-12 col-sm-4 mb-4">
          <div className="ray__left ray__left--dark">
            <div className="ray__card__value">
              {format(prices?.cardano?.usd, 2) || 0}$
            </div>
            <div>ADA Price</div>
          </div>
        </div>
        <div className="col-12 col-sm-4 mb-4">
          <div className="ray__left ray__left--dark">
            <div className="ray__card__value">
              {format(prices?.bitcoin?.usd, 2) || 0}$
            </div>
            <div>BTC Price</div>
          </div>
        </div>
        <div className="col-12 col-sm-4 mb-4">
          <div className="ray__left ray__left--dark">
            <div className="ray__card__value">TBD</div>
            <div>XRAY Price</div>
          </div>
        </div>
      </div>
      <div className="ray__left ray__left--dark">
        <div className="mb-4">
          <Input
            value={amount}
            onChange={({ target: { value } }) => setAmount(value)}
            placeholder="Enter ADA amount..."
            size="large"
          />
        </div>
        <div className={style.performance}>
          <div className="row">
            <div className="col-md-6">
              <ul>
                <li>
                  ADA ROI:{" "}
                  <strong>
                    ~ 5% <sup>/ Year</sup>
                  </strong>
                </li>
              </ul>
              <ul className="mb-4 mb-md-0">
                <li>
                  Year Returns:{" "}
                  <strong>
                    {format(totalAda, 2)}{" "}
                    <span className="ray__ticker">ADA</span>
                  </strong>{" "}
                  <sup>{format(totalAda * prices?.cardano?.usd, 2)}$</sup>
                </li>
                <li>
                  Month Returns:{" "}
                  <strong>
                    {format(totalAda / 12, 2)}{" "}
                    <span className="ray__ticker">ADA</span>
                  </strong>{" "}
                  <sup>{format((totalAda / 12) * prices?.cardano?.usd, 2)}$</sup>
                </li>
                <li>
                  Epoch Returns:{" "}
                  <strong>
                    {format(totalAda / 73, 2)}{" "}
                    <span className="ray__ticker">ADA</span>
                  </strong>{" "}
                  <sup>{format((totalAda / 73) * prices?.cardano?.usd, 2)}$</sup>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li>
                  XRAY Rate: {" "}
                  <strong>
                    {rate / 1000000} <span className="ray__ticker">ADA</span> / 1{" "}
                    <span className="ray__ticker">XRAY</span> <sup>/ Epoch</sup>
                  </strong>
                </li>
              </ul>
              <ul className="mb-0">
                <li>
                  Year Returns:{" "}
                  <strong>
                    {format(totalRay)} <span className="ray__ticker">XRAY</span>
                  </strong>{" "}
                </li>
                <li>
                  Month Returns:{" "}
                  <strong>
                    {format(totalRay / 12)}{" "}
                    <span className="ray__ticker">XRAY</span>
                  </strong>{" "}
                </li>
                <li>
                  Epoch Returns:{" "}
                  <strong>
                    {format(totalRay / 73)}{" "}
                    <span className="ray__ticker">XRAY</span>
                  </strong>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default XrayCalculator

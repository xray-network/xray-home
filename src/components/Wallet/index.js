import React from "react"
import { Tooltip, Input, notification } from "antd"
import style from "./style.module.scss"

export default () => {
  const registerWallet = e => {
    e.preventDefault()

    notification.warning({
      message: 'RAY Wallet rewards registration',
      description: <div>Registration daemon will be deployed soon.<br />Stay tuned!</div>,
      placement: 'topLeft',
    })
  }

  return (
    <div className="cui__block">
      <div className="container-fluid">
        <div className={style.outer}>
          <div className={`${style.unlock} d-flex align-items-start flex-column`}>
            <span className={style.soon}>SOON</span>
            <div className="mb-auto">
              <img className={style.wallet} src="/resources/img/wallet.png" alt="" />
              <h1 className="mb-2">
                <strong className="mr-3">RAY Network Funding Program</strong>
              </h1>
              <h3 className="mb-3">
                <span>Distribution instructons</span>
              </h3>
              <div className={style.descr}>
                <ul className="text-muted">
                  <li>Delegate your ADA to any RAY pool</li>
                  <li>Download RAY wallet and generate RAY address</li>
                  <li>Enter RAY address to form below and press "Register Wallet" button</li>
                  <li>Send 1ADA from delegated address to generated address from form below </li>
                  <li>Receive RAYs for <Tooltip title="Staking of 1ADA will generate 0.01RAY"><span className="cui__link cui__link__underlined">live</span></Tooltip> and <Tooltip title="Staking of 1ADA will generate 1RAY"><span className="cui__link cui__link__underlined">active</span></Tooltip> stake to registered wallet every 24 hours</li>
                </ul>
              </div>
              <div className={style.form}>
                <div className="mb-3 pt-3">
                  <Input size="large" className={style.input} placeholder="Your RAY address" />
                </div>
                <a
                  target="_blank"
                  href="/"
                  onClick={e => registerWallet(e)}
                  rel="noopener noreferrer"
                  className="cui__btn"
                >
                  Register Wallet
                </a>
              </div>
            </div>
            <div>
              <div className="mb-2 mt-5">
                <small className="text-muted">
                  <strong>Download Wallet</strong>
                </small>
              </div>
              <div className="mb-2">
                <Tooltip title="RAY Wallet will be released soon">
                  <div className={style.download}>
                    <span className={style.downloadIcon}>
                      <img src="/resources/img/windows.svg" alt="" />
                    </span>
                    <span className={style.downloadTitle}>
                      Win
                    </span>
                  </div>
                </Tooltip>
                <Tooltip title="RAY Wallet will be released soon">
                  <div className={style.download}>
                    <span className={style.downloadIcon}>
                      <img src="/resources/img/apple.svg" alt="" />
                    </span>
                    <span className={style.downloadTitle}>
                      macOS
                    </span>
                  </div>
                </Tooltip>
                <Tooltip title="RAY Wallet will be released soon">
                  <div className={style.download}>
                    <span className={style.downloadIcon}>
                      <img src="/resources/img/linux.svg" alt="" />
                    </span>
                    <span className={style.downloadTitle}>
                      Linux
                    </span>
                  </div>
                </Tooltip>
              </div>
              <small className="text-muted">
                <div className={style.params}>
                  <div className="mb-2">
                    <strong>Network Parameters</strong>
                  </div>
                  Algo: hmq1725, Type: PoW/PoS,
                  <br />
                  PoW Block Reward: 100, PoS Block Reward: 100, BlockTime: 60sec
                  <br />
                  <a className="cui__link" href="/" onClick={e => e.preventDefault()}>Node Build & Mining Instructions</a>
                </div>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

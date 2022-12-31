import React from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { message, Tooltip } from "antd"
import { Link } from "gatsby"
// import style from "./style.module.scss"

const utility = [
  {
    title: "Payments",
    icon: "ri ri-wallet",
  },
  {
    title: "Staking",
    icon: "ri ri-activity",
  },
  {
    title: "Funding",
    icon: "ri ri-person",
  },
  {
    title: "Ecosystem Features",
    icon: "ri ri-puzzle",
  },
  {
    title: "Pigz.io In-game Currency",
    icon: "ri ri-gamepad",
  },
]

const governance = [
  {
    title: "Ray Network governance",
    icon: "ri ri-home",
  },
  {
    title: "XRAY community treasury",
    icon: "ri ri-heart",
  },
  {
    title: "The protocol fee switch",
    icon: "ri ri-layers",
  },
]

const Xray = () => {
  return (
    <div>
      <div className="ray__block mb-5 pb-2">
        <div className="ray__title">XRAY Token</div>
        <div className="ray__title__descr">
          <strong>Send, Stake, Earn, Swap, Fund, Bid? XRAY.</strong>
        </div>
        <p>
          Ray Network token - XRAY - is a Cardano based cryptocurrency token for fuelling the Ray platform. Ray is a
          highly functional open source project that banks on blockchain technology’s permissionless nature to provide
          decentralized finance (DeFi) solutions and other services.
        </p>
      </div>
      <div className="ray__banner">
        <div className="ray__banner__frame ray__banner__frame--dark">
          <div className="ray__banner__line">
            <div />
            <div />
          </div>
          <div
            className="ray__banner__image"
            style={{
              backgroundImage: "url(/resources/banners/night3.jpg)",
              opacity: 0.1,
            }}
          />
          <div className="ray__banner__content py-3">
            <div className="ray__block text-white py-5 mb-0">
              <div className="row mb-5">
                <div className="col-12 col-md-6">
                  <div className="ray__title">Ticker</div>
                  <div className="ray__price">XRAY</div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="ray__title">Total Cap</div>
                  <div className="ray__price">
                    324,922,240<sup>.000000</sup>
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-4">
                  <div className="ray__title">Policy ID</div>
                  <CopyToClipboard
                    text="86abe45be4d8fb2e8f28e8047d17d0ba5592f2a6c8c452fc88c2c143"
                    onCopy={() => message.success("Copied to clipboard")}
                  >
                    <Tooltip title="Copy to clipboard">
                      <div className="font-size-21 cursor-pointer text-break max-width-400">
                        <strong>
                          86abe45be4d8fb2e8f28e8047d17d0ba5592f2a6c8c452fc88c2c143{" "}
                          <i className="ri ri-copy text-muted" />
                        </strong>
                      </div>
                    </Tooltip>
                  </CopyToClipboard>
                </div>
                <div className="col-12 col-md-6">
                  <div className="ray__title">Fingerprint</div>
                  <CopyToClipboard
                    text="asset1zwa4chw9xm7xwk7g46ef94qsj28hmnd7qffhgx"
                    onCopy={() => message.success("Copied to clipboard")}
                  >
                    <Tooltip title="Copy to clipboard">
                      <div className="font-size-21 cursor-pointer text-break max-width-400">
                        <strong>
                          asset1zwa4chw9xm7xwk7g46ef94qsj28hmnd7qffhgx <i className="ri ri-copy text-muted" />
                        </strong>
                      </div>
                    </Tooltip>
                  </CopyToClipboard>
                </div>
              </div>
              <div className="mt-5 pt-4">
                <a
                  href="https://cardanoscan.io/token/asset1zwa4chw9xm7xwk7g46ef94qsj28hmnd7qffhgx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ray__btn ray__btn--white ray__btn--round me-3 mb-3"
                >
                  <span className="me-2">View in Explorer</span>
                  <i className="ri ri-ext ri-arrow_up" />
                </a>
                <Link to="/xray/tokenomics/" className="ray__btn ray__btn--white ray__btn--round me-3 mb-3">
                  Tokenomics
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ray__block">
        <div className="ray__title">XRAY Utility</div>
        <div className="ray__title__descr">
          <strong>What is the utility of the XRAY token?</strong>
        </div>
        <p>
          Ray Network is an advanced ecosystem for the Cardano blockchain platform. Our goal is to create the best
          multifunctional DeFi ecosystem for Cardano blockchain. XRAY is the governance token that powers Ray Network
          ecosystem. This is well positioned for community-led growth, development, and self-sustainability token.
        </p>
        <p className="mb-5">
          When most services are fully launched, the token will be used as payment for those services, such as premium
          Minterr marketplace placement, RayPad placement, tokens minting, governance, and yield farming in RaySwap /
          RayStake. It will also be used in our Atala PRISM-based B2B solution.
        </p>
        <div className="row mb-5 pb-4">
          {utility.map((item, index) => {
            return (
              <div key={index} className="col-12 col-md-6">
                <div className="ray__info w-100">
                  <div className="ray__info__texture" />
                  <div className="ray__info__dot" />
                  <div className="ray__info__icon">
                    <i className={item.icon} />
                  </div>
                  <div className="ray__info__title">{item.title}</div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="ray__title">Ray Network Governance</div>
        <div className="ray__title__descr">
          <strong>Governance</strong> assets
        </div>
        <div className="mb-5 pb-4">
          <p>
            A community-managed treasury opens up a world of infinite possibilities. We hope to see a variety of
            experimentation, including ecosystem grants and public goods funding, both of which can foster additional
            Ray Network ecosystem growth. Ray Network has set the standard for automated liquidity provision: it is now
            time to set the benchmark for responsible but radical, long-term aligned on-chain governance systems.
          </p>
          <p className="mb-5">In the meantime, XRAY holders will have immediate ownership of:</p>
          <div className="row">
            {governance.map((item, index) => {
              return (
                <div key={index} className="col-12 col-md-6">
                  <div className="ray__info w-100">
                    <div className="ray__info__texture" />
                    <div className="ray__info__dot" />
                    <div className="ray__info__icon">
                      <i className={item.icon} />
                    </div>
                    <div className="ray__info__title">{item.title}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="ray__title">XRAY Treasure</div>
        <div className="ray__title__descr">
          <strong>Governance</strong> wallets & treasures
        </div>
        <div className="mb-5 pb-4">
          <div className="ray__left ray__left--dark mb-4">
            <h5 className="mb-3">
              <strong>Development & Marketing Fund Wallet</strong>
            </h5>
            <p className="mb-3">Used to store development & marketing funds</p>
            <a
              className="text-break"
              href="https://cardanoscan.io/address/addr1qx6ndpw2uma2qytf2zynvv4crqdwkmck0a2r4vm20gwkzercd5kvnadmwssrwpce6x4c2rm7t6aj3rlkfh2f775fu7fqsdyray"
            >
              addr1qx6ndpw2uma2qytf2zynvv4crqdwkmck0a2r4vm20gwkzercd5kvnadmwssrwpce6x4c2rm7t6aj3rlkfh2f775fu7fqsdyray
            </a>
          </div>

          <div className="ray__left ray__left--dark mb-4">
            <h5 className="mb-3">
              <strong>Swap Wallet</strong>
            </h5>
            <p className="mb-3">Used to replace the old XRAY token with the new one</p>
            <a
              className="text-break"
              href="https://cardanoscan.io/address/addr1qxshzse6lcxkqed7wj9gw4xtxp3wqgs5mr5ewxxrj8emgpc6924cwznwmzrhz70uxyvzpj5q74xt9fzaznga7wnjmuwstu5wze"
            >
              addr1qxshzse6lcxkqed7wj9gw4xtxp3wqgs5mr5ewxxrj8emgpc6924cwznwmzrhz70uxyvzpj5q74xt9fzaznga7wnjmuwstu5wze
            </a>
          </div>
          <div className="ray__left ray__left--dark mb-4">
            <h5 className="mb-3">
              <strong>IUIP Rewards Wallet</strong>
            </h5>
            <p className="mb-3">Address where XRAYs are stored for the Involved User Incentive Program</p>
            <a
              className="text-break"
              href="https://cardanoscan.io/address/addr1qyc98ysmvxunqslu3y5t9gpt2mm8dp3puylpq7n5n908jldw8w6w5nmvw86ullauxldxdjsfauyrattxw6yevxp72nnsq3lt0u"
            >
              addr1qyc98ysmvxunqslu3y5t9gpt2mm8dp3puylpq7n5n908jldw8w6w5nmvw86ullauxldxdjsfauyrattxw6yevxp72nnsq3lt0u
            </a>
          </div>
          <div className="ray__left ray__left--dark mb-0">
            <h5 className="mb-3">
              <strong>Founders Wallet</strong>
            </h5>
            <p className="mb-3">Two-year vested funds for founders. Will be unlocked on June 1, 2023, two years after the token generation event</p>
            <a
              className="text-break"
              href="https://cardanoscan.io/address/addr1qyna4qh9gvjzytxupg77kjugfmm04hye69uv0chsdp72fxcxzxk683qqmdujykfnel975q2zywyk8jrrwkk5fs5m7w8qh6c2xj"
            >
              addr1qyna4qh9gvjzytxupg77kjugfmm04hye69uv0chsdp72fxcxzxk683qqmdujykfnel975q2zywyk8jrrwkk5fs5m7w8qh6c2xj
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Xray

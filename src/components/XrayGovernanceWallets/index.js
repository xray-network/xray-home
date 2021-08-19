import React from "react"
// import { format } from "@/utils"
import Heading from "@/components/Heading"
// import * as style from "./style.module.scss"

const XrayTokenomics = () => {
  return (
    <div className="ray__block">
      <Heading id="wallets">
        <strong>Governance</strong> wallets
      </Heading>
      <div className="ray__left ray__left--dark mb-4">
        <h5 className="mb-3"><strong>ISPO CeFi Distribution Wallet</strong></h5>
        <p className="mb-3">
          Used to withdraw rewards from the Delegators Distribution Program (CeFi). Soon to be replaced by a smart contract
        </p>
        <a className="text-break" href="https://cardanoscan.io/address/addr1q9gfz2dpdvev0yvnph2jgdh5ugwrfq0mnm5gzl972q0gxpvxdtxynggtwq540uzww6p66ezxkwa7w9snynphc36kuqesxk56gx">
          addr1q9gfz2dpdvev0yvnph2jgdh5ugwrfq0mnm5gzl972q0gxpvxdtxynggtwq540uzww6p66ezxkwa7w9snynphc36kuqesxk56gx
        </a>
      </div>
      <div className="ray__left ray__left--dark mb-4">
        <h5 className="mb-3"><strong>Development & Marketing Fund Wallet</strong></h5>
        <p className="mb-3">
          Used to store development & marketing funds
        </p>
        <a className="text-break" href="https://cardanoscan.io/address/addr1qx6ndpw2uma2qytf2zynvv4crqdwkmck0a2r4vm20gwkzercd5kvnadmwssrwpce6x4c2rm7t6aj3rlkfh2f775fu7fqsdyray">
          addr1qx6ndpw2uma2qytf2zynvv4crqdwkmck0a2r4vm20gwkzercd5kvnadmwssrwpce6x4c2rm7t6aj3rlkfh2f775fu7fqsdyray
        </a>
      </div>
      <div className="ray__left ray__left--dark mb-4">
        <h5 className="mb-3"><strong>XDIAMOND Sale Wallet</strong></h5>
        <p className="mb-3">
          Storage wallet for distribution <span className="ray__ticker">XDIAMOND</span> sale
        </p>
        <a className="text-break" href="https://cardanoscan.io/address/addr1q9sl4qydrgmtf922ypdffu5x2zxeg7jpk9ryzazq0d03d5hqeaa9yhkregmcvp89pujgdcfcuextw0wkh2lczvhqz8jqk6rg3k">
          addr1q9sl4qydrgmtf922ypdffu5x2zxeg7jpk9ryzazq0d03d5hqeaa9yhkregmcvp89pujgdcfcuextw0wkh2lczvhqz8jqk6rg3k
        </a>
      </div>
      <div className="ray__left ray__left--dark mb-4">
        <h5 className="mb-3"><strong>XDIAMOND Collateral Wallet</strong></h5>
        <p className="mb-3">
          Collateral wallet with <span className="ray__ticker">XRAY</span> for redeeming <span className="ray__ticker">XDIAMOND</span> with rate 1 <span className="ray__ticker">XDIAMOND</span> = 100 <span className="ray__ticker">XRAY</span>
        </p>
        <a className="text-break" href="https://cardanoscan.io/address/addr1q9y5gw52gfs6jr7cwyyz53yunfyqfxe6g2jxusqs6amtxv2wtkrnekqy26xsls0fxy9vn3g36vrpacqz8zyv3y9fr6nsyvdx70">
          addr1q9y5gw52gfs6jr7cwyyz53yunfyqfxe6g2jxusqs6amtxv2wtkrnekqy26xsls0fxy9vn3g36vrpacqz8zyv3y9fr6nsyvdx70
        </a>
      </div>
    </div>
  )
}

export default XrayTokenomics

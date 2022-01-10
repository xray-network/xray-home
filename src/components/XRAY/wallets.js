import React from "react"
// import * as style from "./style.module.scss"

const XrayWallets = () => {
  return (
    <div className="ray__block">
      <div className="ray__title">XRAY Treasure</div>
      <div className="ray__title__descr">
        <strong>Governance</strong> wallets & treasures
      </div>
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
        <h5 className="mb-3"><strong>XDIAMOND Collateral Wallet</strong></h5>
        <p className="mb-3">
          Collateral wallet with <span className="ray__ticker">XRAY</span> for redeeming <span className="ray__ticker">XDIAMOND</span> with rate 1 <span className="ray__ticker">XDIAMOND</span> = 100 <span className="ray__ticker">XRAY</span>
        </p>
        <a className="text-break" href="https://cardanoscan.io/address/addr1q9j55y5p7lyq3esn7xwrae5k9ez30639dj3ct7pp6fjkavvhuchtelm0kpr4pfvht57xcx4qd80tr3q9gg4s9h3d22uqjxm9p9">
          addr1q9j55y5p7lyq3esn7xwrae5k9ez30639dj3ct7pp6fjkavvhuchtelm0kpr4pfvht57xcx4qd80tr3q9gg4s9h3d22uqjxm9p9
        </a>
      </div>
    </div>
  )
}

export default XrayWallets

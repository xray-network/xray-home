import React from "react"
import style from "./style.module.scss"
import Marquee from "react-fast-marquee"

export default () => {

  return (
    <div className={style.announce}>
      <Marquee pauseOnHover gradient={false} speed={60}>
        <strong>Ray Network</strong>&nbsp;participates in the&nbsp;
        <strong><a href="https://cardano.ideascale.com/" target="_blank" rel="noopener noreferrer">Project Catalyst</a></strong>.
        We need your support: vote for&nbsp;
        <strong><a href="https://cardano.ideascale.com/a/dtd/RAY-Wallet/350736-48088" target="_blank" rel="noopener noreferrer">Ray Wallet</a></strong>,&nbsp;
        <strong><a href="https://cardano.ideascale.com/a/dtd/RAY-Swap/350964-48088" target="_blank" rel="noopener noreferrer">Ray Swap</a></strong>,&nbsp;
        <strong><a href="https://cardano.ideascale.com/a/dtd/Cardano-JS-API/350707-48088" target="_blank" rel="noopener noreferrer">Cardano JS API</a></strong>. Thank you!</Marquee>
    </div>
  )
}

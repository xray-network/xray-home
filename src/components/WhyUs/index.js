import React from "react"
import style from "./style.module.scss"

export default () => {
  return (
    <div className="cui__block">
      <div className="container-fluid">
        <div className={style.header}>
          <h1 className={`${style.title} mb-3`}>Why RAY Network Pool</h1>
          <h4 className="mb-5">
            Find nodes with the ticker <span className={style.badge}>RAY</span> and delegate your ADA for high returns.
            <br />
            RAY Coins distribution will be available soon
          </h4>
        </div>
        <div className="table-responsive">
          <table className={`${style.licenses} table`}>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <div className={style.linkTitle}>RAY Pools</div>
                </td>
                <td>
                  <div className={style.linkTitle}>Other Pools</div>
                </td>
              </tr>
              <tr>
                <td>Additional coin/token distribution</td>
                <td className="text-nowrap">
                  <span className={style.badge}>
                    RAY Coin
                  </span>
                </td>
                <td>
                  <i className="font-size-24 fe fe-x text-muted" />
                </td>
              </tr>
              <tr>
                <td>Zero fee margin (0% fees)</td>
                <td>
                  <i className="font-size-24 fe fe-check-square text-primary" />
                </td>
                <td>
                  <i className="font-size-24 fe fe-x text-muted" />
                </td>
              </tr>
              <tr>
                <td>Qualified servers maintance</td>
                <td>
                  <i className="font-size-24 fe fe-check-square text-primary" />
                </td>
                <td>
                  <i className="font-size-24 fe fe-x text-muted" />
                </td>
              </tr>
              <tr>
                <td>Tier 4 high memory VPS instances</td>
                <td>
                  <i className="font-size-24 fe fe-check-square text-primary" />
                </td>
                <td>
                  <i className="font-size-24 fe fe-x text-muted" />
                </td>
              </tr>
              <tr>
                <td>Nodes distributed throughout the world</td>
                <td>
                  <i className="font-size-24 fe fe-check-square text-primary" />
                </td>
                <td>
                  <i className="font-size-24 fe fe-x text-muted" />
                </td>
              </tr>
              <tr>
                <td>Relays per producer node</td>
                <td>
                  <span className={style.badge}>
                    5
                  </span>
                </td>
                <td>
                  <span className={style.badge}>~1</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

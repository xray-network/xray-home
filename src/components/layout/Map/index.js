import React from "react"
import Heading from "@/components/layout/Heading"
import { Popover } from 'antd'
import classnames from "classnames"
import network from "./network"
import style from "./style.module.scss"

export default () => {
  return (
    <div className="ray__block">
      <Heading id="map">
        <strong className="bolder">Ray relays</strong> map
      </Heading>
      <div className={style.map}>
        <div className={style.img}>
          <div className={style.relays}>
            {network && network.map((relay, index) => {
              return (
                <Popover
                  key={index}
                  title={(
                    <div>
                      <strong>{relay.name}</strong>
                      {' '}
                      {relay.tags.map((tag, index) => {
                        return (
                          <span key={index} className={classnames('badge mr-1', {
                            'badge-success': tag === 'producer',
                            'badge-primary': tag === 'relay',
                            'badge-danger': tag === 'api',
                          })}>
                            {tag}
                          </span>
                        )
                      })}
                    </div>
                  )}
                  content={(
                    <div>
                      {relay.data && Object.keys(relay.data).map((key, index) => <div key={index}>{key}: <strong>{relay.data[key]}</strong></div>)}
                      <img className={style.do} src="/resources/images/digitalocean.svg" alt="Digital Ocean Datacenter" />
                    </div>
                  )}
                >
                  <span
                    className={style.relay}
                    style={{
                      top: `${relay.coords[0]}%`,
                      left: `${relay.coords[1]}%`,
                    }}
                  >
                    <span
                      className={classnames({
                        'bg-success': relay.type === 'producer',
                        'bg-danger': relay.type === 'api',
                      })}
                    />
                  </span>
                </Popover>
              )
            })}
          </div>
          <img src="/resources/images/map.png" alt="" />
        </div>
      </div>
    </div>
  )
}

import React from "react"
import { Popover } from "antd"
import classnames from "classnames"
import network from "./network"
import * as style from "./style.module.scss"

const Map = () => {
  return (
    <div>
      <div className="ray__block mb-5">
        <div className="ray__title">Infrastructre Map</div>
        <div className="ray__title__descr">
          <strong>Secure</strong> Infrastructure. <strong>Low latency</strong> blockchain access for all Ray Network
          services
        </div>
        <div className={style.map}>
          <div className={style.img}>
            <div className={style.relays}>
              {network &&
                network.map((relay, index) => {
                  return (
                    <Popover
                      key={index}
                      title={
                        <div>
                          <strong className="me-1">{relay.name}</strong>{" "}
                          {relay.tags.map((tag, index) => {
                            return (
                              <span
                                key={index}
                                className={classnames("badge me-1", {
                                  "badge-success": tag === "producer",
                                  "badge-primary": tag === "relay",
                                  "badge-danger": tag === "api",
                                })}
                              >
                                {tag}
                              </span>
                            )
                          })}
                        </div>
                      }
                      content={
                        <div>
                          {relay.data &&
                            Object.keys(relay.data).map((key, index) => (
                              <div key={index}>
                                {key}: <strong>{relay.data[key]}</strong>
                              </div>
                            ))}
                          <img
                            className={style.digitalocean}
                            src="/resources/images/digitalocean.svg"
                            alt="Digital Ocean Datacenter"
                          />
                        </div>
                      }
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
                            "bg-success": relay.type === "producer",
                            "bg-danger": relay.type === "api",
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
    </div>
  )
}

export default Map

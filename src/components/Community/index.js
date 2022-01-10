import React from "react"
import * as style from "./style.module.scss"
import {
  SVGTwitter,
  SVGTelegram,
  SVGDiscord,
  SVGReddit,
} from "@/svg"

const community = [
  {
    title: '@RayNetwork',
    icon: <SVGTwitter />,
    url: 'https://twitter.com/RayNetwork',
    type: 'Twitter',
  },
  {
    title: '@RayWallet ',
    icon: <SVGTwitter />,
    url: 'https://twitter.com/RayWallet',
    type: 'Twitter',
  },
  {
    title: '@MinterrApp ',
    icon: <SVGTwitter />,
    url: 'https://twitter.com/MinterrApp',
    type: 'Twitter',
  },
  {
    title: '@CardanoList ',
    icon: <SVGTwitter />,
    url: 'https://twitter.com/CardanoList',
    type: 'Twitter',
  },
  {
    title: '@PigzMetaverse ',
    icon: <SVGTwitter />,
    url: 'https://twitter.com/PigzMetaverse',
    type: 'Twitter',
  },
  {
    title: 'Reddit',
    icon: <SVGReddit />,
    url: 'https://www.reddit.com/r/RayNetwork',
    type: 'Reddit',
  },
  {
    title: 'Telegram Chat',
    icon: <SVGTelegram />,
    url: 'https://t.me/RayNetwork',
    type: 'Telegram',
  },
  {
    title: 'Telegram Announcements',
    icon: <SVGTelegram />,
    url: 'https://t.me/RayNetworkChannel',
    type: 'Telegram',
  },
  {
    title: 'Ray Network Discord',
    icon: <SVGDiscord />,
    url: 'https://discord.gg/WhZmm46APN',
    type: 'Discord',
  },
  {
    title: 'Minterr.io Discord',
    icon: <SVGDiscord />,
    url: 'https://discord.gg/dDVXcthYWn',
    type: 'Discord',
  },
]

const Community = () => {
  return (
    <div className="ray__block pt-5">
      <div className="ray__title">Join the Conversation</div>
      <div className="ray__title__descr">
        The Ray Network community is an ecosystem of <strong>users, developers, designers, and educators</strong>
      </div>
      <div className="row">
        {community.map((item, index) => {
          return (
            <div key={index} className="col-12 col-md-6">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={style.item}
              >
                <i className={`ri ri-ext ri-arrow_up ${style.itemExt}`} />
                <div className="d-flex align-items-center">
                  <span>
                    {item.icon}
                  </span>
                  <span className={style.itemTitle}>
                    <small>{item.type}</small>
                    {item.title}
                  </span>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Community

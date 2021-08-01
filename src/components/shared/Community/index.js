import React from "react"
import * as style from "./style.module.scss"
import { IMGTwitter, IMGReddit, IMGDiscord, IMGTelegram } from '@/svg'

const Community = () => {
  const items = [
    {
      title: 'Twitter',
      url: 'https://twitter.com/RayNetwork',
      image: <IMGTwitter />,
      descr: <span><strong>Follow</strong> @RayWallet for updates and news</span>,
    },
    {
      title: 'Discord',
      url: 'https://discord.gg/WhZmm46APN',
      image: <IMGDiscord />,
      descr: <span><strong>Communicate</strong> with the Discord community</span>,
    },
    {
      title: 'Reddit',
      url: 'https://www.reddit.com/r/RayNetwork',
      image: <IMGReddit />,
      descr: <span><strong>Join</strong> Ray Network community on Reddit</span>,
    },
    {
      title: 'Telegram',
      url: 'https://t.me/RayNetwork',
      image: <IMGTelegram />,
      descr: <span><strong>Chat</strong> in the realtime with the community</span>,
    },
    {
      title: 'Telegram',
      url: 'https://t.me/RayNetworkChannel',
      image: <IMGTelegram />,
      descr: <span><strong>Read</strong> announcements on Telegram</span>,
    },
  ]

  return (
    <div className="ray__block mb-5">
      <h2 className="text-center">Join a global community</h2>
      <h4 className="mb-5 text-center">
        Learn more about Ray Network, chat with the team, others in the community
      </h4>
      <div className="row justify-content-center">
        {items.map((item, index) => {
          return (
            <div key={index} className="col-12 col-sm-6 col-md-4 mb-3">
              <a href={item.url} className={style.item} target="_blank" rel="noopener noreferrer">
                <div className={style.itemImage}>
                  {item.image}
                </div>
                <div className={style.itemTitle}>
                  {item.title}
                </div>
                <div className={style.itemDescr}>
                  {item.descr}
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

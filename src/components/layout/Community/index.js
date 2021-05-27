import React from "react"
import style from "./style.module.scss"

import SvgTwitter from "../../../../static/resources/social/twitter.inline.svg"
import SvgReddit from "../../../../static/resources/social/reddit.inline.svg"
import SvgTelegram from "../../../../static/resources/social/telegram.inline.svg"
// import SvgDiscord from "../../../../static/resources/social/discord.inline.svg"

export default () => {
  const items = [
    {
      title: 'Twitter',
      url: 'https://twitter.com/RayWallet',
      image: <SvgTwitter />,
      descr: <span><strong>Follow</strong> @RayWallet for updates and news</span>,
    },
    {
      title: 'Telegram',
      url: 'https://t.me/RayWalletCommunity',
      image: <SvgTelegram />,
      descr: <span><strong>Chat</strong> in the realtime with the community</span>,
    },
    {
      title: 'Telegram',
      url: 'https://t.me/RayWallet',
      image: <SvgTelegram />,
      descr: <span><strong>Read</strong> announcements on Telegram</span>,
    },
    {
      title: 'Reddit',
      url: 'https://www.reddit.com/r/RayWallet',
      image: <SvgReddit />,
      descr: <span><strong>Join</strong> Ray Network community on Reddit</span>,
    },
  ]

  return (
    <div className="ray__block ray__block--top mb-5">
      <div className="ray__heading">Join a global community</div>
      <div className="font-size-24 mb-5 text-center">
        Learn more about Ray Network, chat with the team, others in the community
      </div>
      <div className="row">
        {items.map((item, index) => {
          return (
            <div key={index} className="col-12 col-sm-6 col-md-3 mb-3">
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

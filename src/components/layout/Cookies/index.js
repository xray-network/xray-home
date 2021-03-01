import React, { useState, useEffect } from "react"
import style from "./style.module.scss"

export default () => {
  const cookiesViewed =
    typeof window !== "undefined" &&
    window.localStorage.getItem("cookiesViewed")
  const [cookiesHidden, setCookiesHidden] = useState(cookiesViewed)
  const [cookiesAnimation, setCookiesAnimation] = useState(false)

  useEffect(() => {
    window.localStorage.setItem("cookiesViewed", true)
    setTimeout(() => {
      setCookiesAnimation(true)
    }, 2000)
    // eslint-disable-next-line
  }, [])

  return (
    !cookiesHidden && (
      <div
        className={`
    ${style.cookies}
    ${cookiesAnimation ? style.cookiesAnimated : ""}
  `}
      >
        <h5 className="mb-2">
          <strong>
            Our site uses cookies{" "}
            <span role="img" aria-label="">
              🍪
            </span>
          </strong>
        </h5>
        <p className={style.description}>
          Cookies can enable us to track and target the interests of our users
          to enhance the experience on our site, and for advertising purposes.
          Usage of a cookie is in no way linked to any personally identifiable
          information on our website.
        </p>
        <a
          href="/"
          onClick={e => {
            e.preventDefault()
            setCookiesHidden(true)
          }}
          className="ray__btn ray__btn--small"
        >
          Got it
        </a>
      </div>
    )
  )
}

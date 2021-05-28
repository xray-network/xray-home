import React from "react"
import { Link } from "gatsby"
// import style from "./style.module.scss"

export default () => {

  return (
    <div className="ray__block text-center">
      <div className="ray__heading">Do you have any questions?</div>
      <div className="font-size-24">
        Read our {' '}
        <Link to="/wiki">Wiki</Link>{' '}
        or drop us a letter {' '}
        <a href="mailto:hello@rraayy.com">hello@rraayy.com</a>
      </div>
    </div>
  )
}

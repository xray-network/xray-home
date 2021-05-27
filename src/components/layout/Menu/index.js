import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "gatsby"
import style from "./style.module.scss"

export default () => {
  const theme = useSelector((state) => state.settings.theme)
  const dispatch = useDispatch()

  const changeTheme = () => {
    dispatch({
      type: 'settings/CHANGE_SETTING',
      payload: {
        setting: 'theme',
        value: theme === 'default' ? 'dark' : 'default',
      },
    })
  }

  const setTheme = (theme) => {
    document.querySelector('html').setAttribute('data-theme', theme)
  }

  useEffect(() => {
    setTheme(theme)
    // eslint-disable-next-line
  }, [theme])

  const openRewards = (e) => {
    e.preventDefault()
    dispatch({
      type: 'settings/CHANGE_SETTING',
      payload: {
        setting: 'modalRewards',
        value: true,
      }
    })
  }

  return (
    <div className={`ray__block ray__block--bottom ${style.menu}`}>
      <div className={style.menuTop}>
        <div className={style.menuContent}>
          <h2 className="mb-0">
            Ray Network
          </h2>
          <div className="text-active">
            Powered with{' '}
            <strong>Cardano</strong>{' '}
          </div>
        </div>
        <div className={style.menuControls}>
          <div className={style.menuTheme}>
            <div
              role="button"
              tabIndex="0"
              onClick={changeTheme}
              onKeyPress={changeTheme}
            >
              {theme === 'default' && <i className="fe fe-sun" />}
              {theme !== 'default' && <i className="fe fe-moon" />}
            </div>
          </div>
          <div className={style.menuLogo}>
            <a href="https://rraayy.com" target="_blank" rel="noopener noreferrer">
              <img src="/resources/logo.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="pt-3">
        <Link
          to="/"
          className={style.link}
          activeClassName={style.linkActive}
        >
          <span>About Token</span>
          <span>About Token</span>
        </Link>
        <Link
          to="/distribution"
          className={style.link}
          activeClassName={style.linkActive}
        >
          <span>Distribution</span>
          <span>Distribution</span>
        </Link>
        <a
          href="/"
          className={style.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={openRewards}
        >
          <span>Delegators Rewards</span>
          <span>Delegators Rewards</span>
        </a>
        <a
          href="https://rraayy.com/wiki/"
          className={style.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Wiki &rarr;</span>
          <span>Wiki &rarr;</span>
        </a>
        <a
          href="https://raywallet.io/"
          className={style.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Ray Wallet &rarr;</span>
          <span>Ray Wallet &rarr;</span>
        </a>
      </div>
    </div>
  )
}

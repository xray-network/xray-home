import React, { useContext } from "react"
import { Menu, Dropdown } from "antd"
import { globalContext } from "@/provider"
import style from "./style.module.scss"

import FlagEn from './flags/en.svg'
import FlagRu from './flags/ru.svg'
import FlagZh from './flags/zh.svg'
import FlagJp from './flags/jp.svg'

export default () => {
  const context = useContext(globalContext)

  const locale = 'en-US'
  const language = locale.substr(0, 2)

  const mapFlags = {
    en: FlagEn,
    jp: FlagJp,
    zh: FlagZh,
    ru: FlagRu,
  }

  const menu = (
    <Menu>
      <Menu.Item key="en-US">
        <span className={style.menuIcon}>
          <img src={mapFlags.en} alt="English" />
        </span>
        English
      </Menu.Item>
      <Menu.Item key="jp-JP" disabled>
        <span className={style.menuIcon}>
          <img src={mapFlags.jp} alt="French" />
        </span>
        日本語
      </Menu.Item>
      <Menu.Item key="zh-CN" disabled>
        <span className={style.menuIcon}>
          <img src={mapFlags.zh} alt="简体中文" />
        </span>
        简体中文
      </Menu.Item>
      <Menu.Item key="ru-RU" disabled>
        <span className={style.menuIcon}>
          <img src={mapFlags.ru} alt="Русский" />
        </span>
        Русский
      </Menu.Item>
    </Menu>
  )

  return (
    <div className="ray__block mb-5">
      <div className="container-fluid">
        <div className={style.switcher}>
          <Dropdown overlay={menu} trigger={['click']}>
            <span className={`${style.dropdown}`}>
              <span className={style.flag}>
                <img src={mapFlags[language]} alt={language} />
              </span>
            </span>
          </Dropdown>
          <div
            role="button"
            tabIndex="0"
            onClick={context.changeTheme}
            onKeyPress={context.changeTheme}
            className={style.mode}
          >
            {context.isLight && <i className="fe fe-sun" />}
            {!context.isLight && <i className="fe fe-moon" />}
          </div>
        </div>
      </div>
    </div>
  )
}

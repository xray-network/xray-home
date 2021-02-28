import React, { useContext } from "react"
import { Menu, Dropdown } from "antd"
import { globalContext } from "@/provider"
import style from "./style.module.scss"

import FlagEn from './flags/en.svg'
import FlagRu from './flags/ru.svg'
import FlagFr from './flags/fr.svg'
import FlagZh from './flags/zh.svg'

export default () => {
  const context = useContext(globalContext)

  const locale = 'en-US'
  const language = locale.substr(0, 2)

  const mapFlags = {
    en: FlagEn,
    ru: FlagRu,
    fr: FlagFr,
    zh: FlagZh,
  }

  const changeLanguage = ({ key }) => {
    console.log(key)
  }

  const menu = (
    <Menu selectedKeys={[locale]} onClick={changeLanguage}>
      <Menu.Item key="en-US">
        <span className={style.menuIcon}>
          <img src={mapFlags.en} alt="English" />
        </span>
        English
      </Menu.Item>
      <Menu.Item key="fr-FR">
        <span className={style.menuIcon}>
          <img src={mapFlags.fr} alt="French" />
        </span>
        French
      </Menu.Item>
      <Menu.Item key="ru-RU">
        <span className={style.menuIcon}>
          <img src={mapFlags.ru} alt="Русский" />
        </span>
        Русский
      </Menu.Item>
      <Menu.Item key="zh-CN">
        <span className={style.menuIcon}>
          <img src={mapFlags.zh} alt="简体中文" />
        </span>
        简体中文
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
            <i className="fe fe-sun" />
          </div>
        </div>
      </div>
    </div>
  )
}

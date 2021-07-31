import React from "react"
import { Helmet } from "react-helmet"
import { useSelector } from "react-redux"
import Menu from "@/components/shared/Menu"
import MegaMenu from "@/components/shared/MegaMenu"
import Footer from "@/components/shared/Footer"
import Cookies from "@/components/shared/Cookies"
import * as style from "./style.module.scss"

const MainLayout = ({ children }) => {
  const megaMenuVisible = useSelector((state) => state.settings.megaMenu)

  return (
    <div className={style.layout}>
      <Helmet titleTemplate="%s | Ray Network" title="Cardano Ecosystem">
        <link rel="preload" href="/resources/font/circular.css" as="style" />
        <link rel="stylesheet" href="/resources/font/circular.css" />
        <meta property="og:url" content="https://rraayy.com" />
        <meta
          name="description"
          content="Advanced Ecosystem for Cardano Blockchain Platform. All about ADA finances (DeFi) in one place."
        />
      </Helmet>
      <div>
        <Menu />
        {megaMenuVisible && <MegaMenu />}
        {children}
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
      <Cookies />
    </div>
  )
}

export default MainLayout

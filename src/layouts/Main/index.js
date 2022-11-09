import React from "react"
import { Helmet } from "react-helmet"
import { useSelector } from "react-redux"
import Head from "@/components/Head"
import Menu from "@/components/Menu"
import MegaMenu from "@/components/MegaMenu"
import Footer from "@/components/Footer"
import Cookies from "@/components/Cookies"
import * as style from "./style.module.scss"

const MainLayout = ({ children }) => {
  const megaMenuVisible = useSelector((state) => state.settings.megaMenu)

  return (
    <div className={style.layout}>
      <Helmet titleTemplate="%s | Ray Network" title="Cardano Ecosystem">
        <link rel="stylesheet" type="text/css" href="/resources/font/satoshi.css" />
        <link rel="stylesheet" type="text/css" href="/resources/font/ray-icons.css" />
        <meta property="og:url" content="https://raynetwork.io" />
        <meta
          name="description"
          content="Advanced Ecosystem for Cardano Blockchain Platform. All about ADA finances (DeFi) in one place."
        />
      </Helmet>
      <div>
        <Head />
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

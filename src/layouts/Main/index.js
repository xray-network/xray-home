import React from "react"
import { Helmet } from "react-helmet"
import Bg from "@/components/layout/Bg"
import Menu from "@/components/layout/Menu"
import Footer from "@/components/layout/Footer"
import Cookies from "@/components/layout/Cookies"
import Promo from "@/components/layout/Promo"
import Features from "@/components/layout/Features"
import Switcher from "@/components/layout/Switcher"
import Submenu from "@/components/layout/Submenu"

export default ({ children }) => (
  <div>
    <Helmet titleTemplate="RAY - %s" title="Cardano Advanced Light Wallet">
      <meta property="og:url" content="https://rraayy.com" />
      <meta
        name="description"
        content="Advanced Ecosystem for Cardano Blockchain Platform. All about ADA finances in one place."
      />
    </Helmet>
    <Bg />
    <Menu />
    <Switcher />
    <Promo />
    <Submenu />
    {children}
    <Features />
    <Footer />
    <Cookies />
  </div>
)

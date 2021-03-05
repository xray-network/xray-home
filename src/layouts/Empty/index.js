import React from "react"
import { Helmet } from "react-helmet"
import Bg from "@/components/layout/Bg"
import Menu from "@/components/layout/Menu"
import Footer from "@/components/layout/Footer"
import Cookies from "@/components/layout/Cookies"
import Switcher from "@/components/layout/Switcher"

export default ({ children }) => (
  <div>
    <Helmet titleTemplate="RAY Wallet - %s" title="Cardano Advanced Light Wallet">
      <meta property="og:url" content="https://rraayy.com" />
      <meta
        name="description"
        content="Advanced Ecosystem for Cardano Blockchain Platform. All about ADA finances in one place."
      />
    </Helmet>
    <Bg />
    <Menu />
    <Switcher />
    {children}
    <Footer />
    <Cookies />
  </div>
)

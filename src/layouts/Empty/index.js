import React from "react"
import { Helmet } from "react-helmet"
import Menu from "@/components/Menu"
import Footer from "@/components/Footer"
import Cookies from "@/components/Cookies"
import Switcher from "@/components/Switcher"

export default ({ children }) => (
  <div>
    <Helmet titleTemplate="Ray Wallet - %s" title="Cardano Advanced Light Wallet">
      <meta property="og:url" content="https://rraayy.com" />
      <meta
        name="description"
        content="Advanced Ecosystem for Cardano Blockchain Platform. All about ADA finances in one place."
      />
    </Helmet>
    <Menu />
    <Switcher />
    {children}
    <Footer />
    <Cookies />
  </div>
)

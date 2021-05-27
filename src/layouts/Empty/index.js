import React from "react"
import { Helmet } from "react-helmet"
import Menu from "@/components/layout/Menu"
import Footer from "@/components/layout/Footer"
import Cookies from "@/components/layout/Cookies"

export default ({ children }) => (
  <div>
    <Helmet titleTemplate="%s | Ray Network" title="Cardano Ecosystem">
      <meta property="og:url" content="https://rraayy.com" />
      <meta
        name="description"
        content="Advanced Ecosystem for Cardano Blockchain Platform. All about ADA finances (DeFi) in one place."
      />
    </Helmet>
    <Menu />
    {children}
    <Footer />
    <Cookies />
  </div>
)

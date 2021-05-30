import React from "react"
import { Helmet } from "react-helmet"
import LayoutPage from "@/layouts/Page"
import Wallet from "@/components/pages/Wallet"

export default () => {
  return (
    <LayoutPage>
      <Helmet title="Ray Wallet" />
      <Wallet />
    </LayoutPage>
  )
}

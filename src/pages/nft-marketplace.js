import React from "react"
import { Helmet } from "react-helmet"
import LayoutPage from "@/layouts/Page"
import NftMarketplace from "@/components/pages/NftMarketplace"

export default () => {
  return (
    <LayoutPage>
      <Helmet title="Ray NFT Marketplace" />
      <NftMarketplace />
    </LayoutPage>
  )
}

import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Submenu from "@/components/Submenu"
import XrayGovernance from "@/components/XRAY/governance"
import XrayWallets from "@/components/XRAY/wallets"
import XrayEvents from "@/components/XRAY/events"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="XRAY Governance" />
      <Submenu type="xray" />
      <XrayGovernance />
      <XrayWallets />
      <XrayEvents />
    </MainLayout>
  )
}

export default Page

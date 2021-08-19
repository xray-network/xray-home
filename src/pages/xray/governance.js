import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import XrayGovernance from "@/components/XrayGovernance"
import XrayGovernanceWallets from "@/components/XrayGovernanceWallets"
import XrayGovernanceEvents from "@/components/XrayGovernanceEvents"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="Governance Wallets" />
      <XrayGovernance />
      <XrayGovernanceWallets />
      <XrayGovernanceEvents />
    </MainLayout>
  )
}

export default Page

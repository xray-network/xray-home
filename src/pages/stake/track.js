import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import StakeTrack from "@/components/StakeTrack"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="Track / Withdraw Stake Delegators XRAY Rewards" />
      <StakeTrack />
    </MainLayout>
  )
}

export default Page

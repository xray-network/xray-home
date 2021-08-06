import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import StakeCalculator from "@/components/StakeCalculator"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="Cardano Staking Calculator" />
      <StakeCalculator />
    </MainLayout>
  )
}

export default Page

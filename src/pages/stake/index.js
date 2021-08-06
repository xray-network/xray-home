import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import StakeDistribution from "@/components/StakeDistribution"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="Stake Distribution" />
      <StakeDistribution />
    </MainLayout>
  )
}

export default Page

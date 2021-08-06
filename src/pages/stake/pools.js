import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import StakePools from "@/components/StakePools"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="Cardano Pools" />
      <StakePools />
    </MainLayout>
  )
}

export default Page

import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Wallet from "@/components/pages/Wallet"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="" />
      <Wallet />
    </MainLayout>
  )
}

export default Page

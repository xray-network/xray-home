import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Promo from "@/components/pages/Promo"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="Cardano Ecosystem" />
      <Promo />
    </MainLayout>
  )
}

export default Page

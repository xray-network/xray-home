import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Whitepaper from "@/components/shared/Whitepaper"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="Whitepaper" />
      <Whitepaper />
    </MainLayout>
  )
}

export default Page

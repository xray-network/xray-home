import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Whitepaper from "@/components/pages/Whitepaper"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="" />
      <Whitepaper />
    </MainLayout>
  )
}

export default Page

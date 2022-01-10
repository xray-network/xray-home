import React from "react"
import { Helmet } from "react-helmet"
import Submenu from "@/components/Submenu"
import MainLayout from "@/layouts/Main"
import Whitepaper from "@/components/Whitepaper"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="Whitepaper" />
      <Submenu type="developers" />
      <Whitepaper />
    </MainLayout>
  )
}

export default Page

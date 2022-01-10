import React from "react"
import { Helmet } from "react-helmet"
import Submenu from "@/components/Submenu"
import MainLayout from "@/layouts/Main"
import Developers from "@/components/Developers"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="Developers" />
      <Submenu type="developers" />
      <Developers />
    </MainLayout>
  )
}

export default Page

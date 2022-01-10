import React from "react"
import { Helmet } from "react-helmet"
import Submenu from "@/components/Submenu"
import MainLayout from "@/layouts/Main"
import Terms from "@/components/Terms"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="Terms of Use" />
      <Submenu type="developers" />
      <Terms />
    </MainLayout>
  )
}

export default Page

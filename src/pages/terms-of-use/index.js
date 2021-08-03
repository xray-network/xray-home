import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Terms from "@/components/shared/Terms"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="Terms of Use" />
      <Terms />
    </MainLayout>
  )
}

export default Page

import React from "react"
import { Helmet } from "react-helmet"
import MainLayout from "@/layouts/Main"
import Minterr from "@/components/Minterr"
import Solutions from "@/components/Solutions"
import Community from "@/components/Community"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="Minterr" />
      <Minterr />
      <Solutions />
      <Community />
    </MainLayout>
  )
}

export default Page

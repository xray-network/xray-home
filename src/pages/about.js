import React from "react"
import { Helmet } from "react-helmet"
import Submenu from "@/components/Submenu"
import MainLayout from "@/layouts/Main"
import About from "@/components/About/about"
import Team from "@/components/About/team"

const Page = () => {
  return (
    <MainLayout>
      <Helmet title="About" />
      <Submenu type="developers" />
      <About />
      <Team />
    </MainLayout>
  )
}

export default Page

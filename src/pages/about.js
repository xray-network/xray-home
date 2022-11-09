import React from "react"
import { Helmet } from "react-helmet"
import Submenu from "@/components/Submenu"
import About from "@/components/About/about"
import Team from "@/components/About/team"

const Page = () => {
  return (
    <div>
      <Helmet title="About" />
      <Submenu type="developers" />
      <About />
      <Team />
    </div>
  )
}

export default Page

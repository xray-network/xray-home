import React from "react"
import { Helmet } from "react-helmet"
import Submenu from "@/components/Submenu"
import Terms from "@/components/Terms"

const Page = () => {
  return (
    <div>
      <Helmet title="Terms of Use" />
      <Submenu type="developers" />
      <Terms />
    </div>
  )
}

export default Page

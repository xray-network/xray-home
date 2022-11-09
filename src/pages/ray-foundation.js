import React from "react"
import { Helmet } from "react-helmet"
import Submenu from "@/components/Submenu"
import Foundation from "@/components/Foundation"
import Ecosystem from "@/components/Ecosystem"

const Page = () => {
  return (
    <div>
      <Helmet title="Ray Foundation" />
      <Submenu type="ecosystem" />
      <Foundation />
      <Ecosystem />
    </div>
  )
}

export default Page

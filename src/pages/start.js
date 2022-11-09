import React from "react"
import { Helmet } from "react-helmet"
import WhereToStart from "@/components/WhereToStart"
import Performance from "@/components/Performance"
import WhereToBuy from "@/components/WhereToBuy"

const Page = () => {
  return (
    <div>
      <Helmet title="Getting Started" />
      <WhereToStart />
      <Performance />
      <WhereToBuy />
    </div>
  )
}

export default Page

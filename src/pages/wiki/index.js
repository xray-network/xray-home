import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import { navigate } from "gatsby"
import LayoutWiki from "@/layouts/Wiki"

export default () => {
  useEffect(() => {
    navigate('/wiki/stake-delegators')
    // eslint-disable-next-line
  }, [])

  return (
    <LayoutWiki>
      <Helmet title="Wiki" />
    </LayoutWiki>
  )
}

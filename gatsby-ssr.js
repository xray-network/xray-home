import React from "react"
import store from "@/redux/provider"
import Layout from "@/layouts/Main"

export const wrapRootElement = store

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
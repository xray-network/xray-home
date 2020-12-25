import React from "react"
import { Helmet } from "react-helmet"
import Menu from "@/components/Menu"
import Footer from "@/components/Footer"
import Cookies from "@/components/Cookies"

import "antd/es/style/index.css"
import "antd/es/button/style/index.css"
import "antd/es/tooltip/style/index.css"
import "antd/es/input/style/index.css"
import "antd/es/notification/style/index.css"
import "antd/es/popover/style/index.css"
import "antd/es/alert/style/index.css"
import "antd/es/spin/style/index.css"

import "bootstrap/dist/css/bootstrap.min.css"
import "react-alice-carousel/lib/alice-carousel.css"
import "react-perfect-scrollbar/dist/css/styles.css"
import "@/styles/style.scss"

export default ({ children }) => (
  <div>
    <Helmet titleTemplate="Ray Network | %s" title="Cardano Pools" />
    <Menu />
    {children}
    <Footer />
    <Cookies />
  </div>
)

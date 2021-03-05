import Provider from './src/provider'

import "antd/es/style/index.css"
import "antd/es/button/style/index.css"
import "antd/es/tooltip/style/index.css"
import "antd/es/input/style/index.css"
import "antd/es/notification/style/index.css"
import "antd/es/message/style/index.css"
import "antd/es/popover/style/index.css"
import "antd/es/alert/style/index.css"
import "antd/es/spin/style/index.css"
import "antd/es/dropdown/style/index.css"
import "antd/es/menu/style/index.css"
import "antd/es/table/style/index.css"

import "aos/dist/aos.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "react-alice-carousel/lib/alice-carousel.css"
import "react-perfect-scrollbar/dist/css/styles.css"
import "@/styles/style.scss"


const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  const { pathname } = location
  // list of routes for the scroll-to-top-hook
  const scrollToTopRoutes = [
    `/updates/`,
    `/wiki/`,
  ]
  // if the new route is part of the list above, scroll to top (0, 0)
  if (scrollToTopRoutes.indexOf(pathname) !== -1) {
    window.scrollTo(0, 0)
  }

  return false
}

const wrapRootElement = Provider

export {
  shouldUpdateScroll,
  wrapRootElement,
}
import React from "react"
import LayoutMain from "@/layouts/Main"
import MenuWiki from "@/components/shared/MenuWiki"

const MainLayout = ({ children }) => {

  return (
    <LayoutMain>
      <div className="ray__block">
        <div className="row">
          <div className="col-12 col-sm-3 mb-5 mb-sm-0">
            <div className="position-sticky" style={{ top: 30 }}>
              <MenuWiki />
            </div>
          </div>
          <div className="col-12 col-sm-9">
            {children}
          </div>
        </div>
      </div>
    </LayoutMain>
  )
}

export default MainLayout

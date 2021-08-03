import React from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { useLocation } from "@reach/router"
import { message, Tooltip } from "antd"
import { SVGLink } from "@/svg"
import * as style from "./style.module.scss"

const Heading = ({ children, id }) => {
  const location = useLocation()
  const link = `${location.origin}${location.pathname}#${id}`

  return (
    <h2 className={`${style.heading} ray__left`} id={id}>
      {children}
      <CopyToClipboard
        text={link}
        onCopy={() => message.success('Copied to clipboard')}
      >
        <Tooltip title="Copy link to anchor">
          <span className="ray__link ms-2 cursor-pointer">
            <SVGLink />
          </span>
        </Tooltip>
      </CopyToClipboard>
    </h2>
  )
}

export default Heading

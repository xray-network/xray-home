import React from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { useLocation } from "@reach/router"
import { message, Tooltip } from "antd"

export default ({ children, id }) => {
  const location = useLocation()
  const link = `${location.origin}${location.pathname}#${id}`

  return (
    <h2 className="ray__title" id={id}>
      {children}
      <CopyToClipboard
        text={link}
        onCopy={() => message.success('Copied to clipboard')}
      >
        <Tooltip title="Copy link to anchor">
          <i className="fe fe-link ml-2 ray__copy" />
        </Tooltip>
      </CopyToClipboard>
    </h2>
  )
}

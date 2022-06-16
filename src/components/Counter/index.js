import React from 'react'
import { format } from "@/utils"

const Amount = ({ title, amount, ticker, decimals = true, large, string }) => {
  return (
    <div className={`ray__counter ${large ? 'ray__counter--large' : ''}`}>
      <div className="ray__counter__title">{title}</div>
      {!string && (
        <div className="ray__counter__amount">
          <span className='me-2'>
            {format(amount, 0)}
            {decimals && (
              <small>
                .{(parseFloat((amount || 0).toFixed(6))).toString().split(".")[1] || "000000"}
              </small>
            )}
          </span>
          {ticker && <span className="ray__ticker">{ticker}</span>}
        </div>
      )}
      {string && <div className="ray__counter__amount">{amount}</div>}
    </div>
  )
}

export default Amount

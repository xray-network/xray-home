import React from "react"

const Soon = ({ text }) => {
  return (
    <div className="ray__soon">
      <h4 className="mb-3">
        <i className="ri ri-clock me-4" />
        In Progress...
      </h4>
      <p className="mb-0">{text}</p>
    </div>
  )
}

export default Soon

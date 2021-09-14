import React from "react"
import { format } from "@/utils"
import { Table } from "antd"
import Heading from "@/components/Heading"
// import * as style from "./style.module.scss"

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    render: (record) => <strong>{record}</strong>,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    render: (record, records) => <strong>{format(record)} <span className="ray__ticker">{records.token}</span></strong>,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    render: (record) => <div className="text-wrap min-width-500">{record}</div>,
  },
]

const data = [
  {
    token: 'XRAY',
    type: 'mint',
    date: '09/07/2021',
    amount: 10000000,
    description: '10,000,000 were sent to ISPO CeFi Distribution Wallet.'
  },
  {
    token: 'XDIAMOND',
    type: 'mint',
    date: '08/15/2021',
    amount: 31000,
    description: '31,000 XDIAMOND NFTs were minted. 16,000 were sent to ISPO CeFi Distribution Wallet for covering Early Delegator Bonus, 10,000 to XDIAMOND Sale Wallet, and 5,000 to Development & Marketing Fund Wallet.'
  },
  {
    token: 'XRAY',
    type: 'mint',
    date: '08/15/2021',
    amount: 13538200,
    description: '406,152,800 XRAY tokens were minted, and then 392,614,600 XRAY were burned to get initial supply of 13,538,200 XRAY. 10,000,000 were sent to ISPO CeFi Distribution Wallet, 3,100,000 to XDIAMOND Collateral Wallet, and 438,200 to Development & Marketing Fund Wallet.'
  }
]

const XrayTokenomics = () => {
  return (
    <div className="ray__block">
      <Heading id="events">
        <strong>Governance</strong> minting & burning events
      </Heading>
      <div className="ray__table">
        <Table
          dataSource={data}
          columns={columns}
          pagination={false}
        />
      </div>
    </div>
  )
}

export default XrayTokenomics

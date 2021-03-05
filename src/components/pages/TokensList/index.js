import React, { useEffect, useState } from "react"
import { Table } from "antd"
import style from "./style.module.scss"

const columns = [
  {
    title: '',
    key: 'logo',
    width: 40,
    render: (record, records) => {
      return records.name === 'RAY'
        ? <img className={style.image} src={`/resources/tokens/RAY.jpg`} alt={records.name} />
        : <img className={style.image} src={`https://raw.githubusercontent.com/ray-network/cardano-verified-tokens-list/main/logo/${records.policyId}.${records.name}.jpg`} alt={records.name} />
    }
  },
  {
    title: 'Name (Ticker)',
    dataIndex: 'name',
    key: 'name',
    render: (record, records) => {
      return (
        <strong>
          <a
            href={records.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="ray__link"
          >
            {record}
          </a>
        </strong>
      )
    }
  },
  {
    title: 'Policy ID',
    dataIndex: 'policyId',
    key: 'policyId',
  },
  {
    title: 'Minted',
    dataIndex: 'mintedAt',
    key: 'mintedAt',
    render: (record, records) => {
      return records.name === 'RAY'
        ? record
        : new Date(record).toLocaleDateString()
    }
  },
  {
    title: 'Added',
    dataIndex: 'addedAt',
    key: 'addedAt',
    render: (record, records) => {
      return records.name === 'RAY'
        ? record
        : new Date(record).toLocaleDateString()
    }
  },
]

export default () => {
  const [dataSource, setDataSource] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ray-network/cardano-verified-tokens-list/main/list.json')
      .then(res => res.json())
      .then((result => {
        setDataSource([
          ...result,
          {
            "policyId": "TBD",
            "name": "RAY",
            "homepage": "https://rraayy.com",
            "mintedAt": "TBD",
            "addedAt": "TBD"
          }
        ])
        setLoading(false)
      }))
  }, [])

  return (
    <div className="ray__block">
      <div className="container-fluid">
        <h2 className="ray__heading mb-4">Ray Tokens List</h2>
        <div className="mb-5">
          <p>
            Cardano native token list curated by Ray Network. Used as defaults in Ray Wallet and other services.
            Feel free to create a{' '}
            <a
              href="https://github.com/ray-network/cardano-verified-tokens-list/pulls"
              target="_blank"
              rel="noopener noreferrer"
              className="ray__link"
            >
              pull request
            </a>{' '}
            to add your token to our curated list.
          </p>
        </div>
        <div className="ray__table">
          <Table loading={loading} dataSource={dataSource} columns={columns} pagination={false} />
        </div>
      </div>
    </div>
  )
}

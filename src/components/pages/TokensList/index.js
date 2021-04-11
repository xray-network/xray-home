import React, { useEffect, useState } from "react"
import { Table } from "antd"
import style from "./style.module.scss"

const columns = [
  {
    title: '',
    key: 'logo',
    width: 40,
    render: (record, records) => {
      return (
        <div className={style.image}><img src={`https://raw.githubusercontent.com/ray-network/cardano-verified-tokens-list/main/logo/${records.fingerprint}.jpg`} alt={records.name} /></div>
      )
    }
  },
  {
    title: 'Ticker',
    dataIndex: 'ticker',
    key: 'ticker',
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
    title: 'Name',
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
    title: 'Fingerprint',
    dataIndex: 'fingerprint',
    key: 'fingerprint',
  },
  {
    title: 'Homepage',
    dataIndex: 'homepage',
    key: 'homepage',
    render: (record) => {
      return (
        <a
          href={record}
          target="_blank"
          rel="noopener noreferrer"
          className="ray__link"
        >
          {record}
        </a>
      )
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
        ])
        setLoading(false)
      }))
    // eslint-disable-next-line
  }, [])

  return (
    <div className="ray__block">
      <div className="container-fluid">
        <h2 className="ray__heading mb-4">RAY Tokens List</h2>
        <div className="mb-5">
          <p>
            Cardano native token list curated by RAY. Used as defaults in RAY Wallet and other services.
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

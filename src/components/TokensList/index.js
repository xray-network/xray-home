import React, { useEffect, useState } from "react"
import { Table } from "antd"
import Heading from "@/components/Heading"
import * as style from "./style.module.scss"

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
    render: (record) => <strong>{record}</strong>
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (record) => <strong>{record}</strong>
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

const TokensList = () => {
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
      <Heading id="list">
        <strong>Ray Tokens List</strong>, Cardano verified tokens
      </Heading>
      <div className="mb-5">
        <p>
          Cardano native token list curated by Ray. Used as defaults in Ray Wallet and other services.
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
  )
}

export default TokensList

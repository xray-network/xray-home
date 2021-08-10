import React, { useEffect, useState } from "react"
import { Table } from "antd"
import Heading from "@/components/Heading"
import * as style from "./style.module.scss"

const columnsRegular = [
  {
    title: "",
    key: "logo",
    width: 40,
    render: (record, records) => {
      return (
        <div className={style.image}>
          <img
            src={`https://raw.githubusercontent.com/ray-network/cardano-verified-tokens-list/main/logo/${records.fingerprint}.jpg`}
            alt={records.name}
          />
        </div>
      )
    },
  },
  {
    title: "Ticker",
    dataIndex: "ticker",
    key: "ticker",
    render: (record) => <strong>{record}</strong>,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (record) => <strong>{record}</strong>,
  },
  {
    title: "Fingerprint",
    dataIndex: "fingerprint",
    key: "fingerprint",
  },
  {
    title: "Homepage",
    dataIndex: "homepage",
    key: "homepage",
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
    },
  },
]

const columnsNFT = [
  {
    title: "",
    key: "logo",
    width: 40,
    render: (record, records) => {
      return (
        <div className={style.image}>
          <img
            src={`https://raw.githubusercontent.com/ray-network/cardano-verified-nft-projects/main/logo/${records.image}`}
            alt={records.name}
          />
        </div>
      )
    },
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (record) => <strong>{record}</strong>,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    render: (record) => <div className="text-wrap">{record}</div>,
  },
  {
    title: "Links",
    dataIndex: "url",
    key: "url",
    render: (record, records) => {
      return (
        <div>
          <a
            href={records.url}
            target="_blank"
            rel="noopener noreferrer"
            className="ray__link me-3"
          >
            Home
          </a>
          <a
            href={records.url}
            target="_blank"
            rel="noopener noreferrer"
            className="ray__link"
          >
            Twitter
          </a>
        </div>
      )
    },
  },
]

const TokensList = () => {
  const [dataSourceRegular, setDataSourceRegular] = useState([])
  const [loadingRegular, setLoadingRegular] = useState(true)

  const [dataSourceNFT, setDataSourceNFT] = useState([])
  const [loadingNFT, setLoadingNFT] = useState(true)

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ray-network/cardano-verified-tokens-list/main/list.json"
    )
      .then((res) => res.json())
      .then((result) => {
        setDataSourceRegular([...result])
        setLoadingRegular(false)
      })

    fetch(
      "https://raw.githubusercontent.com/ray-network/cardano-verified-nft-projects/main/list.json"
    )
      .then((res) => res.json())
      .then((result) => {
        setDataSourceNFT([...result])
        setLoadingNFT(false)
      })
    // eslint-disable-next-line
  }, [])

  return (
    <div className="ray__block">
      <Heading id="list">
        <strong>Ray Tokens List</strong>, Cardano verified tokens
      </Heading>
      <div className="mb-5">
        <p>
          Cardano native token list curated by Ray. Used as defaults in Ray
          Wallet and other services. Feel free to create a pull requests
          to add your tokens or NFT projects to our curated list.{" "}
          <a
            href="https://github.com/ray-network/"
            target="_blank"
            rel="noopener noreferrer"
            className="ray__link"
          >
            Ray Network Github
          </a>.
        </p>
      </div>
      <h5><strong>Regular Tokens</strong></h5>
      <div className="ray__table mb-5">
        <Table
          size="small"
          loading={loadingRegular}
          dataSource={dataSourceRegular}
          columns={columnsRegular}
          pagination={false}
        />
      </div>
      <h5><strong>NFT Projects</strong></h5>
      <div className="ray__table">
        <Table
          size="small"
          loading={loadingNFT}
          dataSource={dataSourceNFT}
          columns={columnsNFT}
          pagination={false}
        />
      </div>
    </div>
  )
}

export default TokensList

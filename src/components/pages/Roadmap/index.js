import React, { useEffect, useState } from "react"
import Heading from "@/components/shared/Heading"
import { Tooltip } from "antd"
import classnames from 'classnames'
import { format } from 'date-fns'
import { Table } from "antd"

import * as style from "./style.module.scss"

const columns = [
  {
    title: 'Repository',
    dataIndex: 'repo',
    key: 'repo',
    sorter: (a, b) => ('' + a.repo).localeCompare(b.repo),
    render: record => <a href={`https://github.com/ray-network/${record}`} className="ray__link">{record}</a>
  },
  {
    title: 'Commit',
    dataIndex: 'sha',
    key: 'sha',
    render: (record, records) => <a href={records.url} className="ray__link">{record.substring(0, 7)}</a>,
  },
  {
    title: 'Branch',
    dataIndex: 'branch',
    key: 'branch',
    sorter: (a, b) => ('' + a.branch).localeCompare(b.author),
  },
  {
    title: 'Message',
    dataIndex: 'message',
    key: 'message',
    render: record => <span className="text-wrap">{record}</span>
  },
  // {
  //   title: 'Author',
  //   dataIndex: 'author',
  //   key: 'author',
  //   sorter: (a, b) => ('' + a.author).localeCompare(b.author),
  // },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    sorter: (a, b) => new Date(a.date) - new Date(b.date),
    render: record => {
      return format(new Date(record), 'MM/dd/yyyy HH:mm')
    }
  },
]

const dev = [
  {
    status: 'completed',
    title: 'Ray Website Portal',
    date: 'Q1 2021',
  },
  {
    status: 'completed',
    title: 'Pools & APIs Env',
    date: 'Q1 2021',
  },
  {
    status: 'completed',
    title: 'Ray Wallet',
    date: 'Q2 2021',
  },
  {
    status: 'completed',
    title: 'Ray Wallet Stake',
    date: 'Q2 2021',
  },
  {
    status: 'completed',
    title: 'Ray Wallet Rewards',
    date: 'Q2 2021',
  },
  {
    status: 'completed',
    title: 'XRAY Token',
    date: 'Q2 2021',
  },
  {
    status: 'completed',
    title: 'Ray Wallet Native Tokens',
    date: 'Q2 2021',
  },
  {
    status: 'completed',
    title: 'Minterr.io',
    date: 'Q3 2021',
  },
  {
    status: 'active',
    title: 'XRAY Rewards Withdrawal',
    date: 'Q3 2021',
  },
  {
    status: 'active',
    title: 'XDIAMOND Redeemer',
    date: 'Q3 2021',
  },
  {
    status: 'active',
    title: 'Whitepaper',
    date: 'Q3 2021',
  },
  {
    status: 'active',
    title: 'Ray Wallet V2',
    date: 'Q3 2021',
  },
  {
    status: 'active',
    title: 'Chrome Extension',
    date: 'Q3 2021',
  },
  {
    status: 'active',
    title: 'Hardware Wallets Support',
    date: 'Q3 2021',
  },
  {
    status: 'active',
    title: 'Cardano-Web3.js',
    date: 'Q3 2021',
  },
  {
    status: 'active',
    title: 'Ray Swap',
    date: 'Q4 2021',
  },
  {
    status: 'active',
    title: 'Ray NFT',
    date: 'Q4 2021',
  },
  {
    status: 'pending',
    title: 'Ray Kickstart',
    date: 'Q1 2022',
  },
  {
    status: 'pending',
    title: 'Smart Contracts Audit',
    date: 'Q1 2022',
  },
  {
    status: 'pending',
    title: 'Ray Graph',
    date: 'Q1 2022',
  },
  {
    status: 'pending',
    title: 'Ray Data',
    date: '2022',
  },
  {
    status: 'pending',
    title: 'Ergo Support',
    date: '2022',
  },
]

const apps = [
  {
    status: 'pending',
    title: 'Ray Track iOS',
    date: 'Q4 2021',
  },
  {
    status: 'pending',
    title: 'Ray Track Android',
    date: 'Q4 2021',
  },
  {
    status: 'pending',
    title: 'Ray Wallet Windows',
    date: 'Q4 2021',
  },
  {
    status: 'pending',
    title: 'Ray Wallet macOS',
    date: 'Q4 2021',
  },
  {
    status: 'pending',
    title: 'Ray Wallet iOS',
    date: 'Q4 2021',
  },
  {
    status: 'pending',
    title: 'Ray Wallet Android',
    date: 'Q4 2021',
  },
]

let fetchedData = []

const repos = [
  {
    id: 'ray-home',
    branch: 'main',
  },
  {
    id: 'docs',
    branch: 'master',
  },
  {
    id: 'minterr',
    branch: 'main',
  },
  {
    id: 'cardano-web3.js',
    branch: 'dev',
  },
  {
    id: 'ray-wallet',
    branch: 'dev',
  },
  {
    id: 'ray-cordova-wrapper',
    branch: 'dev',
  },
  {
    id: 'ray-swap-contracts',
    branch: 'dev',
  },
  {
    id: 'ray-kickstart-contracts',
    branch: 'dev',
  },
  {
    id: 'ray-nft-contracts',
    branch: 'dev',
  },
  {
    id: 'cloudflare-workers',
    branch: 'dev',
  },
  {
    id: 'cardano-verified-tokens-list',
    branch: 'main',
  },
]

const Roadmap = () => {
  const [dataSource, setDataSource] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchedData = []
    Promise.all(repos.map(repo => {
      return fetch(`https://api.github.com/repos/ray-network/${repo.id}/commits?sha=${repo.branch}&page=1&per_page=50`)
        .then(res => res.json())
        .then((result => {
          if (Array.isArray(result)) {
            fetchedData.push({
              repo: repo.id,
              branch: repo.branch,
              data: result,
            })
          }
        }))
    }))
      .then(() => {
        setLoading(false)
        formatData()
      })
    // eslint-disable-next-line
  }, [])

  const formatData = async () => {
    let normalizedData = []
    fetchedData.forEach(repo => {
      if (Array.isArray(repo.data)) {
        repo.data.forEach(item => {
          let commit = {}
          commit.repo = repo.repo
          commit.branch = repo.branch
          commit.sha = item.sha
          commit.author = item.commit.author.name
          commit.author_avatar = item.committer.avatar_url
          commit.message = item.commit.message
          commit.url = item.html_url
          commit.date = item.commit.author.date
          normalizedData.push(commit)
        })
      }
    })
    normalizedData.sort((a, b) => {
      return new Date(b.date) - new Date(a.date)
    })
    setDataSource(normalizedData)
  }

  return (
    <div className="ray__block">
      <Heading id="roadmap">
        Development Roadmap
      </Heading>
      <div className="mb-3">
        <h5 className="mb-5">Ray Ecosystem</h5>
        <div>
          {dev.map((item, index) => {
            return (
              <Tooltip key={index} title={<div className="text-capitalize">{item.status}</div>}>
                <div className={classnames({
                  [style.item]: true,
                  [style.itemActive]: item.status === 'active',
                  [style.itemCompleted]: item.status === 'completed',
                })}>
                  <span className={style.itemIcon}>
                    {item.status === 'completed' && <i className="fe fe-check-circle" />}
                    {item.status === 'active' && <i className="fe fe-activity" />}
                  </span>
                  <span className={style.itemDate}>{item.date}</span>
                  <span className={style.itemTitle}>{item.title}</span>
                </div>
              </Tooltip>
            )
          })}
        </div>
      </div>
      <div className="mb-5">
        <h5 className="mb-5">Desktop & Mobile Apps</h5>
        <div>
          {apps.map((item, index) => {
            return (
              <Tooltip key={index} title={<div className="text-capitalize">{item.status}</div>}>
                <div className={classnames({
                  [style.item]: true,
                  [style.itemActive]: item.status === 'active',
                  [style.itemCompleted]: item.status === 'completed',
                })}>
                  <span className={style.itemIcon}>
                    {item.status === 'completed' && <i className="fe fe-check-circle" />}
                  </span>
                  <span className={style.itemDate}>{item.date}</span>
                  <span className={style.itemTitle}>{item.title}</span>
                </div>
              </Tooltip>
            )
          })}
        </div>
      </div>
      <Heading id="updates">
        Development Activity
      </Heading>
      <div className="mb-5">
        <p>
          Tracking development activity of the Ray Github repositories —{' '}
          <a
            href="https://github.com/ray-network/"
            rel="noopener noreferrer"
            target="_blank"
            className="ray__link"
          >
            https://github.com/ray-network/
          </a>
        </p>
      </div>
      <div className="ray__table">
        <Table loading={loading} size="small" dataSource={dataSource} columns={columns} pagination={false} />
      </div>
    </div>
  )
}

export default Roadmap

import React, { useEffect, useState } from "react"
import { Tooltip } from "antd"
import classnames from 'classnames'
import { format } from 'date-fns'
import { Table } from "antd"

import style from "./style.module.scss"

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
    title: 'Message',
    dataIndex: 'message',
    key: 'message',
    render: record => <span className="text-wrap">{record}</span>
  },
  {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
    sorter: (a, b) => ('' + a.author).localeCompare(b.author),
  },
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

const repos = [
  'ray-home',
  'ray-wallet',
  'ray-cordova-wrapper',
  'ray-swap-contracts',
  'ray-kickstart-contracts',
  'ray-nft-contracts',
  'cloudflare-workers',
  'cardano-verified-tokens-list',
  'awesome-cardano-pools',
]

const dev = [
  {
    status: 'active',
    title: 'RnD Phase',
    date: 'Lifetime',
  },
  {
    status: 'completed',
    title: 'Ray Website Portal',
    date: 'Q1 2021',
  },
  {
    status: 'completed',
    title: 'Pools Environment Setup',
    date: 'Q1 2021',
  },
  {
    status: 'completed',
    title: 'Light Wallet Frontend',
    date: 'Q1 2021',
  },
  {
    status: 'active',
    title: 'Wallet Send/Receive',
    date: 'Q1 2021',
  },
  {
    status: 'active',
    title: 'Wallet Stake',
    date: 'Q1 2021',
  },
  {
    status: 'active',
    title: 'Wallet Rewards',
    date: 'Q1 2021',
  },
  {
    status: 'pending',
    title: 'Chrome Extension',
    date: 'Q2 2021',
  },
  {
    status: 'pending',
    title: 'Wallet Swap',
    date: 'Q2-Q3 2021',
  },
  {
    status: 'pending',
    title: 'Wallet KickStart',
    date: 'Q2-Q3 2021',
  },
  {
    status: 'pending',
    title: 'Wallet NFT Marketplace',
    date: 'Q3 2021',
  },
  {
    status: 'pending',
    title: 'Data Containers',
    date: '2022',
  },
]

const apps = [
  {
    status: 'pending',
    title: 'Windows App Electron',
    date: 'Q2 2021',
  },
  {
    status: 'pending',
    title: 'macOS App Electron',
    date: 'Q2 2021',
  },
  {
    status: 'pending',
    title: 'iOS App Cordova',
    date: 'Q3 2021',
  },
  {
    status: 'pending',
    title: 'Android App Cordova',
    date: 'Q3 2021',
  },
]

let fetchedData = []

export default () => {
  const [dataSource, setDataSource] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchedData = []
    Promise.all(repos.map(repo => {
      return fetch(`https://api.github.com/repos/ray-network/${repo}/commits?page=1&per_page=50`)
        .then(res => res.json())
        .then((result => {
          fetchedData.push({
            repo,
            data: result,
          })
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
      <div className="container-fluid">
        <h2 className="ray__heading mb-4">Development Roadmap</h2>
        <div className="mb-3">
          <h5 className="mb-3">Web Services</h5>
          <div className={style.roadmap}>
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
          <h5 className="mb-3">Apps</h5>
          <div className={style.roadmap}>
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
        <h2 className="ray__heading mb-4">Development Updates</h2>
        <div className="mb-5">
          <p>
            Tracking development activity of the RAY Github repositories —{' '}
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
        <div className={style.updates}>
          <div className="ray__table">
            <Table loading={loading} size="small" dataSource={dataSource} columns={columns} pagination={false} />
          </div>
        </div>
      </div>
    </div>
  )
}

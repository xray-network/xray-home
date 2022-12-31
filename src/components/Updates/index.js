import React, { useEffect, useState } from "react"
import { format } from "date-fns"
import { Table } from "antd"

const columns = [
  {
    title: "Repository",
    dataIndex: "repo",
    key: "repo",
    render: (record) => (
      <a href={record.html_url} className="ray__link">
        {record.name}
      </a>
    ),
  },
  {
    title: "Commit",
    dataIndex: "sha",
    key: "sha",
    render: (record, records) => (
      <a href={records.html_url} className="ray__link">
        {record.substring(0, 7)}
      </a>
    ),
  },
  {
    title: "Visibility",
    dataIndex: "repo",
    key: "repo",
    render: (record) => (record.private ? "Private" : "Public"),
  },
  {
    title: "Message",
    dataIndex: "message",
    key: "message",
    render: (record) => <span className="text-wrap">{record}</span>,
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (record) => {
      return format(new Date(record), "MM/dd/yyyy HH:mm")
    },
  },
]

const Updates = () => {
  const [dataSource, setDataSource] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://api-stake.raygraph.io/git")
      .then((res) => res.json())
      .then((result) => {
        setDataSource(result?.commits || [])
        setLoading(false)
      })

    // eslint-disable-next-line
  }, [])

  return (
    <div className="ray__block">
      <div className="ray__title">Development Information</div>
      <div className="ray__title__descr">
        <strong>Development</strong> Activity
      </div>
      <div className="mb-5">
        <p>
          Tracking development activity of the Ray Github repositories —{" "}
          <a href="https://github.com/ray-network/" rel="noopener noreferrer" target="_blank" className="ray__link">
            https://github.com/ray-network/
          </a>
        </p>
      </div>
      <div className="ray__table">
        <Table
          rowKey={(record) => record.sha}
          loading={loading}
          dataSource={dataSource}
          columns={columns}
          pagination={{
            defaultPageSize: 50,
            showSizeChanger: false,
            position: ["bottomLeft", "topLeft"],
          }}
        />
      </div>
    </div>
  )
}

export default Updates

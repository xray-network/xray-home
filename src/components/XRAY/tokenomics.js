import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Input, Table, message } from "antd"
import ChartSchedule from "./_/ChartSchedule"
import ChartStakeSchedule from "./_/ChartStakeSchedule"
import { format } from "@/utils"
import * as style from "./style.module.scss"

const columns = [
  {
    title: "Stake Key",
    dataIndex: "key",
    key: "key",
    render: (record) => (
      <a href={`https://cardanoscan.io/stakekey/${record}`} target="_blank" rel="noopener noreferrer">
        {record}
      </a>
    ),
  },
  {
    title: "Total Accrued",
    dataIndex: "total",
    key: "total",
    render: (record) => (
      <strong>
        {format(record)} XRAY
      </strong>
    ),
  },
]

const XrayTokenomics = () => {
  const ispoHistory = useSelector((state) => state.settings.ispoHistory)
  const stakeHistory = useSelector((state) => state.settings.stakeHistory)

  const [section, setSection] = useState("ispo")
  const [loading, setLoading] = useState(true)
  const [participants, setParticipants] = useState([])
  const [participantSearch, setParticipantSearch] = useState('')
  const [pagination, setPagination] = useState({})

  const stage1 = 185422703
  const stage2 = 50145921
  const devfund = 56861392
  const founders = 32492224
  const total = stage1 + stage2 + devfund + founders

  useEffect(() => {
    load()
  }, [])

  const resetSearch = () => {
    setParticipantSearch('')
    load()
  }

  const search = async () => {
    setLoading(true)
    await fetch(`https://api-stake.raygraph.io/stage1/balance/${participantSearch}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data?.data) {
          setPagination({
            current: 1,
            total: 0,
          })
          setParticipants(data.index > 0 ? [data.data] : [])
        } else {
          message.error("Something goes wrong. Please try again")
        }
      })
      .catch(() => {
        setLoading(false)
      })
    setLoading(false)
  }

  const load = async (page = 1) => {
    setLoading(true)
    await fetch(`https://api-stake.raygraph.io/stage1/list/${page}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          setPagination({
            current: data.current,
            total: data.count,
          })
          setParticipants(data.data)
        } else {
          message.error("Something goes wrong. Please try again")
        }
      })
      .catch(() => {
        setLoading(false)
      })
    setLoading(false)
  }

  return (
    <div>
      <div className="ray__block mb-5 pb-2">
        <div className="ray__title">XRAY Tokenomics</div>
        <div className="ray__title__descr mb-5">
          <strong>Ray Network</strong> is a public good <strong>owned</strong> and <strong>governed</strong> by XRAY
          token holders
        </div>
        <p>
          {" "}
          Ray Network's tokenomics is based on full value creation by the community's participation in the life of the
          project. The initial token distribution was completely free in the ISPO and RayStake Stage 1 programs with
          high ROI. <strong>57.07%</strong> of all tokens were distributed to participants in these programs.{" "}
          <strong>15.43%</strong> of the tokens will be allocated to stimulate the community to provide liquidity and
          other value creation programs. In total, the community accessed <strong>72.5%</strong> of the total capacity
          of tokens.
        </p>
      </div>
      <div className="ray__banner">
        <div className="ray__banner__frame ray__banner__frame--dark">
          <div
            className="ray__banner__image"
            style={{
              backgroundImage: "url(/resources/banners/night6.jpg)",
              opacity: 0.4,
            }}
          />
          <div className="ray__banner__line">
            <div />
            <div />
          </div>
          <div className="ray__banner__content text-white py-5">
            <div className="ray__block pt-5 pb-3 mb-0">
              <div className="row">
                <div className="col-12">
                  <div className="ray__title ray__title--normal font-size-32">Total Cap</div>
                  <div className="ray__price ray__price--large mb-5 pb-3">
                    {format(total)} <span>XRAY</span>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="ray__title ray__title--empty ray__title--normal font-size-32">
                    <span className="ray__title__square" />
                    Community (Stage 1) — {((stage1 / total) * 100).toFixed(2)}%
                  </div>
                  <div className="ray__price">
                    {format(stage1)} <span>XRAY</span>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="ray__title ray__title--empty ray__title--normal font-size-32">
                    <span className="ray__title__square" />
                    Community (Stage 2) — {((stage2 / total) * 100).toFixed(2)}%
                  </div>
                  <div className="ray__price">
                    {format(stage2)} <span>XRAY</span>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="ray__title ray__title--empty ray__title--normal font-size-32">
                    <span className="ray__title__square ray__title__square--red" />
                    Dev & Marketing Fund — {((devfund / total) * 100).toFixed(2)}%
                  </div>
                  <div className="ray__price">
                    {format(devfund)} <span>XRAY</span>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="ray__title ray__title--empty ray__title--normal font-size-32">
                    <span className="ray__title__square ray__title__square--blue" />
                    Founders Fund — {((founders / total) * 100).toFixed(2)}%
                  </div>
                  <div className="ray__price">
                    {format(founders)} <span>XRAY</span>
                  </div>
                </div>
                <div className="col-12 mb-5">
                  <div className="ray__title ray__title--normal font-size-32">Distribution Breakdown</div>
                  <div className={style.breakdown}>
                    <div style={{ width: "57.07%" }}>57.07%</div>
                    <div style={{ width: "15.43%" }}>15.43%</div>
                    <div style={{ width: "17.50%" }} className={style.breakdownRed}>
                      17.50%
                    </div>
                    <div style={{ width: "10%" }} className={style.breakdownBlue}>
                      10%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ray__block pt-5 mb-2">
        <div className="ray__title__descr mb-5">
          <strong className="me-3">Stage 2 Allocation</strong>
          <span className="ray__title__status">Live</span>
        </div>
        <p className="mb-5">
          Stage 2 includes classic staking with a soft ROI of 15% to incentivize engaged users by the Ray Network
          ecosystem. Stage 2 will deliver <strong>50,145,921 XRAY</strong> tokens in subsequent programs: RayStake &
          RaySwap (65%) and other DEXes (35%).
        </p>
      </div>
      <div className="ray__banner mb-5 pb-5">
        <div className="ray__banner__frame ray__banner__frame--border">
          <div className="ray__banner__line">
            <div />
            <div />
          </div>
          <div className="ray__banner__content">
            <div className="ray__block pt-5 pb-4 mb-0">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="ray__title">To Be Distributed</div>
                  <div className="ray__price">
                    50,145,921 <span>XRAY</span>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="ray__title">Distribution Programs</div>
                  <div>
                    <div className="mb-3">
                      <div className="font-size-21">
                        <a
                          href="https://app.wingriders.com/farming/all-farms"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <strong>Wingriders DEX LP Providers &rarr;</strong>
                        </a>
                      </div>
                      30% APR%, Allocated 5M XRAY
                    </div>
                    <div className="mb-3">
                      <div className="font-size-21">
                        <span>
                          <strong>RaySwap DEX LP Providers <sup>soon</sup></strong>
                        </span>
                      </div>
                      50% APR%, Allocated 10M XRAY
                    </div>
                    <div className="mb-3">
                      <div className="font-size-21">
                        <span>
                          <strong>RayStake Staking <sup>soon</sup></strong>
                        </span>
                      </div>
                      15% APR%, Allocated 10M XRAY
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ray__block pt-3 mb-2">
        <div className="ray__title__descr mb-5">
          <strong className="me-3">Stage 1 Allocation</strong>
          <span className="ray__title__status ray__title__status--end">End</span>
        </div>
        <p className="mb-5">
          Stage 1 includes programs such as ISPO and high ROI XRAY/LP staking. In fact, it is the initial distribution
          of the XRAY token. A total of <strong>185,422,703 XRAY</strong> were scheduled for distribution, of which only{" "}
          <strong>131,278,985 XRAY</strong> were distributed during ISPO (one year and a half) and RayStake (9 months).
          The remaining <strong>54,143,718 XRAY</strong> will automatically be sent to <strong>26,141 (25,902 of which were valid)</strong> unique
          wallets who participated in any way in XRAY ISPO or RayStake Staking Program.
        </p>
      </div>
      <div className="ray__banner mb-5 pb-5">
        <div className="ray__banner__frame ray__banner__frame--border">
          <div className="ray__banner__line">
            <div />
            <div />
          </div>
          <div className="ray__banner__content">
            <div className="ray__block pt-5 pb-4 mb-0">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="ray__title">XRAY Distributed</div>
                  <div className="ray__price">
                    185,422,703 <span>XRAY</span>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="ray__title">Total Participants</div>
                  <div className="ray__price">26,141</div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="ray__title">ISPO, Max XRAY Mining Rate per 1 XRAY</div>
                  <div className="ray__price">
                    525.314580 <span>ADA</span>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="ray__title">ISPO, Max TVL</div>
                  <div className="ray__price">
                    265,841,222 <span>ADA</span>
                  </div>
                </div>
              </div>
              <h4 className={style.menu}>
                <a className={`${section === "ispo" ? style.menuActive : ""}`} onClick={() => setSection("ispo")}>
                  <span>ISPO</span>
                </a>
                <a
                  className={`${section === "raystake" ? style.menuActive : ""}`}
                  onClick={() => setSection("raystake")}
                >
                  <span>RayStake Staking</span>
                </a>
                <a
                  className={`${section === "participants" ? style.menuActive : ""}`}
                  onClick={() => setSection("participants")}
                >
                  <span>Participants</span>
                </a>
              </h4>
              <div className="pb-5">
                {section === "ispo" && (
                  <div>
                    <div>
                      <ChartSchedule history={ispoHistory?.distributionHistory || []} />
                    </div>
                  </div>
                )}
                {section === "raystake" && (
                  <div>
                    <div>
                      <ChartStakeSchedule history={stakeHistory?.history || []} />
                    </div>
                  </div>
                )}
                {section === "participants" && (
                  <div>
                    <div className="d-flex align-items-center mb-4">
                      <div className="flex-grow-1">
                        <Input.Search
                          placeholder="Search by Stake Key"
                          enterButton="Search"
                          size="large"
                          value={participantSearch}
                          type="email"
                          onSearch={() => search()}
                          onChange={(e) => setParticipantSearch(e.target.value)}
                          loading={loading}
                        />
                      </div>
                      {participantSearch && (
                        <div className="ms-4">
                          <span
                            className="link cursor"
                            onClick={() => resetSearch()}
                            onKeyDown={() => resetSearch()}
                          >
                            Reset
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="ray__table">
                      <Table
                        rowKey={(record) => record.key}
                        loading={loading}
                        dataSource={participants}
                        columns={columns}
                        // size="small"
                        pagination={{
                          ...pagination,
                          pageSize: 20,
                          showSizeChanger: false,
                          position: ["bottomLeft", "topLeft"],
                        }}
                        onChange={(e) => load(e.current)}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default XrayTokenomics

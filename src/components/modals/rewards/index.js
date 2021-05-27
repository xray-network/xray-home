import React, { useState } from 'react'
import { Modal, Input, Button, Tooltip, message, Alert } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { CopyToClipboard } from "react-copy-to-clipboard"
import { format } from "@/utils"
import style from './style.module.scss'

const RewardsModal = () => {
  const dispatch = useDispatch()
  const modalRewards = useSelector((state) => state.settings.modalRewards)
  const [address, setAddress] = useState('addr1q9acqkgp6ah0xl6dt6gxtrmj8ee4ehnzfeq9rcuwrldalfsl94rky7hgymnt04zzmn696ksga7526ycypga0p0q5scfquhr65g')
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [rewards, setRewards] = useState({
    found: false,
    rewardsHistory: [],
    stakeKey: '',
    total: 0,
  })


  const handleCancel = () => {
    dispatch({
      type: 'settings/CHANGE_SETTING',
      payload: {
        setting: 'modalRewards',
        value: false,
      },
    })
    clear()
  }

  const fetchData = (e) => {
    e.preventDefault()
    if (address) {
      setLoading(true)
      // fetch(`https://graphql-helper.rraayy.com/rewards/ray/${address}`)
      fetch(`http://localhost:8080/rewards/delegation/state/${address}`)
        .then((response) => response.json())
        .then((data) => {
          setRewards(data)
          setLoading(false)
          setStep(2)
        })
        .catch(() => {
          message.error('Something went wrong')
          setLoading(false)
          setStep(1)
        })
    } else {
      message.warning('Please enter wallet address')
    }
  }

  const clear = () => {
    // setAddress('')
    setStep(1)
  }

  return (
    <Modal centered title="Withdraw Rewards" footer={null} visible={modalRewards} onCancel={handleCancel} width={440}>
      {step === 1 && (
        <div>
          <div className="ray__form__label">
            Your Wallet Address
          </div>
          <div className="mb-3">
            <Input value={address} placeholder="addr1..." size="large" onChange={(e) => setAddress(e.target.value)} />
          </div>
          <Button loading={loading} type="primary" className="ray__button w-100" onClick={fetchData}>
            Next
          </Button>
        </div>
      )}
      {step === 2 && (
        <div>
          {!rewards.found && (
            <div>
              <div className="mb-3">
                <Alert
                  type="warning"
                  showIcon
                  message="Address not found"
                  description="Rewards will be added after two epochs after Ray pool delegation or try a different address"
                />
              </div>
              <Tooltip title="Soon">
                <Button type="primary" className="ray__button w-100" onClick={clear}>
                  Try again
                </Button>
              </Tooltip>
            </div>
          )}
          {rewards.found && (
            <div>
              <div className="ray__form__label">
                Withdrawal address
              </div>
              <div className="mb-3">
                <div className={style.key}>
                  {address.slice(0, 8)}...{address.slice(-8)}{' '}
                  <CopyToClipboard
                    text={address}
                    onCopy={() => message.success('Copied to clipboard')}
                  >
                    <Tooltip title="Copy address">
                      <i className="fe fe-copy ray__copy" />
                    </Tooltip>
                  </CopyToClipboard>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="ray__form__label">
                    Current Rewards
                </div>
                  <div className="mb-3">
                    <div className={style.key}>
                      {format(rewards.total)}{' '}
                      <span className="ray__ticker">XRAY</span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="ray__form__label">
                    Early Delegator Bonus
                </div>
                  <div className="mb-3">
                    <div className={style.key}>
                      0{' '}
                      {/* {format(total)}{' '} */}
                      <span className="ray__ticker">XRAY</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <Alert type="warning" showIcon message="Withdrawals will be available after Epoch 270" />
              </div>
              <Tooltip title="Soon">
                <a href="/" disabled type="primary" className="ray__button w-100" onClick={fetchData}>
                  Withdraw
              </a>
              </Tooltip>
            </div>
          )}
        </div>
      )}
    </Modal>
  )
}

export default RewardsModal

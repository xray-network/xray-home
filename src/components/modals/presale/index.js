import React from 'react'
import { Modal } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import style from './style.module.scss'

const PresaleModal = () => {
  const dispatch = useDispatch()
  const modalPresale = useSelector((state) => state.settings.modalPresale)

  const handleCancel = () => {
    dispatch({
      type: 'settings/CHANGE_SETTING',
      payload: {
        setting: 'modalPresale',
        value: false,
      },
    })
  }

  return (
    <Modal centered title={null} footer={null} visible={modalPresale} onCancel={handleCancel} width={440}>
      <div className="text-center py-5">
        <span className={style.emoji} role="img" aria-label="">🎉</span>
        <h1 className="mb-2">
          <strong className="bolder">Q3 2021</strong>
        </h1>
        <span>Stay tuned!</span>
      </div>
    </Modal>
  )
}

export default PresaleModal

import React from 'react'
import '../styles/InfoBoardContent.scss'
import Form from './Form.js'

function InfoBoardContent() {
  return (
    <div className="info-board-content__wrapper">
      <div className="content-title">記錄數據</div>
      <div className="content-description">請填寫你的體重及體脂。</div>
      <Form/>
    </div>
  )
}

export default InfoBoardContent

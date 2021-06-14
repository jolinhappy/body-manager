import React, { useState } from 'react'
import '../styles/InfoBoard.scss'
import { Tabs, Tab } from '@material-ui/core';
import InfoBoardContent from './InfoBoardContent';

function InfoBoard() {
  const tabsList = [
    '紀錄', '圖表'
  ]
  const [selectedTab, setSelectedTab] = useState(0)
  
  const changeSelect = (event, prevSelect) => {
    console.log(prevSelect)
    setSelectedTab(prevSelect)
  }
  return (
    <div className="info-board">
      
        <Tabs value={selectedTab} onChange={changeSelect} indicatorColor="primary" textColor="primary" centered>
          {
            tabsList.map((tab, index) => <Tab label={ tab } key={ index }/>)
          }
        </Tabs>
      <InfoBoardContent />
    </div>
  )
}

export default InfoBoard

import React, { useState } from 'react'
import '../styles/InfoBoard.scss'
import { Tabs, Tab } from '@material-ui/core';
import InfoBoardContent from './InfoBoardContent';

function InfoBoard() {
  const tabsList = [
    '็ด้', 'ๅ่กจ'
  ]
  const [selectedTab, setSelectedTab] = useState(0)
  
  const changeSelect = (event, prevSelect) => {
    setSelectedTab(prevSelect)
  }

  return (
    <div className="info-board">
      
        <Tabs value={selectedTab} onChange={changeSelect} indicatorColor="secondary" textColor="secondary" centered>
          {
            tabsList.map((tab, index) => <Tab label={ tab } key={ index }/>)
          }
        </Tabs>
      <div className="info-board-content__wrapper">
        <InfoBoardContent selectedTab={selectedTab}/>
      </div>
    </div>
  )
}

export default InfoBoard

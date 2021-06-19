import React, { useState, useEffect } from 'react'
import '../styles/InfoBoardContent.scss'
import Form from './Form.js'
import Chart from './Chart.js'

function InfoBoardContent({ selectedTab }) {
  const [localStorageData, setLocalStorageData] = useState({})
  
  useEffect(() => {
    getLocalStorageData()
    return () => {
    }
  }, [selectedTab])

  const getLocalStorageData = () => {
    const res = JSON.parse(localStorage.getItem('data'))
    let labels = []
    let weightData = []
    let fatData = []
   
    if (res) {
      labels = res.map(data => (
        data.date
      ))
      weightData = res.map(data => (
        data.weight
      ))
      fatData = res.map(data => (
        data.fat
      ))
    }
    setLocalStorageData({
      ...localStorageData,
      labels: labels,
      datasets: [
        {
          label: '體重(kg)',
          data: weightData,
          fill: false,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
          yAxisID: 'y-axis-1',
        },
        {
          label: '體脂(%)',
          data: fatData,
          fill: false,
          backgroundColor: 'rgb(54, 162, 235)',
          borderColor: 'rgba(54, 162, 235, 0.2)',
          yAxisID: 'y-axis-2',
        }
      ]
    })
  }
  
  if (selectedTab === 0) {
    return (
    <React.Fragment>
      <div className="content-title">記錄數據</div>
      <div className="content-description">請填寫你的體重及體脂。</div>
      <Form/>
    </React.Fragment>
    )
  } else if (selectedTab === 1) {
    return (
      <React.Fragment>
        <h1>圖表</h1>
        <Chart data={ localStorageData }/>
      </React.Fragment>
    )
  }
}

export default InfoBoardContent


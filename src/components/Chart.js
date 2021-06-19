import React from 'react'
import { Line } from 'react-chartjs-2'

function Chart({ data }) {
  return (
    <div>
      <Line data={data} />
    </div>
  )
}

export default Chart

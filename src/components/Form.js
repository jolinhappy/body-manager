import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core';
import moment from 'moment'

export default class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      inputData: {
        date: moment().format('YYYY-MM-DD'),
        weight: '',
        fat: '',
      },
      allData: []
    }
  }
  
  handleDateChange = event => {
    this.setState(prevState => ({
      inputData: {
        ...prevState.inputData,
        date: event.target.value
      }
    }))
  }

  handleWeightChange = event => {
    this.setState(prevState => ({
      inputData: {
        ...prevState.inputData,
        weight: event.target.value
      }
    }))
  }

  handleFatChange = event => {
    this.setState(prevState => ({
      inputData: {
        ...prevState.inputData,
        fat: event.target.value
      }
    }))
  }

  submitData = (event) => {
    this.setState({
      allData: [
        ...this.state.allData,
        this.state.inputData
      ],
      inputData: {
        ...this.state.inputData,
        date: '',
        weight: '',
        fat: '',
      }
    }, () => { this.saveLocalStorage(this.state.allData) })
    event.preventDefault()
  }

  saveLocalStorage = (data) => {
    localStorage.setItem('data', JSON.stringify(data))
  }

  render() {
    return (
      <form onSubmit={this.submitData} >
        <TextField
          id="date"
          label="測量時間"
          type="date"
          value={this.state.inputData.date}
          InputLabelProps={{
            shrink: true,
          }}
          className="date-picker"
          onChange={this.handleDateChange}
        />
        <div className="input_wrapper">
          <TextField id="outlined-basic" label="體重" variant="outlined" className="data-input" value={this.state.inputData.weight} onChange={this.handleWeightChange}/><span className="unit">KG</span>
        </div>
        <div className="input_wrapper">
          <TextField id="outlined-basic" label="體脂" variant="outlined" className="data-input" value={this.state.inputData.fat} onChange={this.handleFatChange}/><span className="unit">%</span>
        </div>
        <Button variant="contained" color="primary" type="submit" >送出紀錄</Button>
      </form>
    )
  }
}

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
        muscle: '',
      },
      allData: JSON.parse(localStorage.getItem('data')) || []
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

  handleMuscleChange = event => {
    this.setState(prevState => ({
      inputData: {
        ...prevState.inputData,
        muscle: event.target.value
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
        muscle: ''
      }
    }, () => { this.saveLocalStorage(this.state.allData) })
    event.preventDefault()
  }

  saveLocalStorage = (data) => {
    data = data.sort((a, b) => {
      return moment(a.date) - moment(b.date)
    })
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
          <TextField id="outlined-basic" label="體重" variant="outlined" className="data-input" value={this.state.inputData.weight} onChange={this.handleWeightChange}/><span className="unit">kg</span>
        </div>
        <div className="input_wrapper">
          <TextField id="outlined-basic" label="體脂肪" variant="outlined" className="data-input" value={this.state.inputData.fat} onChange={this.handleFatChange}/><span className="unit">%</span>
        </div>
        <div className="input_wrapper">
          <TextField id="outlined-basic" label="骨骼肌" variant="outlined" className="data-input" value={this.state.inputData.muscle} onChange={this.handleMuscleChange}/><span className="unit">kg</span>
        </div>
        <Button variant="contained" color="secondary" type="submit" >送出紀錄</Button>
      </form>
    )
  }
}

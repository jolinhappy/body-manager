import React, { Component } from 'react'
import { TextField, Button, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab'
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
      allData: JSON.parse(localStorage.getItem('data')) || [],
      toastOpen: false
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
    event.preventDefault()
    const { data, weight, fat, muscle } = this.state.inputData
    if (data === '' || weight === '' || fat === '' || muscle === '') {
      this.setState({
        toastOpen: true
      })
      return
    }
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
  }

  saveLocalStorage = (data) => {
    data = data.sort((a, b) => {
      return moment(a.date) - moment(b.date)
    })
    localStorage.setItem('data', JSON.stringify(data))
  }

  handleClose = () => {
    this.setState({
      toastOpen: false
    })
  }

  render() {
    return (
      <React.Fragment>
        <Snackbar open={this.state.toastOpen} onClose={this.handleClose} autoHideDuration={6000} anchorOrigin={{ vertical: 'top', horizontal: 'center'}}>
          <Alert severity="warning">
              ??????<strong>????????????</strong>???????????????
          </Alert>
        </Snackbar>

        <form onSubmit={this.submitData} >
          <TextField
            id="date"
            label="????????????"
            type="date"
            value={this.state.inputData.date}
            inputProps={{ min: '', max: moment().format('YYYY-MM-DD') }}
            InputLabelProps={{
              shrink: true,
            }}
            className="date-picker"
            onChange={this.handleDateChange}
          />
          <div className="input_wrapper">
            <TextField id="outlined-basic" label="??????" variant="outlined" className="data-input" value={this.state.inputData.weight} onChange={this.handleWeightChange}/><span className="unit">kg</span>
          </div>
          <div className="input_wrapper">
            <TextField id="outlined-basic" label="?????????" variant="outlined" className="data-input" value={this.state.inputData.fat} onChange={this.handleFatChange}/><span className="unit">%</span>
          </div>
          <div className="input_wrapper">
            <TextField id="outlined-basic" label="?????????" variant="outlined" className="data-input" value={this.state.inputData.muscle} onChange={this.handleMuscleChange}/><span className="unit">kg</span>
          </div>
          <Button variant="contained" color="secondary" type="submit" >????????????</Button>
        </form>
      </React.Fragment>
    )
  }
}

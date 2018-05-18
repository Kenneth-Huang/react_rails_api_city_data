import React, { Component } from 'react';
import '../App.css';
import Report from './Report'
import ReportForm from './ReportForm'
import LoadingIndicator from './LoadingIndicator'
// import sample_data from '../sample_data'

class App extends Component {
  constructor(){
    super()
    this.state = {
      cityLoc: '',
      stateLoc: '',
      isFetching: false,
      baseUrl: 'http://localhost:3001/reports',
      reportData: false
    }
  }

  // Sets the state of App.js
  setReportLocation = (location) => {
    this.setState({
      cityLoc: location.cityLoc,
      stateLoc: location.stateLoc
    })
    this.getReportData(location)
  }

  // Hit the API to get data
  getReportData = (inputLocation) => {
    const {stateLoc, cityLoc} = inputLocation
    // Before performing the fetch, set isFetching to true
    this.setState({isFetching: true})
    // After component mounts, call the API to get the
    // users, then update state which triggers re-render
    fetch(`${this.state.baseUrl}/${stateLoc}/${cityLoc}`, {
      headers:
        {
          'Accept': 'application/json',
          'Credentials': 'same-origin'
        }
    })
      .then(function(response){
        if(!response.ok){
          throw new Error(`Response Not OK: ${response.status} ${response.statusText}`)
        }
        return response.json()
      })
      .then((json) => {
        this.setState({
          reportData: json.data.attributes,
          isFetching: false
        })
      })
      .catch(function(err){
        console.log(err)
      })
  }

  render() {
    const {isFetching, reportData, cityLoc, stateLoc} = this.state
    return (
      <div className="container">
        <h1>City Information Report</h1>
        <ReportForm setReportLocation={this.setReportLocation} />

        {isFetching ? <LoadingIndicator /> : ""}

        {!isFetching && reportData ? <Report data={reportData} cityLoc={cityLoc} stateLoc={stateLoc}/> : ""}

        { /*  <Report data={sample_data.attributes} cityLoc={cityLoc} stateLoc={stateLoc}/> */ }
      </div>
    );
  }
}

export default App;

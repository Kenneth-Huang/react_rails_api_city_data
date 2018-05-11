import React, { Component } from 'react';
import '../App.css';
import Report from './Report'
import ReportForm from './ReportForm'

class App extends Component {
  constructor(){
    super()
    this.state = {
      city: '',
      state: '',
      loading: '/images/loading1.gif',
      isFetching: false,
      baseUrl: 'http://localhost:3001/reports',
      report: false
    }
  }

  setReportLocation = (location) => {
    this.setState({
      city: location.city,
      state: location.state
    })
    this.getReportData(location)
  }

  getReportData = (inputLocation) => {
    const {state, city} = inputLocation
    // Before performing the fetch, set isFetching to true
    this.setState({isFetching: true})
    // After component mounts, call the API to get the
    // users, then update state which triggers re-render
    // fetch('http://localhost:3001/reports/tx/austin', {
    fetch(`${this.state.baseUrl}/${state}/${city}`, {
      headers:
        {
          'Accept': 'application/json',
          'Credentials': 'same-origin'
        }
    })
      .then(function(response){
        console.log({response})
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
    const {isFetching, loading, reportData} = this.state

    return (
      <div className="container">
        <h1>City Information Report</h1>
        <ReportForm setReportLocation={this.setReportLocation} />
        {isFetching ? <img className='loading-spinner' src={loading} alt='Loading...' /> : ""}
        {reportData ? <Report data={reportData} /> : ""}

      </div>
    );
  }
}

export default App;

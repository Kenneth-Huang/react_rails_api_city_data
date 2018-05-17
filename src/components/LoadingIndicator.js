import React from "react"

class LoadingIndicator extends React.Component {
  render(){
    return (
      <div className='loading-indicator'>
        <h3>Gathering your city data...</h3>
        <img src='/images/spinner_gather.gif' alt='Loading...' />
      </div>
    )
  }
}

export default LoadingIndicator

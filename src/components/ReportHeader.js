import React from "react"

class ReportHeader extends React.Component {
  render(){
    const {city, state} = this.props
    return (
      <React.Fragment>
        <h1>Report for {city}, {state}</h1>
      </React.Fragment>
    )
  }
}

export default ReportHeader

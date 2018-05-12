import React from "react"

class ReportHeader extends React.Component {
  render(){
    const {cityLoc, stateLoc} = this.props
    return (
      <React.Fragment>
        <h1>Report for {cityLoc}, {stateLoc}</h1>
      </React.Fragment>
    )
  }
}

export default ReportHeader

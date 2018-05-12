import React from "react"
import LocationSearchInput from './LocationSearchInput'


class ReportForm extends React.Component {

  constructor(){
    super()
    this.state = {
      cityLoc: '',
      stateLoc: ''
    }
  }

  // Gets the info from LocationSearchInput and saves it to ReportForm state
  setFormLocation = (googleLocation) => {
    let parsedLoc = googleLocation.split(', ')
    this.setState({
      cityLoc: parsedLoc[0],
      stateLoc: parsedLoc[1]
    })
  }

  // Processes the form submission
  createReportLocation = (e) => {
    e.preventDefault()
    const inputLocation = {
      cityLoc: this.state.cityLoc,
      stateLoc: this.state.stateLoc
    }
    // Sets the location for the Report components
    this.props.setReportLocation(inputLocation)

    // Clear the form fields
    e.currentTarget.reset()
  }


  render(){
    return (
      <form onSubmit={this.createReportLocation}  className="card card-body mb-3">
        <div className="row">
          <div className="col-sm-12">
            <p>Enter a US City</p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-10">
            <LocationSearchInput setFormLocation={this.setFormLocation}/>
          </div>

          <div className="col-sm-2">
            <button type="submit" className="btn btn-xs btn-primary">Submit</button>
          </div>
        </div>
      </form>

    )
  }
}

export default ReportForm

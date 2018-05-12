import React from "react"

class ReportForm extends React.Component {

  cityLocRef = React.createRef()
  stateLocRef = React.createRef()


  createReportLocation = (e) => {
    e.preventDefault()
    const inputLocation = {
      cityLoc: this.cityLocRef.current.value,
      stateLoc: this.stateLocRef.current.value

    }
    this.props.setReportLocation(inputLocation)

    // Clear the form fields
    e.currentTarget.reset()
  }


  render(){
    return (
      <form onSubmit={this.createReportLocation}  className="card card-body mb-3">
        <div className="row">
          <div className="col-sm-12">
            <p>Enter a Location</p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-8">
            <input ref={this.cityLocRef} type="text" name="city" placeholder="City" className="form-control"/>
          </div>

          <div className="col-sm-2">
            <input ref={this.stateLocRef} type="text" name="state" placeholder="State" className="form-control"/>
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

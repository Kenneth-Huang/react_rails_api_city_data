import React from "react"

class ReportForm extends React.Component {

  cityRef = React.createRef()
  stateRef = React.createRef()

  createReportLocation = (e) => {
    e.preventDefault()
    const inputLocation = {
      city: this.cityRef.current.value,
      state: this.stateRef.current.value
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
            <input ref={this.cityRef} type="text" name="city" placeholder="City" className="form-control"/>
          </div>

          <div className="col-sm-2">
            <input ref={this.stateRef} type="text" name="state" placeholder="State" className="form-control"/>
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

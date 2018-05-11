import React from "react"

class LocationWeather extends React.Component {
  render(){
    const geoLocation = this.props.geoLocation
    return (
      <React.Fragment>
        <h4>Weather for {geoLocation.city}, {geoLocation.state} as of {geoLocation.local_time}</h4>
        <p>{geoLocation.temperature} and {geoLocation.description}</p>
      </React.Fragment>
    )
  }
}

export default LocationWeather

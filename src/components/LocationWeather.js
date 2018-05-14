import React from "react"

class LocationWeather extends React.Component {
  render(){
    const geoLocation = this.props.geoLocation
    return (
      <div className="col-sm-4">
        <img src={geoLocation.icon_url} alt={geoLocation.description}/>
        <h4>{geoLocation.city}, {geoLocation.state}</h4>
        <p>{geoLocation.temperature} and {geoLocation.description}</p>
      </div>
    )
  }
}

export default LocationWeather

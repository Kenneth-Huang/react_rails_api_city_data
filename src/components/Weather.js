import React from "react"
import LocationWeather from './LocationWeather'

class Weather extends React.Component {
  render(){
    const {current_city, nearby_cities} = this.props.data
    return (
      <React.Fragment>
        <LocationWeather geoLocation={current_city}/>

      </React.Fragment>
    )
  }
}

export default Weather

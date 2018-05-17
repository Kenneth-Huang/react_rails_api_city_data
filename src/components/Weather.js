import React from "react"
import LocationWeather from './LocationWeather'
var shortid = require('shortid');

class Weather extends React.Component {
  render(){
    const {current_city, nearby_cities} = this.props.data
    return (
      <div className="weather">

        <div className="current-city">
          <h2>Weather for {current_city.city}, {current_city.state}</h2>
          <h3>as of {current_city.local_time}</h3>
          <img src={current_city.icon_url} alt={current_city.description}/>
          <h1>{current_city.temperature}<br/>{current_city.description}</h1>
        </div>

        <div className="nearby-cities row">
          {nearby_cities.map((loc) => { return <LocationWeather geoLocation={loc} key={shortid.generate()}/> })}
        </div>

      </div>
    )
  }
}

export default Weather

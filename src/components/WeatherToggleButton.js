import React from "react"

class WeatherToggleButton extends React.Component {

  render(){
    const {displayMajorCities, toggleWeather} = this.props

    return (
      <div className='weather-toggle' onClick={toggleWeather}>
        {displayMajorCities ?
          <React.Fragment>
          <div>Nearby Cities</div>
          <div className='on'>Major Cities</div>
        </React.Fragment> :
        <React.Fragment>
          <div className='on'>Nearby Cities</div>
          <div>Major Cities</div>
        </React.Fragment>}
      </div>
    )
  }
}

export default WeatherToggleButton

import React from "react"
import WeatherToggleButton from './WeatherToggleButton'
import RelatedCities from './RelatedCities'

class Weather extends React.Component {
  constructor(){
    super()
    this.state = {
      displayMajorCities: false
    }
  }

  toggleWeather = (e) => {
    e.preventDefault()
    if(this.state.displayMajorCities === true){
      this.setState({displayMajorCities: false})
    } else {
      this.setState({displayMajorCities: true})
    }
  }

  render(){
    const {current_city, nearby_cities, major_cities} = this.props.data
    const displayMajorCities = this.state.displayMajorCities
    const toggleWeather = this.toggleWeather

    return (
      <div className="weather">

        <div className="current-city">
          <h2>Weather for {current_city.city}, {current_city.state}</h2>
          <h3>as of {current_city.local_time}</h3>
          <img src={current_city.icon_url} alt={current_city.description}/>
          <h1>{current_city.temperature}<br/>{current_city.description}</h1>
        </div>

        <div className='row'>
          <WeatherToggleButton toggleWeather={toggleWeather} displayMajorCities={displayMajorCities}/>
        </div>

        <div className="related-cities row">
          {displayMajorCities ? <RelatedCities data={major_cities}/> : <RelatedCities data ={nearby_cities} />}
        </div>

      </div>
    )
  }
}

export default Weather

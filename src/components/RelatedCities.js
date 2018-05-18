import React from "react"
import LocationWeather from './LocationWeather'
var shortid = require('shortid');


class RelatedCities extends React.Component {
  render(){
    const data = this.props.data

    return (
      <React.Fragment>
        {data.map((loc) => { return <LocationWeather geoLocation={loc} key={shortid.generate()} /> })}
      </React.Fragment>
    )
  }
}

export default RelatedCities

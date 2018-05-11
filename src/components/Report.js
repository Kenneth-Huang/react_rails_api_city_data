import React from "react"
import ReportHeader from './ReportHeader'
import Weather from './Weather'
import Events from './Events'
import Articles from './Articles'
import Photos from './Photos'


class Report extends React.Component {
  render(){
    const {state, city, data} = this.props
    const {area_weather, events, articles, photos} = data

    return (
      <div className="row">
        <div className="col-xs-12">
          <ReportHeader city={city} state={state}/>

          { area_weather ? <Weather data={area_weather}/> : <p>There is no Weather Information for the {city}, {state} area.</p> }

          { events ? <Events data={events}/> : <p>There are no Events in {city}, {state} in the next 30 days.</p> }

          { articles ? <Articles data={articles}/> : <p>There are no Articles on the topic of {city}, {state}.</p> }

          { photos ? <Photos data={photos}/> : <p>Oh darn. There are no Photos tagged with {city}, {state}.</p> }

        </div>
      </div>
    )
  }
}

export default Report

import React from "react"
import ReportHeader from './ReportHeader'
import Weather from './Weather'
import Events from './Events'
import Articles from './Articles'
import Photos from './Photos'


class Report extends React.Component {
  render(){
    const {stateLoc, cityLoc, data} = this.props
    const {area_weather, events, articles, photos} = data

    return (
      <div className="row">
        <div className="col-xs-12">
          <ReportHeader cityLoc={cityLoc} stateLoc={stateLoc}/>

          { area_weather ? <Weather data={area_weather}/> : <p>There is no Weather Information for the {cityLoc}, {stateLoc} area.</p> }

          { events ? <Events data={events}/> : <p>There are no Events in {cityLoc}, {stateLoc} in the next 30 days.</p> }

          { articles ? <Articles data={articles}/> : <p>There are no Articles on the topic of {cityLoc}, {stateLoc}.</p> }

          { photos ? <Photos data={photos}/> : <p>Oh darn. There are no Photos tagged with {cityLoc}, {stateLoc}.</p> }

        </div>
      </div>
    )
  }
}

export default Report

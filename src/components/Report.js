import React from "react"
import ReportHeader from './ReportHeader'
import Events from './Events'
import Articles from './Articles'
import Photos from './Photos'


class Report extends React.Component {
  render(){
    const data = this.props
    const {state, city, events, articles, photos} = data

    return (
      <div className="row">
        <div className="col-xs-12">
          <ReportHeader city={city} state={state}/>

          { events ? <Events data={events}/> : <p>There are no Weather Information for {city}, {state} in hte next 30 days.</p> }

          { articles ? <Articles data={articles}/> : <p>There are no Articles on the topic of {city}, {state}.</p> }

          { photos ? <Photos data={photos}/> : <p>Oh darn. There are no Photos tagged with {city}, {state}.</p> }

        </div>
      </div>
    )
  }
}

export default Report

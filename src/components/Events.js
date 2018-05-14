import React from "react"

import Event from './Event'


class Events extends React.Component {
  render(){
    const events = this.props.data

    return (
      <React.Fragment>
        <h2>Events</h2>
        { events.map((event) => { return <Event key={event.id} data={event}/> }) }
      </React.Fragment>
    )
  }
}

export default Events

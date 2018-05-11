import React from "react"

class Event extends React.Component {
  render(){
    const {name, date, url, venue, venue_url} = this.props.data
    return (
      <React.Fragment>
        <div className='card card-body mb-2'>
          <h3><a href={url} target="_blank">{name}</a></h3>
          <p>on {date} at <a href={venue_url} target="_blank">{venue}</a></p>
        </div>
      </React.Fragment>
    )
  }
}

export default Event

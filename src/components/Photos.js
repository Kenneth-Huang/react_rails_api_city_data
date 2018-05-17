import React from "react"
import Photo from './Photo'
var shortid = require('shortid');

class Photos extends React.Component {
  render(){
    const photos = this.props.data

    return (
      <React.Fragment>
        <h2>Photos</h2>

        <div className="card-columns">
          <div className="row">
            { photos.map((photo) => { return <Photo key={shortid.generate()} data={photo}/> }) }
          </div>
        </div>

      </React.Fragment>
    )
  }
}

export default Photos

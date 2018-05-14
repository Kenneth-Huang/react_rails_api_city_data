import React from "react"
import Photo from './Photo'

class Photos extends React.Component {
  render(){
    const photos = this.props.data

    return (
      <React.Fragment>
        <h2>Photos</h2>

        <div className="card-columns">
          <div className="row">
            { photos.map((photo) => { return <Photo key={photo} data={photo}/> }) }
          </div>
        </div>

      </React.Fragment>
    )
  }
}

export default Photos

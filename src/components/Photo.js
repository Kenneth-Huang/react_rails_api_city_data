import React from "react"

class Photo extends React.Component {
  render(){
    const {url, caption} = this.props.data
    return (
      <div className="col-sm-3">
        <div className="card">
          <img className="card-img-top" src={url} alt={caption}/>
          <div className="card-body">
            <p className="card-text">{caption}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Photo

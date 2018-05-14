import React from "react"

class Photo extends React.Component {
  render(){
    const {url, caption} = this.props.data
    return (
      <div className="card">
        <img className="card-img-top" src={url} alt={caption}/>
      </div>
    )
  }
}

export default Photo

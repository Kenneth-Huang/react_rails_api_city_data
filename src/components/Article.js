import React from "react"

class Article extends React.Component {
  render(){
    const {title, url, date} = this.props.data
    return (
      <React.Fragment>
        <div className="card card-body mb-2">
          <h4><a href={url} target="_blank">{title}</a> <span className="smaller">({date})</span></h4>
        </div>
      </React.Fragment>
    )
  }
}

export default Article

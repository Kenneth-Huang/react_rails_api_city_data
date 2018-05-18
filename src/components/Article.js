import React from "react"
var moment = require('moment');


class Article extends React.Component {

  formatDate = function(d){
    return moment(d).format('MMMM Do YYYY')
  }

  render(){
    const {title, url, date} = this.props.data
    return (
      <React.Fragment>
        <div className="article mb-2">
          <h4><a href={url} target="_blank">{title}</a></h4>
          <p>{this.formatDate(date)}</p>
        </div>
      </React.Fragment>
    )
  }
}

export default Article

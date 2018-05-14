import React from "react"

class Article extends React.Component {
  render(){
    const {title, url, date} = this.props.data
    return (
      <React.Fragment>
        <div className="article mb-2">
          <h4><a href={url} target="_blank">{title}</a></h4>
          <p>({date})</p>
        </div>
      </React.Fragment>
    )
  }
}

export default Article

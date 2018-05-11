import React from "react"
import Article from './Article'


class Articles extends React.Component {
  render(){
    const articles = this.props.data.articles

    return (
      <React.Fragment>
        <h2>Articles</h2>
        { articles.map((article) => { return <Article key={article} data={article}/> }) }
      </React.Fragment>
    )
  }
}

export default Articles

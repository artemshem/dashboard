import React, { Component } from 'react';
import API from '../api/api';
import Article from '../components/article/article';

class News extends Component<any, any> {
  state = {
    articles: [] as Array<any>,
  }

  api = new API();

  componentDidMount = () => {
    this.api.getNews()
      .then(response => {
        this.setState({ articles: response.articles })
      });
  }

  render() {
    const { articles } = this.state;
    console.log(articles);
    return (
      <div className="main-container">
        <div className="articles-list">
          {articles.map((item, index) => {
            return (
              <Article {...item} key={index} />
            )
          })}
        </div>
      </div>
    )
  }
}

export default News;
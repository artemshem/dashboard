import React, { Component } from 'react';

interface IComponentProps {
  title: string;
  url: string;
  urlToImage: string;
  content: string;
  author: string;
}

class Article extends Component<IComponentProps> {

  render() {
    const { title, url, urlToImage, content, author } = this.props;

    return (
      <article className="article-body">
        <div className="article-left">
          {urlToImage &&
            <img src={urlToImage} />
          }
        </div>
        <div className="article-right">
          <a className="article-title" href={url} target="_blank">
            {title}
          </a>
          <span className="article-content">
            {content}
          </span>
          <span className="article-author">
            {author}
          </span>
        </div>
      </article>
    )
  }
}

export default Article;
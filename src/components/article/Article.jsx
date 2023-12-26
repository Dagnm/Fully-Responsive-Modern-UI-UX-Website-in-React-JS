import React from 'react';
import './article.css';
const Article = ({imgurl, date, title}) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={imgurl} alt='blog'/>
      </div>
    <div className='gpt3__blog-container_article-content'>
      <div>
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
      <p>Read Full Article</p>
    </div>
  
    </div>
  )
}

export default Article
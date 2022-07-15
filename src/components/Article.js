import React from 'react'

function Article(props, date="January 1, 1970") {

    // const articles = articleItems.map((article) => {
    //     return <span key={article}>{article}</span>;
    //   });

  return (
    <article>
      <h3>{props.title}</h3>
      <small>{props.date}</small>
      <p>{props.preview}</p>
    </article>
  )
}

export default Article

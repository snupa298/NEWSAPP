

import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const [article, setArticle] = useState();

  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data from the API and update state
    fetch('https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=70d8e3e4e4ca4099997814c20a6a8af9')
      .then(response => response.json())
      .then(data => {setItems(data.articles)
        console.log(id)
        setArticle(data.articles[id])
      }
      
      )
      .catch(error => console.error('Error fetching data:', error));
  
     
  }, []);

  return (
    <Container>
     <u><h4>Article Details</h4></u> 
      {article ? (
        <div>
             <h5>Author:</h5>
          <p>{article.author}</p>
          <h1><b>{article.title}</b> </h1>
          <img src={article.urlToImage}></img>
          <h5>Description:</h5>
          <p> {article.description}</p>
          <h5>Content:</h5>
          <p>{article.content}</p>
          <Link to={article.url}>{article.url}</Link>
          <h6>PublishedAt:</h6>
          <p>{article.publishedAt}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Link to="/">Back to List</Link>
    </Container>
  );
};

export default Details;







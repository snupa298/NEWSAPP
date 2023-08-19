

import React, { useState, useEffect } from 'react';
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
    <div>
      <h2>Article Details</h2>
      {article ? (
        <div>
          <h1><b>{article.title}</b> </h1>
          <p> {article.description}</p>
          <Link to={article.url}>{article.url}</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Link to="/">Back to List</Link>
    </div>
  );
};

export default Details;







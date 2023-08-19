import React, { useEffect, useState } from 'react'
import { Row ,Container,Col,ListGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NewsPage = ({getNews}) => {

const [news,setNews]=useState([])

useEffect(()=>{
getNews()
  .then((data)=>{
    setNews(data.articles)
  })
  .catch(err => console.log(err))
},[])

const splitNewsIntoColumns = (newsArray) => {
    const midIndex = Math.ceil(newsArray.length / 2);
    const firstColumn = newsArray.slice(0, midIndex);
    const secondColumn = newsArray.slice(midIndex);
    return [firstColumn, secondColumn];
  };

  const columns = splitNewsIntoColumns(news);

  return (
   <Container>
    <Row>
{columns.map((column, columnIndex) => (
          <Col md={6} key={columnIndex}>
            <ListGroup as="ol" numberedItems>
              {column.map((item, idx) => (
                <ListGroup.Item
                  key={idx}
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{item.title}</div>
                    {item.description}
                   
                  </div>
                  <Link to={`/news/${idx}`}>
  Read more...
</Link>

                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        ))}

    </Row>
   </Container>
  )
}

export default NewsPage



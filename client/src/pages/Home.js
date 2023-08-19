import React,{useState,useEffect} from 'react'
import { Row ,Container,Col,ListGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {

// const getNews =async () =>{
// const {data} = await axios.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=70d8e3e4e4ca4099997814c20a6a8af9")
// console.log(data)
// return data;

// }

const [items, setItems] = useState([]);

useEffect(() => {
  // Fetch data from the API and update state
  fetch('https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=70d8e3e4e4ca4099997814c20a6a8af9')
    .then(response => response.json())
    .then(data => {setItems(data.articles)
        
        const articlesForSource1 = data.articles[0]
        console.log(articlesForSource1);
    }
    
    )
    .catch(error => console.error('Error fetching data:', error));

   
}, []);

const splitNewsIntoColumns = (newsArray) => {
    const midIndex = Math.ceil(newsArray.length / 2);
    const firstColumn = newsArray.slice(0, midIndex);
    const secondColumn = newsArray.slice(midIndex);
    return [firstColumn, secondColumn];
  };

  const columns = splitNewsIntoColumns(items);

  return (
  
    // <NewsPage getNews={getNews} news={data.articles} />
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
    <Row>

    
    </Row>
   </Container>
  )
}

export default Home


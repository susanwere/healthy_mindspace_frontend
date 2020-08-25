import React from 'react';
import {Card, Container, Row, Col} from 'react-bootstrap';
import image from './../../images/1.jpg'
import './articles.scss';
import axios from 'axios';
import Moment from 'react-moment';
import EllipsisText from "react-ellipsis-text";

export default class Articles extends React.Component {

  state = {
    articles: []
  }

  componentDidMount(){
    axios.get('https://healthy-mindspace-api.herokuapp.com/articles', 
    {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.JC6qKuH9SG0SIiYSfhZUFTtirxN9Q47buLk0DPFFFzE'
      }
    })
         .then(res => {
           this.setState({ articles: res.data.articles })
         })
  }

  render() {
    const articles = this.state.articles
    return(
      <div className="articles">
        <Container>
          <Row>
            {articles.slice(Math.max(articles.length - 3, 0)).map((article) => 
              <Col sm={6} md={4} key={article.id}>
                <div>
                <Card className="articleImage">
                  <Card.Img variant="top" src={image} />
                </Card>
                <Card className="textCard">
                <Card.Body>
                  <Card.Title>
                    <EllipsisText 
                      text={article.title} 
                      length={"25"} />
                  </Card.Title>
                  <Card.Text>
                    <EllipsisText 
                      text={article.body} 
                      length={"220"} />
                  </Card.Text>
                  <footer className="articleFooter">
                    {article.created_by} 
                    <cite title="Source Title">
                      <Moment format="D MMM, YYYY">{article.created_at}</Moment>
                    </cite>
                  </footer>
                  </Card.Body>
                </Card>
                </div>
            </Col>
            )}
          </Row>
        </Container>
      </div>
    )
  }
}
import React from 'react';
import {Card, Container, Row, Col, Button} from 'react-bootstrap';
import image from './../../images/3.jpg'
import './articles.scss';
import axios from 'axios';
import EllipsisText from "react-ellipsis-text";

export default class ArticlesMain extends React.Component {

  state = {
    articles: [],
    min: 0
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

  morePosts = () => {
    this.setState({min: this.state.min+8})
  }

  prevPosts = () => {
    this.setState({min: this.state.min-8})
  }

  render () {
    const articles = this.state.articles;
    const no_of_articles = this.state.articles.length - this.state.min;
  
    return(
      <div className="articles">
        <Container>
          <Row>
            {articles.slice(this.state.min, this.state.min + 8).map((article) => 
              <Col sm={4} md={3} key={article.id}>
                <div>
                <Card className="mt-4 mainArticleCard">
                  <Card.Img variant="top" src={image} className="mainImage" />
                  <Card.Body>
                  <Card.Title>
                    <EllipsisText 
                      text={article.title} 
                      length={"20"} />
                  </Card.Title>
                  <Card.Text>
                    <EllipsisText 
                      text={article.body} 
                      length={"200"} />
                  </Card.Text>
                  <footer className="articleFooter">
                    <a href="/read">Read More</a>
                  </footer>
                  </Card.Body>
                </Card>
                </div>
            </Col>
            )}
          </Row>
          <Row className="text-center">
            <Col sm={no_of_articles < 8 ? 12 : 6} className={this.state.min > 0 ? "" : "hidden"}>
              <Button className="lessPosts" onClick={this.prevPosts}>Previous Articles</Button>
            </Col>
            <Col sm={this.state.min > 0 ? 6 : 12} className={no_of_articles < 8 ? "hidden" : ""}>
            <Button className="morePosts" onClick={this.morePosts}>More Articles</Button>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

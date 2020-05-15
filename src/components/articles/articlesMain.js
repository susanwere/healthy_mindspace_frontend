import React from 'react';
import {Card, Container, Row, Col, Button} from 'react-bootstrap';
import image from './../../images/3.jpg'
import './articles.scss';

export default function ArticlesMain(){
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

  return(
    <div className="articles">
      <Container>
        <Row>
          {numbers.map((number) => 
            <Col sm={3}>
              <div>
              <Card className="mt-4">
                <Card.Img variant="top" src={image} className="mainImage" />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <footer className="articleFooter">
                  <a href="#">Read More</a>
                </footer>
                </Card.Body>
              </Card>
              </div>
          </Col>
          )}
        </Row>
        <Row className="text-center">
          <Button className="morePosts">More Posts</Button>
        </Row>
      </Container>
    </div>
  )
}
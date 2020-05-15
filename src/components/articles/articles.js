import React from 'react';
import {Card, Container, Row, Col} from 'react-bootstrap';
import image from './../../images/1.jpg'
import './articles.scss';

export default function Articles(){
  const numbers = [1, 2, 3];

  return(
    <div className="articles">
      <Container>
        <Row>
          {numbers.map((number) => 
            <Col sm={4}>
              <div>
              <Card className="articleImage">
                <Card.Img variant="top" src={image} />
              </Card>
              <Card className="textCard">
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <footer className="articleFooter">
                  Someone Famous .<cite title="Source Title">April, 5th 2020</cite>
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
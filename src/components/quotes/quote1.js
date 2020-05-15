import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import image from '../../images/4.png';
import './quotes.scss';

export default function Quote1 () {
  return (
    <div className="quote1">
      <Container>
        <Row>
          <Col sm={12}>
            <img src={image} className="quote1Image"></img>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="mt-4">
            <p><b>It is health that is real wealth and not pieces of gold and silver.</b></p><br />
            <h4>Mahatma Gandhi</h4>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
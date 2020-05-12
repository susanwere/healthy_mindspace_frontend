import React from 'react';
import anxiety from '../../images/1.jpg';
import depression from '../../images/2.jpg';
import lifestyle from '../../images/lifestyle.jpg';
import psychology from '../../images/5.jpg'
import {Card, Container, Row, Col, Button, Form, FormControl} from 'react-bootstrap';
import './home.scss'

export default function Home(){
  return (
    <div>
      <Container className="mt-4">
        <Row>
        <Col sm={6} className="homeTitle">
          <p className="titleText">The Healthy MindSpace</p>
          <Form inline className="subscribeForm" as={Row}>
            <Form.Label className="mindMail" as={Col} sm={12}>Mind your mailbox for new posts</Form.Label><br />
            <Col sm={12}>
              <FormControl type="text" placeholder="Email" className="mr-sm-2" />
              <Button variant="outline-success">Subscribe</Button>
            </Col>
            
          </Form>
        </Col>
        <Col sm={6}>
          <Row>
            <Col sm={6} className="mt-4">
              <Card>
                <Card.Img variant="top" src={anxiety} height='250px' />
              </Card>
              <Button className="imageButton">Anxiety</Button>
            </Col>
            <Col sm={6} className="mt-4">
              <Card>
                <Card.Img variant="top" src={depression} height='250px' />
              </Card>
              <Button className="imageButton">depression</Button>
            </Col>
            </Row>
            <Row className="mt-4">
            <Col sm={6} className="mt-4">
              <Card>
                <Card.Img variant="top" src={lifestyle} height='250px' />
              </Card>
              <Button className="imageButton">lifestyle</Button>
            </Col>
            <Col sm={6} className="mt-4">
              <Card>
                <Card.Img variant="top" src={psychology} height='250px' />
              </Card>
              <Button className="imageButton">Psychological Analysis</Button>
            </Col>
          </Row>
        </Col>
        </Row>
      </Container>
    </div>
  )
}

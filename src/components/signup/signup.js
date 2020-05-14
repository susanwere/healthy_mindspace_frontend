import React from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import './signup.scss'

export default function Signup(){
  return(
    <Container className="signupContainer">
      <Row>
        <Col sm={5} className="signupImage">
        </Col>
        <Col sm={7} className="formContainer">
        <Form className="signupForm">
          <h3>Create An Account</h3>

          <Form.Group as={Row} controlId="formPlaintextUsername">
            <Form.Label column sm="4" md="2">
              Username
            </Form.Label>
            <Col sm="8" md="10">
              <Form.Control type="text" placeholder="Username" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="4" md="2">
              Email
            </Form.Label>
            <Col sm="8" md="10">
              <Form.Control type="email" placeholder="name@example.com" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="4" md="2">
              Password
            </Form.Label>
            <Col sm="8" md="10">
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="4" md="2">
              Confirm Password
            </Form.Label>
            <Col sm="8" md="10">
              <Form.Control type="password" placeholder="Confirm Password" />
            </Col>
          </Form.Group>

          <Row className="mt-4">
            <Col sm="6" className="text-center">
            </Col>
            <Col sm="6">
              <Button type="submit" className="signupButton" variant="primary" href="/">
                Sign Up
              </Button>
            </Col>
          </Row>
        </Form>
        <p className="login" column sm="6">Already have an account? <a href='/login'>Login Here</a></p>
        </Col>
      </Row>
    </Container>
  )
}
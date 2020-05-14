import React from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import './login.scss'

export default function Login(){
  return(
    <Container className="loginContainer">
      <Row>
        <Col sm={5} className="loginImage">
        </Col>
        <Col sm={7} className="formContainer">
        <Form className="loginForm">
          <h3>Welcome Back!!</h3>

          <Form.Group as={Row} controlId="formPlaintextUsername">
            <Form.Label column sm="4" md="2">
              Username
            </Form.Label>
            <Col sm="8" md="10">
              <Form.Control type="text" placeholder="Username" />
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

          <Row className="mt-4">
            <Col sm="6" className="text-center">
            </Col>
            <Col sm="6">
              <Button type="submit" className="loginButton" variant="primary"  href="/">
                Log In
              </Button>
            </Col>
          </Row>
        </Form>
        <p className="signup" column sm="6">Don't have an account? <a href='/signup'>Sign Up Here</a></p>
        </Col>
      </Row>
    </Container>
  )
}
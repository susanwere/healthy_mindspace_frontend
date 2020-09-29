import React, { useState } from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import './signup.scss';
import instance from '../../axios';

export default function Signup(props){
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const handleSubmit = () => {    
    instance.post('/users', {username: username, email: email, password: password})
          .then(res => {
            setErrors({})
            localStorage.setItem('token', res.data.token)
            window.location.href = "/";
          })
          .catch(err => {
            if(err.response.status == 422){
              setErrors(err.response.data.error)
            }
          })
  }

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
              <Form.Control 
                type="text" 
                placeholder="Username" 
                value={username}
                onChange={e => setUsername(e.target.value)}
                className={errors.username ? "error" : ""} />
                {errors.username ? <p className="errorMessage">Username {errors.username[0]}</p> : ""}
            </Col>
          </Form.Group> 

          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="4" md="2">
              Email
            </Form.Label>
            <Col sm="8" md="10">
              <Form.Control 
                type="email" 
                placeholder="name@example.com" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={errors.email ? "error" : ""} />
                {errors.email ? <p className="errorMessage">Email {errors.email[0]}</p> : ""}
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPlaintextPassword">
            <Form.Label column sm="4" md="2">
              Password
            </Form.Label>
            <Col sm="8" md="10">
              <Form.Control 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                className={errors.password ? "error" : ""} />
                {errors.password ? <p className="errorMessage">Password {errors.password[0]}</p> : ""}
            </Col>
          </Form.Group>

          <Row className="mt-4">
            <Col sm="6" className="text-center">
            </Col>
            <Col sm="6">
              <Button type="button" className="signupButton" variant="primary" onClick={handleSubmit}>
                Sign Up
              </Button>
            </Col>
          </Row>
        </Form>
        <p className="login">Already have an account? <a href='/login'>Login Here</a></p>
        </Col>
      </Row>
    </Container>
  )
}
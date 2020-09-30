import React, {useState} from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import './login.scss';
import instance from '../../axios';

export default function Login(){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = () => {    
    instance.post('/auth/login', {username: username, password: password})
          .then(res => {
            setError('')
            localStorage.setItem('token', res.data.token)
            window.location.href = "/";
          })
          .catch(err => {
            if(err.response){
              if(err.response.status === 422){
                setError(err.response.data.error)
              }
            }
          })
  }

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
              <Form.Control 
                type="text" 
                placeholder="Username" 
                value={username}
                onChange={e => setUsername(e.target.value)}
                className={error.length ? "error" : ""} />
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
                className={error.length ? "error" : ""} />
                {error.length ? <p className="errorMessage">{error}</p> : ""}
            </Col>
          </Form.Group>

          <Row className="mt-4">
            <Col sm="6" className="text-center">
            </Col>
            <Col sm="6">
              <Button type="button" className="loginButton" variant="primary" onClick={handleSubmit}>
                Log In
              </Button>
            </Col>
          </Row>
        </Form>
        <p className="signup" sm="6">Don't have an account? <a href='/signup'>Sign Up Here</a></p>
        </Col>
      </Row>
    </Container>
  )
}
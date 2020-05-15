import React from 'react';
import { Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../../logo.png'
import './footer.scss';

export default function Footer(){
  return(
    <div className="footer">
      <Row className="topFooter">
        <Col sm={12} md={4} className="imageCol">
          <img src={logo}/>
        </Col>
        <Col sm={12} md={4} className="subscribeCol">
          <Form inline className="subscribeForm" as={Row}>
              <Form.Label className="mindMail" as={Col} sm={12}>Subscribe to keep yourself updated!</Form.Label><br />
              <Col sm={12} >
                <FormControl type="text" placeholder="Email" className="mr-sm-2" />
                <Button variant="outline-success">Subscribe</Button>
              </Col>
          </Form>
        </Col>
        <Col sm={12} md={4} className="contactCol">
          <div className="contactinfo">
            Email: thehealthymindspace@gmail.com <br/>
            Phone: +254-123-456789
          </div>
        </Col>
      </Row>
      <Row className="bottomFooter">
        <p className="copyright">
          © 2020
        </p>
      </Row>
    </div>
  )
}
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';
import DanteEditor from 'Dante2';
import './read.scss';

export default function Read (){
  return (
    <Container>
      <Row className="text-left pt-4">
        <Col sm={12}>
          <h1>Article Title</h1>
        </Col>
        <Col sm={12} className="read-body">
          <DanteEditor
            read_only={true}
            body_placeholder={
              <div>
                <LoremIpsum p={3} />
                <Avatar />
                <LoremIpsum p={2} />
              </div>
              }
          />
        </Col>
      </Row>
    </Container>
  );
}

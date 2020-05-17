import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import DanteEditor from 'Dante2';
import './create.scss';

export default function Create (){
  return (
    <Container>
      <Row>
        <Col sm={12} className="dante">
          <DanteEditor 
            title_placeholder={'Title'}
            body_placeholder={'Write your article'}
          />
        </Col>
      </Row>
    </Container>
  );
};

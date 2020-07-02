import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import DanteEditor from 'Dante2';
import './create.scss';
import { DanteTooltipConfig } from "Dante2/package/lib/components/popovers/toolTip";
import { bold, italic, h1 } from "Dante2/package/lib/components/icons";

export default function Create (){
  return (
    <Container>
      <Row>
        <Col sm={12} className="dante">
          <DanteEditor
            body_placeholder={'Start typing here to add your title'}
            className={'my-custom-h1'}
            tooltips={[
              DanteTooltipConfig({
                widget_options: {
                  block_types: [
                    {
                      label: 'h2', 
                      style: 'header-one', 
                      type: "block" , 
                      icon: h1
                    },
                    {
                      label: 'color',
                      type: "color"
                    },
                    { 
                      label: 'bold', 
                      style: 'BOLD', 
                      type: 'inline', 
                      icon: bold
                    },
                    {
                      label: 'italic',
                      style: 'ITALIC',
                      type: 'inline',
                      icon: italic,
                    },
                  ],
                },
              }),
            ]}
          />
          <DanteEditor
            body_placeholder={'Start typing here to add your article'}
          />
        </Col>
      </Row>
    </Container>
  );
};

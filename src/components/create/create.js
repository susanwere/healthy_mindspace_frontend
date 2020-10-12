import React, { useState } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import DanteEditor from 'Dante2';
import './create.scss';
import instance from '../../axios';
import Loader from 'react-loaders';
import 'loaders.css';

export default function Create (){
  const [text_content, setTextContent] = useState("")
  const [title, setTitle] = useState("")
  const [loading, setLoading] = useState(false)
  let image_url = ""

  const handleChange = (e) => {
    setTextContent(e.emitSerializedOutput())
    setTitle(text_content?.blocks?.shift().text)
  }

  const handleImages = async (blocks) => {
    let counter = 0
    
    for(let block of blocks){
      if(block.type !== "image") continue
      const {url} = block.data;

      if (!url.startsWith('blob:')) {
        continue;
      }

      const blob = await fetch(url).then(r => r.blob());

      const formData = new FormData();
      formData.append('file', blob);

      formData.append('upload_preset', 'healthy_mindspace');

      const options = {
        method: 'POST',
        body: formData,
      };

      await fetch(process.env.REACT_APP_HEALTHY_CLOUDINARY_URL, options)
      .then(res => res.json())
      .then(res => {
        block.data.url = res.secure_url
        if(!counter) { image_url = block.data.url; counter += 1 }
      });
    }
  }

  const handleSubmit = async () => { 
    setLoading(true)
    await handleImages(text_content?.blocks)
    await instance.post('articles', {
      article_image: image_url,
      title: title,
      text_content: JSON.stringify(text_content),
    }).then(res => { setLoading(false); window.location.href = "/" })
  }

  return (
    <Container>
      {loading ? <Loader type="line-scale" active/> : <Row>
        <Col sm={10} className="dante">
          <DanteEditor
            body_placeholder={'Click here to start typing...'}
            onChange={(e) => handleChange(e)}
          />
        </Col>
        <Col sm={2}>
          <Button className="publish-button" onClick={handleSubmit}>Publish</Button>
        </Col>
      </Row>} 
      
    </Container>
  );
};

import React, { useEffect, useState } from 'react';
import anxiety from '../../images/1.jpg';
import depression from '../../images/2.jpg';
import lifestyle from '../../images/lifestyle.jpg';
import psychology from '../../images/5.jpg'
import {Card, Container, Row, Col, Button, Form, FormControl} from 'react-bootstrap';
import './home.scss';
import ContentLoader from "react-content-loader";
import Articles from '../articles/articles';
import Quote1 from '../quotes/quote1';
import MainArticles from '../articles/articlesMain';
import Footer from '../footer/footer';
import axios from 'axios';

export default function Home(props){
  const [loading, setLoading] = useState(true)
  const [articles, setArticles] = useState([])
  const imageTypes = {
    "Anxiety": anxiety, 
    "Depression": depression, 
    "Lifestyle": lifestyle, 
    "Psychological Analysis": psychology }

  useEffect(() => {
    const fetchArticles = async () => {
      const result = await axios.get('https://healthy-mindspace-api.herokuapp.com/articles')
      setArticles(result.data.articles)
      setLoading(false)
    }

    fetchArticles()
  }, [])

  return (
    <div className="homepage">
      <Container className="mt-4 mainpage">
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
              {Object.keys(imageTypes).map((image, index) => 
                <Col sm={6} className="mt-4" key={index}>
                <Card>
                { loading ? 
                  <div class="cardImg">
                    <ContentLoader 
                    speed={3}
                    viewBox="0 0 850 900"
                    backgroundColor="#c4c4c4"
                    foregroundColor="#ecebeb"
                  >
                    <rect x="0" y="0" rx="2" ry="2" width="850" height="900" />
                  </ContentLoader> 
                  </div>
                  :
                  <Card.Img variant="top" src={imageTypes[image]} height='250px' /> }
                </Card>
                <Button className="imageButton">{image}</Button>
                </Col>
              )}
          </Row>
        </Col>
        </Row>
      </Container>
      <Articles articles={articles} loading={loading} />
      <Quote1 />
      <MainArticles articles={articles} loading={loading} />
      <Footer />
    </div>
  )
}

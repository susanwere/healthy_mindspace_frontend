import React, { useEffect, useState } from 'react';
import {Card, Container, Row, Col, Button} from 'react-bootstrap';
import image from './../../images/3.jpg'
import './articles.scss';
import axios from 'axios';
import EllipsisText from "react-ellipsis-text";
import ContentLoader from "react-content-loader";

export default function ArticlesMain (props) {
  const [min, setMin] = useState(0)
  const list = [1, 2, 3, 4]

  const morePosts = () => {
    setMin({min: min+8})
  }

  const prevPosts = () => {
    setMin({min: min-8})
  }

  const no_of_articles = props.articles.length - min;

  return(
    <div className="articles">
      <Container>
        <Row>
          {props.loading ? 
          list.map((l, i) => 
            <Col sm={4} md={3} key={i}>
              <div>
                <Card className="mt-4 mainArticleCard">
                    <ContentLoader 
                      speed={3}
                      viewBox="0 0 300 200"
                      backgroundColor="#c4c4c4"
                      foregroundColor="#ecebeb"
                    >
                      <rect x="0" y="0" rx="2" ry="2" width="300" height="200" />
                    </ContentLoader>
                  <Card.Body>
                  <ContentLoader 
                      speed={2}
                      viewBox="0 0 120 200"
                      backgroundColor="#c4c4c4"
                      foregroundColor="#ecebeb"
                      width={120}
                      height={200}
                    >
                      <rect x="0" y="52" rx="2" ry="2" width="300" height="10" /> 
                      <rect x="0" y="70" rx="2" ry="2" width="140" height="10" /> 
                      <rect x="0" y="88" rx="2" ry="2" width="140" height="10" /> 
                      <rect x="0" y="106" rx="2" ry="2" width="140" height="10" /> 
                      <rect x="0" y="124" rx="2" ry="2" width="140" height="10" /> 
                    </ContentLoader>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          )
          : props.articles.slice(min, min + 8).map((article) => 
            <Col sm={4} md={3} key={article.id}>
              <div>
              <Card className="mt-4 mainArticleCard">
                <Card.Img variant="top" src={image} className="mainImage" />
                <Card.Body>
                <Card.Title>
                  <EllipsisText 
                    text={article.title} 
                    length={"20"} />
                </Card.Title>
                <Card.Text>
                  <EllipsisText 
                    text={article.body} 
                    length={"200"} />
                </Card.Text>
                <footer className="articleFooter">
                  <a href="/read">Read More</a>
                </footer>
                </Card.Body>
              </Card>
              </div>
          </Col>
          )}
        </Row>
        <Row className="text-center">
            <Col sm={no_of_articles < 8 ? 12 : 6} className={min > 0 ? "" : "hidden"}>
              <Button className="lessPosts" onClick={prevPosts}>Previous Articles</Button>
            </Col>
            <Col sm={min > 0 ? 6 : 12} className={no_of_articles < 8 ? "hidden" : ""}>
            <Button className="morePosts" onClick={morePosts}>More Articles</Button>
            </Col>
          </Row>
      </Container>
    </div>
    )
}

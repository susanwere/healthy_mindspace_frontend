import React, { useEffect, useState } from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import image from './../../images/1.jpg'
import './articles.scss';
import Moment from 'react-moment';
import EllipsisText from "react-ellipsis-text";
import ContentLoader from "react-content-loader";

export default function Articles(props) {
  const list = [1, 2, 3]

  return(
    <div className="articles">
        <Row>
            { props.loading ? list.map((l, i) => 
            <Col sm={6} md={4} key={i}>
              <div>
                <Card className="articleImage">
                  <ContentLoader 
                    speed={3}
                    viewBox="0 0 300 200"
                    backgroundColor="#c4c4c4"
                    foregroundColor="#ecebeb"
                  >
                    <rect x="0" y="0" rx="2" ry="2" width="300" height="200" />
                  </ContentLoader>
                </Card>
                <Card className="textCard">
                  <Card.Body>
                    <ContentLoader 
                      speed={2}
                      viewBox="0 0 120 250"
                      backgroundColor="#c4c4c4"
                      foregroundColor="#ecebeb"
                      width={120}
                      height={250}
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
        </Col>) : 
          props.articles.slice(Math.max(props.articles.length - 3, 0)).map((article) => 
              <Col sm={6} md={4} key={article.id}>
                <div>
                <Card className="articleImage">
                  <Card.Img variant="top" src={image} />
                </Card>
                <Card className="textCard">
                <Card.Body>
                  <Card.Title>
                    <EllipsisText 
                      text={article.title} 
                      length={"25"} />
                  </Card.Title>
                  <Card.Text>
                    <EllipsisText 
                      text={article.body} 
                      length={220} />
                  </Card.Text>
                  <footer className="articleFooter">
                    {article.created_by} 
                    <cite title="Source Title">
                      <Moment format="D MMM, YYYY">{article.created_at}</Moment>
                    </cite>
                  </footer>
                  </Card.Body>
                </Card>
                </div>
            </Col>
            )
          }
        </Row>
    </div>
  )
}
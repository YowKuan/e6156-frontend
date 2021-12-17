import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab, Tabs, Card, Button, Container, Col, Row, Image, Carousel} from 'react-bootstrap';


class MainPage extends Component {
  render() {
    return (
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://g.espncdn.com/s/flblm/share.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>CU Fantacy BaseBAll</h3>
            <p>COMSE6156_001_2021_3 - TOPICS IN SOFTWARE ENGINEERING - CLOUD COMPUTING</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w1024/mlb/hgrvmpihpqjldxx4vfbx"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>CU Fantacy BaseBAll</h3>
            <p>COMSE6156_001_2021_3 - TOPICS IN SOFTWARE ENGINEERING - CLOUD COMPUTING</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w1024/mlb/q7x1fgga7u2kczgydr4u"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>CU Fantacy BaseBAll</h3>
            <p>COMSE6156_001_2021_3 - TOPICS IN SOFTWARE ENGINEERING - CLOUD COMPUTING</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default MainPage;
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab, Tabs, Card, Button, Container, Col, Row} from 'react-bootstrap';

class Draft extends Component {
  constructor(props){
      super(props);
      this.state = {
        gamers: ['Yo Kuan', 'Ping'],
        players: ['palyer1', 'player2', 'player3'],
      };
  }
  render() {
    return (
      <div>
        <h1>Draft</h1>
        <Container>
          <Row>
            <Col>
              <Card>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                  {this.state.gamers.map(player => (
                    <Tab eventKey={player} title={player}>
                      {player}
                    </Tab> 
                  ))}
                </Tabs>
              </Card>
            </Col>
            <Col>
              <Card>
                <Row xs={1} md={2} className="g-4">
                  {this.state.players.map(element => (
                    <Col>
                      <Card style={{width: '250px', margin: '5px'}}>
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/83/23/45/832345ce414f0d8402c4ca830def707b.gif" />
                        <Card.Body>
                          <Card.Title>{element}</Card.Title>
                          <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card>        
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Draft;
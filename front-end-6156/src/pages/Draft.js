import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab, Tabs, Card, Button, Container, Col, Row, Image} from 'react-bootstrap';

class Draft extends Component {
  constructor(props){
      super(props);
      this.state = {
        gamers: ['Yo Kuan', 'Ping'],
        players: ['palyer1', 'player2', 'player3', 'palyer1', 'player2', 'player3'],
      };
  }
  render() {
    return (
      <div>
        <h1>Draft</h1>
        <Container fluid='md'>
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
              <Card  style={{maxHeight: 'calc(100vh - 210px)', overflowY: 'auto', padding: '5px'}}>
                <Row xs={1} md={2}>
                  {this.state.players.map(element => (
                    <Col>
                      <Card style={{margin: '5px'}}>
                        <Image variant="top" src="https://i.pinimg.com/originals/83/23/45/832345ce414f0d8402c4ca830def707b.gif" roundedCircle />
                        <Card.Body>
                          <Card.Title>{element}</Card.Title>
                          <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                          </Card.Text>
                          <Button>select</Button>
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
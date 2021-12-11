import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab, Tabs, Card, Button, Container, Col, Row, Image} from 'react-bootstrap';

class Draft extends Component {
  constructor(props){
    super(props);
    this.state = {
      gamers: [],
      current_gamer_id: -1,
      players: [],
      teams_member: [],
    };
    this.choosePlayer = this.choosePlayer.bind(this)
  }

  componentWillMount() {
    let gamers = [{id: 0, name:'gamer 0'}, {id: 1, name:'gamer 1'}, {id: 2, name:'gamer 2'}]
    let players = []//[{id: 1, name:'palyer1'}, {id: 2, name:'palyer2'}, {id: 3, name:'palyer3'}]
    for(let i=0; i<20; i++){
      players.push({id:i, name:'player '.concat(String(i))})
    }

    this.setState({
      gamers: gamers,
      players: players,
      current_gamer_id: 0
    })

    for (let i=0; i<gamers.length; i++){
      this.state.teams_member.push([])
    }
  }

  choosePlayer(e){
    console.log('choose player', e.target.id, typeof(e.target.id))
    let player_id = parseInt(e.target.id)
    this.state.players.filter(item => item.id != player_id)
    this.state.teams_member[this.state.current_gamer_id].push(player_id)
    this.setState({
      players: this.state.players.filter(item => item.id != player_id),
      current_gamer_id: (this.state.current_gamer_id+1)%this.state.gamers.length
    })

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
                  {this.state.gamers.map(gamer => (
                    <Tab eventKey={gamer.id} title={gamer.name}>
                      {this.state.teams_member[gamer.id]}
                      <Card  style={{maxHeight: 'calc(100vh - 210px)', overflowY: 'auto', padding: '5px'}}>
                        <Row xs={1} md={2}>
                          {this.state.teams_member[gamer.id].map(element => (
                            <Col>
                              <Card style={{margin: '5px'}}>
                                <Image variant="top" src="https://i.pinimg.com/originals/83/23/45/832345ce414f0d8402c4ca830def707b.gif" roundedCircle />
                                <Card.Body>
                                  <Card.Title>{this.state.players[element].name}</Card.Title>
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
                    </Tab> 
                  ))}
                </Tabs>
              </Card>
            </Col>
            <Col>
              <Card  style={{maxHeight: 'calc(100vh - 210px)', overflowY: 'auto', padding: '5px'}}>
                <Card.Body>
                  <Card.Title>{this.state.gamers[this.state.current_gamer_id].name}</Card.Title>
                </Card.Body>
                <Row xs={1} md={2}>
                  {this.state.players.map(element => (
                    <Col>
                      <Card style={{margin: '5px'}}>
                        <Image variant="top" src="https://i.pinimg.com/originals/83/23/45/832345ce414f0d8402c4ca830def707b.gif" roundedCircle />
                        <Card.Body>
                          <Card.Title>{element.name}</Card.Title>
                          <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                          </Card.Text>
                          <Button onClick={this.choosePlayer} id={element.id}>select</Button>
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
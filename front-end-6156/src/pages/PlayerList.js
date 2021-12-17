import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab, Tabs, Card, Button, Container, Col, Row, Image} from 'react-bootstrap';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import {PLAYERS, HITTERS, TYPES, ROSTER_MAP} from '../helper/constants'
import {Link} from "react-router-dom";

class PlayerList extends Component {
  constructor(props){
    super(props);
    this.state = {
      players: [], // num => data(string)
      players_map: {}, // string => num
    };
    this.setKey = this.setKey.bind(this)
    this.load = this.load.bind(this)
    this.getColumn = this.getColumn.bind(this)
    // this.filterPlayerType = this.filterPlayerType(this)
  }

  load(){
    let players = []
    let players_map = {}

    const players_url = 'http://54.208.206.103:5000/api/lookup/E6156player'
    const players_request = axios.get(players_url)

    axios.all([players_request]).then(axios.spread((...responses) => {
      players = responses[0]['data'];
      for (let i=0; i<players.length; i++){
        players_map[players[i].id.toString()] = i
        players[i].chosen = false
      }
      this.setState({
        players: players,
        players_map: players_map,
      });
      
    }))
  };

  UNSAFE_componentWillMount() {
    this.load();
  }

  setKey(k){
    this.setState({
      current_tab_id: k,
    })
  }

  getColumn(type){
    if (type === 'P'){
      return(
        [
          { field: PLAYERS.FIELDS.PLAYER_ID, headerName: PLAYERS.NAME.PLAYER_ID},
          { field: PLAYERS.FIELDS.NAME, headerName: PLAYERS.NAME.NAME, width: 150},
          { field: PLAYERS.FIELDS.POSITION, headerName: PLAYERS.NAME.POSITION, width: 150},
          { field: PLAYERS.FIELDS.WINS, headerName: PLAYERS.NAME.WINS},
          { field: PLAYERS.FIELDS.SAVES, headerName: PLAYERS.NAME.SAVES},
          { field: PLAYERS.FIELDS.ERA, headerName: PLAYERS.NAME.ERA},
          { field: PLAYERS.FIELDS.STRIKEOUTS, headerName: PLAYERS.NAME.STRIKEOUTS},
          { field: PLAYERS.FIELDS.WHIP, headerName: PLAYERS.NAME.WHIP},
        ]
      )
    }
    return (
      [
        { field: HITTERS.FIELDS.PLAYER_ID, headerName: HITTERS.NAME.PLAYER_ID},
        { field: HITTERS.FIELDS.NAME, headerName: HITTERS.NAME.NAME, width: 150},
        { field: HITTERS.FIELDS.POSITION, headerName: HITTERS.NAME.POSITION, width: 150},
        { field: HITTERS.FIELDS.RUNS, headerName: HITTERS.NAME.RUNS},
        { field: HITTERS.FIELDS.HOME_RUNS, headerName: HITTERS.NAME.HOME_RUNS},
        { field: HITTERS.FIELDS.OPS, headerName: HITTERS.NAME.OPS},
        { field: HITTERS.FIELDS.AVG, headerName: HITTERS.NAME.AVG},
        { field: HITTERS.FIELDS.HITS, headerName: HITTERS.NAME.HITS},
      ]
    )
  }

  render() {
    return (
      <div>
        <h1>Players List</h1>
        <Container fluid='md'>
          <Row>
            <Card style={{ marginTop: '15px' }}>
              {/* <Card.Body>
                <Card.Title>Players List</Card.Title>
              </Card.Body> */}
              <Tabs defaultActiveKey='P' id="player-tab" className="mb-3 mt-2">
                {TYPES.map((type) => (
                  <Tab eventKey={type} title={type} key={type}>
                    <div style={{ height: 700, width: '100%', marginTop: '5px' }}>
                      <DataGrid
                        rows={this.state.players.filter(player => player[PLAYERS.FIELDS.POSITION] === type)}
                        columns={this.getColumn(type)}
                        pagination
                        pageSize={10}
                      />
                    </div>
                  </Tab>
                ))}
              </Tabs>
            </Card>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PlayerList;
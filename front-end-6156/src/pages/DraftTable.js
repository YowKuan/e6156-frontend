import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab, Tabs, Card, Button, Container, Col, Row, Image} from 'react-bootstrap';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import {PLAYERS} from '../helper/constants'

class DraftTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      gamers: [],
      current_gamer_id: -1,
      current_tab_id: 0,
      players: [],
      players_map: {},
      teams_member: [],
      columns:[
        { field: PLAYERS.FIELDS.PLAYER_ID, headerName: PLAYERS.NAME.PLAYER_ID},
        { field: PLAYERS.FIELDS.NAME, headerName: PLAYERS.NAME.NAME, width: 150},
        { field: PLAYERS.FIELDS.POSITION, headerName: PLAYERS.NAME.POSITION, width: 150},
        { field: PLAYERS.FIELDS.WINS, headerName: PLAYERS.NAME.WINS},
        { field: PLAYERS.FIELDS.SAVES, headerName: PLAYERS.NAME.SAVES},
        { field: PLAYERS.FIELDS.ERA, headerName: PLAYERS.NAME.ERA},
        { field: PLAYERS.FIELDS.STRIKEOUTS, headerName: PLAYERS.NAME.STRIKEOUTS},
        { field: PLAYERS.FIELDS.WHIP, headerName: PLAYERS.NAME.WHIP},
        {
          field: "action",
          headerName: "Choose Player",
          sortable: false,
          renderCell: (params) => {
            return <Button onClick={this.choosePlayer} id={params.id} disabled={params.row.chosen}>Select</Button>
          }
        },
      ],
      player_columns:[
        { field: PLAYERS.FIELDS.PLAYER_ID, headerName: PLAYERS.NAME.PLAYER_ID},
        { field: PLAYERS.FIELDS.NAME, headerName: PLAYERS.NAME.NAME, width: 150},
        { field: PLAYERS.FIELDS.POSITION, headerName: PLAYERS.NAME.POSITION, width: 150},
        { field: PLAYERS.FIELDS.WINS, headerName: PLAYERS.NAME.WINS},
        { field: PLAYERS.FIELDS.SAVES, headerName: PLAYERS.NAME.SAVES},
        { field: PLAYERS.FIELDS.ERA, headerName: PLAYERS.NAME.ERA},
        { field: PLAYERS.FIELDS.STRIKEOUTS, headerName: PLAYERS.NAME.STRIKEOUTS},
        { field: PLAYERS.FIELDS.WHIP, headerName: PLAYERS.NAME.WHIP},
      ]
    };
    this.choosePlayer = this.choosePlayer.bind(this)
    this.setKey = this.setKey.bind(this)
  }

  // 1. photo
  // 2. what to submit
  //
  // onclick => rerender
  // player need an extra field chosen

  UNSAFE_componentWillMount() {
    let gamers = [{id: 0, name:'gamer 0'}, {id: 1, name:'gamer 1'}, {id: 2, name:'gamer 2'}]
    let players = []//[{id: 1, name:'palyer1'}, {id: 2, name:'palyer2'}, {id: 3, name:'palyer3'}]
    let players_map = {}
    let teams_member = []
    // for(let i=0; i<20; i++){
    //   players.push({id:i, name:'player '.concat(String(i))})
    // }

    axios.get('http://54.208.206.103:5000/api/lookup/E6156player')
    .then(res => {
      players = res['data'];
      for (let i=0; i<players.length; i++){
        players_map[players[i].id] = i
        players[i].chosen = false
      }
      for (let i=0; i<gamers.length; i++){
        teams_member.push([players[0], players[1]])
      }
      this.setState({
        gamers: gamers,
        players: players,
        current_gamer_id: 0,
        players_map: players_map,
        teams_member: teams_member
      })
      console.log(this.state.teams_member)

    });


  }

  choosePlayer(e){
    console.log('choose player', e.target.id, typeof(e.target.id))
    console.log(e)
    this.state.players[this.state.players_map[e.target.id]].chosen = true
    // console.log(this.state.players[this.state.players_map[e.target.id]])
    let player_id = parseInt(e.target.id)
    this.state.teams_member[this.state.current_gamer_id].push(player_id)
    let next_gamer = (this.state.current_gamer_id+1)%this.state.gamers.length
    this.setState({
      current_gamer_id: next_gamer,
      current_tab_id: next_gamer,
    })

  }

  setKey(k){
    console.log(k)
    this.setState({
      current_tab_id: k,
    })
  }

  render() {
    // console.log('render', this.state.teams_member)
    //                           // this.state.teams_member[gamer.id].map(palyerId => (
    //                       //   this.state.players[this.state.players_map[palyerId]]
                            
    //                       // ))
    // const teams = []
    // for(let gamerId=0; gamerId<this.state.gamers.length; gamerId++){
    //   for (let playerId=0; playerId<)
    //   teams.push(this.state.players[this.state.players_map[i]])
    // }
    return (
      <div>
        <h1>Draft</h1>
        <Container fluid='md'>
          <Row>
            <Card>
              <Tabs defaultActiveKey="0" id="uncontrolled-tab-example" className="mb-3">
                {this.state.gamers.map(gamer => (
                  <Tab eventKey={gamer.id} title={gamer.name} key={gamer.id}>
                    <div style={{ height: 300, width: '100%' }}>
                      <DataGrid
                        rows={this.state.teams_member[gamer.id]}
                        columns={this.state.player_columns}
                        pageSize={10}
                        rowsPerPageOptions={[5]}
                        components={{
                          noRowsOverlay: () => {
                            return (
                              <div>No Chosen Players</div>
                            )
                          },
                        }}
                      />
                    </div>
                  </Tab> 
                ))}
              </Tabs>
            </Card>
          </Row>
          <Row>
            <Card style={{ marginTop: '15px' }}>
              <Card.Title style={{marginTop: '15px'}}> Players </Card.Title>
              <div style={{ height: 600, width: '100%', marginTop: '5px' }}>
                <DataGrid
                  rows={this.state.players}
                  columns={this.state.columns}
                  pageSize={10}
                  rowsPerPageOptions={[5]}
                  // checkboxSelection
                />
              </div>
            </Card>
          </Row>
        </Container>
      </div>
    );
  }
}

export default DraftTable;
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab, Tabs, Card, Button, Container, Col, Row, Image} from 'react-bootstrap';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import {PLAYERS} from '../helper/constants'
import {Link} from "react-router-dom";

class DraftTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      gamers: [], // num => string
      gamers_map: {}, // tring => num
      current_gamer_id: 0,
      current_tab_id: 0,
      players: [], // num => data(string)
      players_map: {}, // string => num
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
    this.load = this.load.bind(this)
    this.endGame = this.endGame.bind(this)
  }

  // 1. photo
  // 2. what to submit
  //
  // onclick => rerender
  // player need an extra field chosen
  load(){
    let gamers = [] //[{id: 0, name:'gamer 0'}, {id: 1, name:'gamer 1'}, {id: 2, name:'gamer 2'}]
    let gamers_map = {}
    let players = [] //[{id: 1, name:'palyer1'}, {id: 2, name:'palyer2'}, {id: 3, name:'palyer3'}]
    let players_map = {}
    let teams_member = []

    const players_url = 'http://54.208.206.103:5000/api/lookup/E6156player'
    const draft_url = 'http://35.171.161.15:8111/draft/'.concat(this.props.match.params.id)
    const players_request = axios.get(players_url)
    const draft_request = axios.get(draft_url)

    axios.all([players_request, draft_request]).then(axios.spread((...responses) => {
      players = responses[0]['data'];
      let teams_member_dict = responses[1].data.teams
      for (let i=0; i<players.length; i++){
        players_map[players[i].id.toString()] = i
        players[i].chosen = false
      }
      let gamer_idx = 0
      for (const [gamer, team] of Object.entries(teams_member_dict)){
        gamers.push(gamer)
        gamers_map[gamer] = gamer_idx
        teams_member.push([])
        for (let i=0; i<team.length; i++){
          teams_member[gamer_idx].push(players[players_map[team[i]]])
          players[players_map[team[i]]].chosen = true
        }
        gamer_idx += 1
      }
      this.setState({
        gamers: gamers,
        gamers_map: gamers_map,
        players: players,
        players_map: players_map,
        teams_member: teams_member,
      });
    }))
  };

  UNSAFE_componentWillMount() {
    this.load();
    // let gamers = [] //[{id: 0, name:'gamer 0'}, {id: 1, name:'gamer 1'}, {id: 2, name:'gamer 2'}]
    // let gamers_map = {}
    // let players = [] //[{id: 1, name:'palyer1'}, {id: 2, name:'palyer2'}, {id: 3, name:'palyer3'}]
    // let players_map = {}
    // let teams_member = []

    // const players_url = 'http://54.208.206.103:5000/api/lookup/E6156player'
    // const draft_url = 'http://35.171.161.15:8111/draft/'.concat(this.props.match.params.id)
    // const players_request = axios.get(players_url)
    // const draft_request = axios.get(draft_url)
    // axios.all([players_request, draft_request]).then(axios.spread((...responses) => {
    //   players = responses[0]['data'];
    //   let teams_member_dict = responses[1].data.teams
    //   for (let i=0; i<players.length; i++){
    //     players_map[players[i].id.toString()] = i
    //     players[i].chosen = false
    //   }
    //   let gamer_idx = 0
    //   for (const [gamer, team] of Object.entries(teams_member_dict)){
    //     gamers.push(gamer)
    //     gamers_map[gamer] = gamer_idx
    //     teams_member.push([])
    //     for (let i=0; i<team.length; i++){
    //       teams_member[gamer_idx].push(players[players_map[team[i]]])
    //       players[players_map[team[i]]].chosen = true
    //     }
    //     gamer_idx += 1
    //   }
    //   this.setState({
    //     gamers: gamers,
    //     gamers_map: gamers_map,
    //     players: players,
    //     current_gamer_id: 0,
    //     players_map: players_map,
    //     teams_member: teams_member,
    //   });
    // }));
  }

  choosePlayer(e){
    // console.log('choose player', e.target.id, typeof(e.target.id))
    // console.log(e)
    // this.state.players[this.state.players_map[e.target.id]].chosen = true
    let player_id = e.target.id
    // const new_player = this.state.players[this.state.players_map[player_id]]
    // this.state.teams_member[this.state.current_gamer_id] = [...this.state.teams_member[this.state.current_gamer_id], new_player]
    const request = 'http://35.171.161.15:8111/draft/select/'.concat(this.props.match.params.id, '/', this.state.gamers[this.state.current_gamer_id], '/', player_id)
    axios.put(request).then(res => {
      this.load()
      let next_gamer = (this.state.current_gamer_id+1)%this.state.gamers.length
      this.setState({
        current_gamer_id: next_gamer,
        current_tab_id: next_gamer,
      })
    })


  }
  endGame(){
    console.log('end game')
    console.log(this.props.history)
    // this.props.history.push('/draft')
  }

  setKey(k){
    this.setState({
      current_tab_id: k,
    })
  }

  render() {
    const id = this.props.match.params.id
    console.log(this.state)
    console.log(this.state.current_gamer_id)
    return (
      <div>
        <h1>Draft</h1>
        <p>{id}</p>
        <Container fluid='md'>
          <Row>
            <Card style={{paddingBottom: '10px'}}>
              <Tabs defaultActiveKey={this.state.current_tab_id} onSelect={(k) => this.setKey(k)} id="uncontrolled-tab-example" className="mb-3 mt-2">
                {this.state.gamers.map((gamer, idx) => (
                  <Tab eventKey={idx} title={gamer} key={gamer}>
                    <div style={{ height: 300, width: '100%' }}>
                      <DataGrid
                        rows={this.state.teams_member[this.state.gamers_map[gamer]]}
                        columns={this.state.player_columns}
                        pageSize={10}
                        // rowsPerPageOptions={[5]}
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
              {/* <Card.Title style={{marginTop: '15px'}}> Players </Card.Title> */}
              <Card.Body>
                  <Card.Title>{this.state.gamers[this.state.current_gamer_id]}</Card.Title>
                </Card.Body>
              <div style={{ height: 600, width: '100%', marginTop: '5px' }}>
                <DataGrid
                  rows={this.state.players}
                  columns={this.state.columns}
                  pagination
                  pageSize={10}
                  // checkboxSelection
                  // rowsPerPageOptions={[10, 20, 50]}
                  // onPageChange={(newPage) => setPage(newPage)}
                  
                />
              </div>
            </Card>
          </Row>
          <Link to={'/result/'.concat(id)}>
            <Button onClick={this.endGame()} style={{marginTop: '5px', marginBottom: '10px'}} size="lg">See Result</Button>
          </Link>

        </Container>
      </div>
    );
  }
}

export default DraftTable;
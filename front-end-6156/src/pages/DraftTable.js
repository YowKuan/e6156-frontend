import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab, Tabs, Card, Button, Container, Col, Row, Image} from 'react-bootstrap';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import {PLAYERS, HITTERS, TYPES, ROSTER_MAP} from '../helper/constants'
import {Link} from "react-router-dom";

class DraftTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      draft_name: '',
      draft_info: {},
      gamers: [], // num => string
      gamers_map: {}, // tring => num
      current_gamer_id: 0,
      current_tab_id: 0,
      players: [], // num => data(string)
      players_map: {}, // string => num
      teams_member: [],
      teams_type_cnt: {},
      team_size: 0,
      current_chosen_num: 0
    };
    this.choosePlayer = this.choosePlayer.bind(this)
    this.setKey = this.setKey.bind(this)
    this.load = this.load.bind(this)
    this.getColumn = this.getColumn.bind(this)
    // this.filterPlayerType = this.filterPlayerType(this)
  }

  load(){
    let gamers = []
    let gamers_map = {}
    let players = []
    let players_map = {}
    let teams_member = []
    let teams_type_cnt = []

    const players_url = 'http://54.208.206.103:5000/api/lookup/E6156player'
    const draft_url = 'http://35.171.161.15:8111/draft/'.concat(this.props.match.params.id)
    const players_request = axios.get(players_url)
    const draft_request = axios.get(draft_url)

    axios.all([players_request, draft_request]).then(axios.spread((...responses) => {
      players = responses[0]['data'];
      let teams_member_dict = responses[1].data.teams
      let draft_info = {'roster': responses[1].data.roster, 'rules': responses[1].data.rules, 'scoring': responses[1].data.scoring}
      
      for (let i=0; i<players.length; i++){
        players_map[players[i].id.toString()] = i
        players[i].chosen = false
      }
      let team_size = 0
      for (const [position, num] of Object.entries(draft_info['roster'])){
        team_size += parseInt (num)
      }

      let gamer_idx = 0
      let current_chosen_num = 0
      for (const [gamer, team] of Object.entries(teams_member_dict)){
        gamers.push(gamer)
        gamers_map[gamer] = gamer_idx
        teams_type_cnt.push({})
        for (const [position, num] of Object.entries(draft_info['roster'])){
          teams_type_cnt[gamer_idx][position] = 0
        }
        teams_member.push([])
        for (let i=0; i<team.length; i++){
          teams_member[gamer_idx].push(players[players_map[team[i]]])
          players[players_map[team[i]]].chosen = true
          const player_type = players[players_map[team[i]]][PLAYERS.FIELDS.POSITION]
          teams_type_cnt[gamer_idx][ROSTER_MAP[player_type]] += 1
          current_chosen_num += 1
        }
        gamer_idx += 1
      }

      this.setState({
        gamers: gamers,
        gamers_map: gamers_map,
        players: players,
        players_map: players_map,
        teams_member: teams_member,
        teams_type_cnt: teams_type_cnt,
        draft_name: responses[1].data.rules.draftName,
        draft_info: draft_info,
        team_size: team_size * gamers.length,
        current_chosen_num: current_chosen_num,
      });
      if (this.state.current_chosen_num === this.state.team_size){
        alert('Teams are ready! Click the See Result Button!')
      }
    }))
  };

  UNSAFE_componentWillMount() {
    this.load();
  }

  choosePlayer(e){
    
    const player_id = e.target.id
    const player_type = this.state.players[this.state.players_map[player_id]][PLAYERS.FIELDS.POSITION]
    if (this.state.teams_type_cnt[this.state.current_gamer_id][ROSTER_MAP[player_type]] >= parseInt(this.state.draft_info['roster'][ROSTER_MAP[player_type]])){
      alert('You have chosen enough players for position '.concat(player_type))
    }
    else{
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
          {
            field: "action",
            headerName: "Choose Player",
            sortable: false,
            renderCell: (params) => {
              return <Button onClick={this.choosePlayer} id={params.id} disabled={params.row.chosen}>Select</Button>
            }
          },
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
        {
          field: "action",
          headerName: "Choose Player",
          sortable: false,
          renderCell: (params) => {
            return <Button onClick={this.choosePlayer} id={params.id} disabled={params.row.chosen}>Select</Button>
          }
        },
      ]
    )
  }

  // filterPlayerType(type){
  //   if(type === 'OF'){
  //     return this.state.players.filter(player => (player[PLAYERS.FIELDS.POSITION] === 'OF' || player[PLAYERS.FIELDS.POSITION] === 'CF' || player[PLAYERS.FIELDS.POSITION] === 'RF' || player[PLAYERS.FIELDS.POSITION] === 'LF'))
  //   }
  //   return this.state.players.filter(player => player[PLAYERS.FIELDS.POSITION] === type)
  // }

  render() {
    const id = this.props.match.params.id
    console.log(this.state)
    const column = [
      { field: PLAYERS.FIELDS.PLAYER_ID, headerName: PLAYERS.NAME.PLAYER_ID},
      { field: PLAYERS.FIELDS.NAME, headerName: PLAYERS.NAME.NAME, width: 150},
      { field: PLAYERS.FIELDS.POSITION, headerName: PLAYERS.NAME.POSITION, width: 150}
    ]
    return (
      <div>
        <h1>Draft - {this.state.draft_name}</h1>
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
                        columns={column}
                        pageSize={10}
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
              <Card.Body>
                <Card.Title>{this.state.gamers[this.state.current_gamer_id]}</Card.Title>
              </Card.Body>
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
          <Link to={'/result/'.concat(id)}>
            <Button style={{marginTop: '5px', marginBottom: '10px'}} size="lg">See Result</Button>
          </Link>

        </Container>
      </div>
    );
  }
}

export default DraftTable;
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab, Tabs, Card, Button, Container, Col, Row, Image} from 'react-bootstrap';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import {PLAYERS, HITTERS, TYPES, ROSTER_MAP, RESULT_FIELDS} from '../helper/constants'
import {Link} from "react-router-dom";

class PlayerList extends Component {
  constructor(props){
    super(props);
    this.state = {
      result: {}
    };
    this.load = this.load.bind(this)
  }

  load(){
    const result_url = 'http://35.171.161.15:8111/draft/'.concat(this.props.match.params.id, '/score')

    axios.get(result_url).then((response) => {
      const res = response.data.individual
      console.log(res)
      let result = []
      for (const [user, data] of Object.entries(res)){
        console.log(user, data)
        data['User'] = user
        data['id'] = user
        result.push(data)
      }
      console.log(result)
      this.setState({
        result: result
      })
    })
  };

  UNSAFE_componentWillMount() {
    this.load();
  }

  render() {
    const column = [
      { field: RESULT_FIELDS.USER, headerName: RESULT_FIELDS.USER, width: 200},
      { field: RESULT_FIELDS.W, headerName: RESULT_FIELDS.W},
      { field: RESULT_FIELDS.AVG, headerName: RESULT_FIELDS.AVG},
      { field: RESULT_FIELDS.ERA, headerName: RESULT_FIELDS.ERA},
      { field: RESULT_FIELDS.H, headerName: RESULT_FIELDS.H},
      { field: RESULT_FIELDS.HR, headerName: RESULT_FIELDS.HR},
      { field: RESULT_FIELDS.SV, headerName: RESULT_FIELDS.SV},
      { field: RESULT_FIELDS.SCORE, headerName: RESULT_FIELDS.SCORE},
    ]
    return (
      <div>
        <h1 style={{ marginTop: '15px' }}>Fantacy Result</h1>
        <Container fluid='md'>
          <Row>
            <Card style={{ marginTop: '15px' }}>
              <div style={{ height: 700, width: '100%', marginTop: '5px' }}>
                <DataGrid
                  rows={this.state.result}
                  columns={column}
                  pagination
                  pageSize={10}
                />
              </div>
            </Card>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PlayerList;
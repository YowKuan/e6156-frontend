import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab, Tabs} from 'react-bootstrap';
import NavBar from '../components/NavBar/NavBar';
import Roster from './Roster';
import Rules from './Rules';

const CreateDraft = () => (
  <div>
    <h1>Create Draft</h1>
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey="rules" title="Rules">
        <Rules/>
      </Tab>
      <Tab eventKey="roster" title="Roster">
        <Roster/>
      </Tab>
      <Tab eventKey="scoring" title="Scoring">
        scoring
      </Tab>
      <Tab eventKey="teams" title="Teams">
        scoring
      </Tab>    
    </Tabs>
  </div>
);

CreateDraft.propTypes = {};

CreateDraft.defaultProps = {};

export default CreateDraft;

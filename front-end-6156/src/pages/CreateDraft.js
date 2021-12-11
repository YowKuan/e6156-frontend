import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab, Tabs} from 'react-bootstrap';
import NavBar from '../components/NavBar/NavBar';
import Roster from './Roster';
import Rules from './Rules';
import Scoring from './Scoring';
import Teams from './Teams'



function CreateDraft () {
  const [check, setCheck] = useState(false)


  function Check_teamnum() {
    // const len_invited = props.len_invited;
    // const set_invited = props.set_invited;

    const len_invited = allform.teams.length;
    const set_invited = allform.rules.teamnum;
    if (len_invited >= set_invited) {
      setCheck(true)
    }
    else{
      setCheck(false)
    }
    return null
  }

  useEffect(() => {
    Check_teamnum()
    // action on update of movies
  });
  
  const [allform, setAllform] = useState(
    {'roster':{
      oneB: '1',
      twoB: '1',
      threeB: '1',
      ss: '1',
      c: '1',
      of: '1',
      sp: '1',
      rp: '1',
      dh: '1',
      }, 
    'rules':{
      teamnum: '1',
      leaguetype: "weight-based",
      chooseFormat: "take-turns",
      draftName: '',
      }, 
    'teams':[], 
    'scoring':{
      h: '1',
      hr: '1',
      avg: '1',
      w: '1',
      era: '1',
      sv: '1',
      }})
  console.log(allform)

  return (
      <div>
    <h1>Create Draft</h1>
    <Rules setAllform={setAllform}/>
    <Roster setAllform={setAllform}/>
    <Scoring setAllform={setAllform}/>
    <Teams check={check} setAllform={setAllform}/>
    <Check_teamnum len_invited={allform.teams.length} set_invited={allform.rules.teamnum} />,
    {/* <Tabs defaultActiveKey="rules" id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey="rules" title="Rules">
        <Rules/>
      </Tab>
      <Tab eventKey="roster" title="Roster">
        <Roster/>
      </Tab>
      <Tab eventKey="scoring" title="Scoring">
        <Scoring/>
      </Tab>
      <Tab eventKey="teams" setName={setName} title="Teams">
        <Teams/>
      </Tab>    
    </Tabs> */}
  </div>)}





CreateDraft.propTypes = {};

CreateDraft.defaultProps = {};

export default CreateDraft;

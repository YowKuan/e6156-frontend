import React, {useState, useEffect} from 'react';
import {useHistory, withRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab, Tabs} from 'react-bootstrap';
import NavBar from '../components/NavBar/NavBar';
import Roster from './Roster';
import Rules from './Rules';
import Scoring from './Scoring';
import Teams from './Teams'
import axios from 'axios';
import './roster.css'



function CreateDraft () {
  const [check, setCheck] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const baseURL = 'http://35.171.161.15:8111/create_draft'
  const history = useHistory();
  const [draft_id, setDraft_id] = useState('')


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
  function submitForm(){
    axios.post(baseURL, allform).then((response)=>{
      console.log(response)
      if (response.status === 201){
        setDraft_id(response.data.Link.draft)
        setRedirect(true)
      }   

    }).catch(error => {
      console.log(error)
      return error
    });

  }
  useEffect(() => {
    (() => {
      if(redirect) {
        history.push(draft_id);
      }
    })()
  }, [redirect])
  // useEffect(() =>{
  //   if (submission === true){
      
  //   }
  // })
  
  const [allform, setAllform] = useState(
    {'roster':{
      oneB: '1',
      twoB: '1',
      threeB: '1',
      ss: '1',
      c: '1',
      of: '1',
      p: '1',
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
    <Check_teamnum len_invited={allform.teams.length} set_invited={allform.rules.teamnum} />
    <div className="roster">
      <button  type="button" onClick={submitForm}>Submit Final Draft</button>
    </div>

    
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

export default withRouter(CreateDraft);

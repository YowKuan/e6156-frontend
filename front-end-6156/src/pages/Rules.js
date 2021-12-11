import React, {useState} from 'react'
import './roster.css'

function Rules(props) {
  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }
  const [state, setState] = useState({
    teamnum: '1',
    leaguetype: "weight-based",
    chooseFormat: "take-turns",
    draftName: '',
    })
    return (
        <div className="roster">
        <h2>Choose the Rules</h2>
        <form>
            <label>Draft Name</label>
            <input name='draftName' type="text" onChange={handleChange} ></input>
          <label> Number of teams: </label>
          <select name='teamnum' defaultValue={'1'} onChange={handleChange}>
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
            <option value="4"> 4 </option>
            <option value="5"> 5 </option>
            <option value="6"> 6 </option>
            <option value="7"> 7 </option>
            <option value="8"> 8 </option>
          </select>
          <label> League Type: </label>
          <select name='leaguetype' defaultValue={"weight-based"} onChange={handleChange}>
            <option value="weight-based" > Weight Based </option>
            <option value="attribute-based" > Attribute Based </option>

          </select>

          <label> Choose player format: </label>
          <select name='chooseFormat' defaultValue={"take-turns"} onChange={handleChange}>
            <option value="take-turns" > Take turns </option>
            <option value="bidding" > Bidding </option>

          </select>
          <button type="button" onClick={() => props.setAllform(prevState =>({...prevState,'rules': state}))}>Submit Rules</button>
        </form>
        </div>
    )
}

export default Rules

import React, {useState} from 'react'

function Rules() {
    const [teamnum, setTeamnum] = useState(1)
    const [leaguetype, setLeaguetype] = useState("weight-based")
    const [choose, setChoose] = useState("take-turns")
    return (
        <div className="roster">
        <h1>Choose the Rules</h1>
        <form>
            <h2>Draft Name</h2>
            <input name='Draft Name' type="text" ></input>
          <label> Number of teams: </label>
          <select value={teamnum} onChange={(e)=> setTeamnum(e.target.value)}>
            <option value="1" selected> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
            <option value="4"> 4 </option>
            <option value="5"> 5 </option>
            <option value="6"> 6 </option>
            <option value="7"> 7 </option>
            <option value="8"> 8 </option>
          </select>
          <label> League Type: </label>
          <select value={leaguetype} onChange={(e)=> setLeaguetype(e.target.value)}>
            <option value="weight-based" selected> Weight Based </option>
            <option value="attribute-based" > Attribute Based </option>

          </select>

          <label> Choose player format: </label>
          <select value={choose} onChange={(e)=> setChoose(e.target.value)}>
            <option value="take-turns" selected> Take turns </option>
            <option value="bidding" > Bidding </option>

          </select>
        </form>
        </div>
    )
}

export default Rules

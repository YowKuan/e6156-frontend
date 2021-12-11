import React ,{ useState,}from 'react'
import './roster.css'





function Scoring(props) {
  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }
  const [state, setState] = useState({
    h: '1',
    hr: '1',
    avg: '1',
    w: '1',
    era: '1',
    sv: '1',
    })

 
    return (
      <div className="roster">
        <h2>Choose the scoring weights</h2>
        <form>
          <label> H: </label>
          <select name='h' defaultValue={"1"} onChange={handleChange}>
            <option value="1" > 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
          </select>
          <label> HR: </label>
          <select name='hr' defaultValue={"1"} onChange={handleChange}>
            <option value="1" > 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
          </select>
          <label> AVG: </label>
          <select name='avg' defaultValue={"1"} onChange={handleChange}>
            <option value="1" > 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
          </select>
          <label> W: </label>
          <select name='w' defaultValue={"1"} onChange={handleChange}>
            <option value="1" > 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
          </select>
          <label> ERA </label>
          <select name='era' defaultValue={"1"} onChange={handleChange}>
            <option value="1" > 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
          </select>
          <label> SV: </label>
          <select name='sv' defaultValue={"1"} onChange={handleChange}>
            <option value="1" > 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
          </select>
          <button type="button" onClick={() => props.setAllform(prevState =>({...prevState,'scoring': state}))}>Submit Scoring</button>
        </form>


      </div>



    )
    }
    export default Scoring
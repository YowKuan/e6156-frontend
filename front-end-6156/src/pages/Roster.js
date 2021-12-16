import React ,{ useState }from 'react'
import './roster.css'

function Roster(props) {
  function handleChange(evt) {
      const value = evt.target.value;
      setState({
        ...state,
        [evt.target.name]: value
      });
    }
  const [state, setState] = useState({
    oneB: '1',
    twoB: '1',
    threeB: '1',
    ss: '1',
    c: '1',
    of: '1',
    p: '1',
    dh: '1',
    })


 
    return (
      
      <div className="roster">
        <h2>Choose the roster</h2>
        <form>
          <label> 1B: </label>
          <select name='oneB'  defaultValue={'1'} onChange={handleChange}>
            <option value="1" > 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
          </select>
          <label> 2B: </label>
          <select name='twoB' defaultValue={'1'}  onChange={handleChange}>
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
          </select>
          <label> 3B: </label>
          <select name='threeB' defaultValue={'1'}  onChange={handleChange}>
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
          </select>
          <label> SS: </label>
          <select name='ss' defaultValue={'1'} onChange={handleChange}>
            <option value="1" > 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
          </select>
          <label> C: </label>
          <select name='c' defaultValue={'1'}  onChange={handleChange}>
            <option value="1" > 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
          </select>
          <label> OF: </label>
          <select name='of' defaultValue={'1'} onChange={handleChange}>
            <option value="1" > 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
          </select>
          <label> P: </label>
          <select name='p' defaultValue={'1'}  onChange={handleChange}>
            <option value="1" > 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
          </select>
          <label> DH: </label>
          <select name='dh' defaultValue={'1'}  onChange={handleChange}>
            <option value="1" > 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
          </select>
          <button type="button" onClick={() => props.setAllform(prevState =>({...prevState,'roster': state}))}>Submit Roster</button>
        </form>


      </div>



    )
    }
    export default Roster




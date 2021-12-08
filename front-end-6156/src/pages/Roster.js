import React ,{ useState, useEffect }from 'react'
import Checkbox from '../helper/Checkbox';
import roster from './roster.css'





function Roster() {
  const [oneB, setOneB] = useState(1)
  const [twoB, setTwoB] = useState(1)
  const [threeB, setThreeB] = useState(1)
  const [ss, setSS] = useState(1)
  const [c, setC] = useState(1)
  const [of, setOF] = useState(1)
  const [sp, setSP] = useState(1)
  const [rp, setRP] = useState(1)
  const [dh, setDH] = useState(1)


 
    return (
      <div className="roster">
        <h2>Choose the roster</h2>
        <form>
          <label> 1B: </label>
          <select value={oneB} onChange={(e)=> setOneB(e.target.value)}>
            <option value="1" selected> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
          </select>
          <label> 2B: </label>
          <select value={twoB} onChange={(e)=> setTwoB(e.target.value)}>
            <option value="1" selected> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
          </select>
          <label> 3B: </label>
          <select value={threeB} onChange={(e)=> setThreeB(e.target.value)}>
            <option value="1" selected> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
          </select>
          <label> SS: </label>
          <select value={ss} onChange={(e)=> setSS(e.target.value)}>
            <option value="1" selected> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
          </select>
          <label> C: </label>
          <select value={c} onChange={(e)=> setC(e.target.value)}>
            <option value="1" selected> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
          </select>
          <label> OF: </label>
          <select value={of} onChange={(e)=> setOF(e.target.value)}>
            <option value="1" selected> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
          </select>
          <label> SP: </label>
          <select value={sp} onChange={(e)=> setSP(e.target.value)}>
            <option value="1" selected> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
          </select>
          <label> RP: </label>
          <select value={rp} onChange={(e)=> setRP(e.target.value)}>
            <option value="1" selected> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
          </select>
          <label> DH: </label>
          <select value={dh} onChange={(e)=> setDH(e.target.value)}>
            <option value="1" selected> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
          </select>
          <button>Submit</button>
        </form>


      </div>



    )
    }
    export default Roster
    // const [checkedItems, setCheckedItems] = useState({}); //plain object as state

    // const handleChange = (event) => {
    //     // updating an object instead of a Map
    //     setCheckedItems({...checkedItems, [event.target.name] : event.target.checked });
    // }
  
    // useEffect(() => {
    //   console.log("checkedItems: ", checkedItems);
    // }, [checkedItems]);  
  
    // const checkboxes = [
    //     {
    //         name: '1B',
    //         key: 'checkBox1B',
    //         label: 'Check Box 1B',
    //     },
    //     {
    //         name: '2B',
    //         key: 'checkBox2B',
    //         label: 'Check Box 2B',
    //     },
    //     {
    //         name: '3B',
    //         key: 'checkBox3B',
    //         label: 'Check Box 3B',
    //     },
    //     {
    //         name: 'SS',
    //         key: 'checkBoxSS',
    //         label: 'Check Box SS',
    //     },
    //     {
    //         name: 'C',
    //         key: 'checkBoxC',
    //         label: 'Check Box C',
    //     },
    //     {
    //         name: 'OF',
    //         key: 'checkBoxOF',
    //         label: 'Check Box OF',
    //     },
    //     {
    //         name: 'SP',
    //         key: 'checkBoxSP',
    //         label: 'Check Box SP',
    //     },
    //     {
    //         name: 'RP',
    //         key: 'checkBoxRP',
    //         label: 'Check Box RP',
    //     },
    //     {
    //         name: 'DH',
    //         key: 'checkBoxDH',
    //         label: 'Check Box DH',
    //     }



    // ];
  
  
    // return (
    //     <div>
    //         <lable>Checked item name : {checkedItems["check-box-1"]} </lable> <br/>
    //         {
    //             checkboxes.map(item => (
    //                 <ul>
    //                 <label key={item.key}>
    //                     {item.name}
    //                     <Checkbox name={item.name} checked={checkedItems[item.name]} onChange={handleChange} />
    //                 </label>
    //                 </ul>
    //             ))
    //         }
    //     </div>
    // );
    //     }




import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import './teams.css'
import './roster.css'

const initialList = [];



const Teams = (props) => {
  const checknum = useState(props.check)
  //const [checknum, setChecknum] = useState(props.check)
  const [list, setList] = useState(initialList);
  const [name, setname] = useState("");

  const handleReset = (event) => {
      setList([])
      setname('')
  }

  const handleChange = (event) => {
    setname(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !props.check) {
      handleAdd();
    }
  };

  const handleAdd = () => {
    if (name !== ""){
      const newList = list.concat({ name, id: uuidv4() });
      setList(newList);
      setname(""); 
    }

  };
  useEffect(() => {
    props.setAllform(prevState =>({...prevState,'teams': list}))
    // action on update of movies
}, [list]);
  useEffect(() => {
    // action on update of movies
  }, [checknum]);


  return (
    <div className="team">
        <h2>Put your friends' email here</h2>
      {checknum}
      <AddItem
        name={name}
        onChange={handleChange}
        onAdd={handleAdd}
        handleKeyDown={handleKeyDown}
        onReset={handleReset}
        disabled={props.check}
      />
      <h3>Added Friends:</h3>
            
      <List list={list} />
    </div>
  );
};

const AddItem = ({ onChange, name, onAdd, handleKeyDown, onReset, disabled }) => {
  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
        <button disabled={disabled} type="button" onClick={onAdd}>
          Add
        </button>
        <button type="button" onClick={onReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

const List = ({ list }) => {
  return (
    <form>
      {list.map((item) => {
        return <button style={{ background: 'midnightblue', color: '#fff', padding: '8px', borderradius: '8px', }} key={item.id}>{item.name}</button>;
      })}
    </form>
  );
};

export default Teams;
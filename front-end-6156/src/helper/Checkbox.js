import React from 'react';

const Checkbox = ({ type = 'checkbox', name, number = 1, onChange }) => {
    console.log("Checkbox: ", name, number);

  return (<input name={name}  type="text" pattern="[0-9]*" value='1' /> )
}
export default Checkbox;
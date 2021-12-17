import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';
import axios from 'axios';


function Result(props) {
    const result_url = 'http://35.171.161.15:8111/draft/'.concat(props.match.params.id).concat('/score')
    const [winner, setWinner] = useState('Josh')


    result_request = axios.get(result_url).then((response)=>{
      console.log(response)
      console.log(response.status)
      if (response.status === 200){
        console.log(response)

      }   
    }).catch(error => {
      console.log(error)
      return error
    });

    return (
    
        <div>
    <h1>Result</h1>
    <h2>{winner} Wins</h2>
            <Table responsive>
  <thead>
    <tr>
      <th>#</th>
      {Array.from({ length: 12 }).map((_, index) => (
        <th key={index}>Table heading</th>
      ))}
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      {Array.from({ length: 12 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
    <tr>
      <td>2</td>
      {Array.from({ length: 12 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
    <tr>
      <td>3</td>
      {Array.from({ length: 12 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
  </tbody>
</Table>
            
        </div>
    )
}

export default Result

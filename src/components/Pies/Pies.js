import React, { useState, useEffect } from 'react';
import './Pies.css';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';
import Pie from './Pie/Pie';

const Pies = (props) => {
  // fetch all pies authorized by the session token
  const [pies, setPies] = useState(true);
  const [inventory, setInventory] = useState([]);
  // let testArray = ['hello', 'world', 'bacon']

  console.log('INVENTORY:', inventory.length)

  useEffect(() => {
    console.log('hello');
    let a = 1;
    a += 1;
    console.log(a);

    // fetch the data
    let url = 'http://localhost:3333/pies/';
    fetch(url, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.sessionToken
      })
    })
      // jsonify it
      .then(res => res.json())
      // console.log it
      .then(json => { console.log(json); setInventory(json) })
      // catch any errors
      .catch(err => console.log(err))
  }, [])
  // ERROR: Cannot call a useEffect as a callback function
  // useEffect(() => {
  //   console.log('hello')
  //   useEffect(() => {console.log('testing within hello')}, [])
  // })


  return (
    <Row>
      {
        inventory.length > 0 ?
          // put data here
          inventory.map(pie =>
            <Pie pie={pie} />
          )
          :
          ''
        // leave it empty
      }
    </Row>
    // <table>
    //   <thead>
    //     <tr>
    //       <th>Name of Pie</th>
    //       <th>Base of Pie</th>
    //       <th>Crust</th>
    //       <th>Bake Time</th>
    //       <th>Servings</th>
    //       <th>Rating</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {/* display all pies with a child component */}
    //   </tbody>
    //   <button onClick={ () => {setPies(!pies)} }>TOGGLE EXAMPLE</button>
    // </table>
  )
}

export default Pies;
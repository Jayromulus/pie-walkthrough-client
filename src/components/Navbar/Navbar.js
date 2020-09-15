import React from 'react'
import './Navbar.css'
import piePic from '../../assets/Pecan-Pie.jpg'
import Logout from './Logout/Logout'

import { Col, Row } from 'reactstrap'

const Navbar = (props) => {
  // {props.something}
  // console.log(props.something)
  return (
    <div>
      <nav>
        <Row>
          <Col style={{textAlign: 'left'}}>
            <img id='piePic' src={piePic} alt='pie' />
          </Col>
          <Col style={{textAlign: 'right'}}>
            <Logout setSessionToken={props.setSessionToken} />
          </Col>
        </Row>
      </nav>
    </div>
  )
}

export default Navbar;
import React, { useState } from 'react';
import './Logout.css';
import logoutPic from '../../../assets/logout-icon.png'

const Logout = (props) => {
  return (
    <div>
      {/* CHALLENGE: click this logout image in order to set the session token to undefined */}
      <img id='logout' className='logout' src={logoutPic} alt='logout' onClick={() => props.setSessionToken(undefined)} />
      {/* <input type="image" src={logoutPic} id="logout" alt="logout" 
      onClick={(e) => props.setSessionToken(undefined)} /> */}
    </div>
  )
}

export default Logout;
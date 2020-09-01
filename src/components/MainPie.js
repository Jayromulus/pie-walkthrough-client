import React, { useState } from 'react';
import Navbar from './Navbar/Navbar'

const MainPie = () =>  {
  const [sessionToken, setSessionToken] = useState(undefined);
  // let sessionToken = value, let setSessionToken = function(newValue) { sessionToken = newValue }
  console.log(sessionToken);
  return (
    <div className="App">
      <Navbar />
      <h1>Main Pie Connected!</h1>
      { /* we can type javascript here. yay! */ }
      {sessionToken}
    </div>
  );
}

export default MainPie;

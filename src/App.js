import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Pies from './components/Pies/Pies';
import Pie from './components/Pies/Pie/Pie'

function App() {
  const [sessionToken, setSessionToken] = useState(undefined);
  // let sessionToken = undefined, let setSessionToken = function(newValue) { sessionToken = newValue }
  console.log(sessionToken);

  // WILL UPDATE WHEN SESSION TOKEN GETS A NEW VALUE
  useEffect(() => console.log('session token has changed'), [sessionToken])

  // WILL ONLY RUN ONCE WHEN THE PAGE LOADS
  // useEffect(() => console.log('session token is initialized'), [])

  // WILL RUN WHEN LOCAL STATE CHANGES (local state meaning a state within this file: e.g. sessionToken)
  // useEffect(() => console.log('session token has changed'))

  const viewConductor = () => {
    return sessionToken 
    ?
      <Pies sessionToken={sessionToken} /> 
      :
      <Auth
        message="Hello from App.js"
        setSessionToken={setSessionToken}
      />
  }

  return (
    <div className="App">
      <Navbar setSessionToken={setSessionToken}  />
      {/* <Navbar /> */}
      {/* let message = "Hello from App.js" */}
      
      { /* we can type javascript here. yay! */}
      {/* {sessionToken} */}

      {/* if I have a sessionToken, I want to see the Pies otherwise I want to see the Auth form */}
      {viewConductor()}
      {/* <Pie pie={ {nameOfPie: 'test', crust: 'tust'} } /> */}
    </div>
  );
}

// const App = (message, setSessionToken) => {
//   return (
//     <div className="App">
//       <h1>Main Pie Connected!</h1>
//     </div>
//   );
// }
// App('Hello from App.js', setSessionToken)

export default App;

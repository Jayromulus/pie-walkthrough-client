import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'

function App() {
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

// const App = () => {
//   return (
//     <div className="App">
//       <h1>Main Pie Connected!</h1>
//     </div>
//   );
// }

export default App;

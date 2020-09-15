import React, { useState } from 'react'
import './Auth.css'

const Auth = (props) => {
  const [login, setLogin] = useState(true)
  // let login = true;
  // let setLogin = (newValue) => {
  //   login = newValue;
  // }
  // props.setSessionToken('value')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  let [email, setEmail] = useState('email here')
  const [password, setPassword] = useState('mypassword123!')

  const title = () => {
    return login ? 'Login' : 'Signup'
  }

  const loginToggle = (event) => {
    event.preventDefault();

    setLogin(!login);

    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
  }

  const signupFields = () => !login ?
    (
      <div>
        <label htmlFor="firstName">First Name:</label>
        <br />
        <input type="text" id="firstName" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <br />
        <input type="text" id="lastName" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <br />
      </div>
    ) : null

  const authFunction = (event) => {
    event.preventDefault();

    // set up information in an object
    let userObject = {
      fName: firstName,
      lName: lastName,
      email,
      password
    };
    
    // find out if it is a login or signup
    // designate which path to send the post to (maybe a ternary?)
    let url = login ? 'http://localhost:3333/auth/signin' : 'http://localhost:3333/auth/signup'
    console.log(url);
    
    // fetch it
    fetch(url, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      // jsonify it
      body: JSON.stringify(userObject)
    })
    // send it there
    .then(res => res.json())
    // response handling
    .then(json => {console.log('USER:',json.sessionToken); props.setSessionToken(json.sessionToken)})
    .catch(err => console.log(err))
  }
  // props.message = props.setSessionToken
  return (
    <div>
      <form onSubmit={authFunction}>
        <h1>{title()}</h1>
        {signupFields()}
        <label htmlFor="email">Email:</label>
        <br />
        <input type="text" id="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <br />
        {/* {email} */}
        <label htmlFor="password">Password:</label>
        <br />
        <input type="password" id="password" placeholder="password"
          onChange=
          {
            e => {
              setPassword(e.target.value)
              console.log('password right')
            }
          } />
        <br />
        {/* vv PSEUDO CODE vv */}
        {/* document.getElement(button).addEventListener('click', loginToggle) */}
        <button onClick={loginToggle}>Login/Signup Toggle</button>
        <br />
        <button type="submit">Submit User Data</button>
      </form>
    </div>
  )
}

export default Auth


// let e = () => 16
// let e = () => { console.log('hello'); return 16 }

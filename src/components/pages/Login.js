import React, { useState, useEffect, setState } from 'react';
import Navbar from '../Navbar' 
import axios from 'axios';
import './Login.css'
import { Redirect } from 'react-router'
import { withRouter } from "react-router-dom";


const Login = (props) => { 
  console.log(props)

const [user, setUser] = useState({
  email: '',
  password: '',
  isLoggedIn: false,
  posts: []
});

const updateUser = (event) => {
  console.log(event.target.value);

  setUser({
    ...user,
    [event.target.name]: event.target.value
  })
}

const sendData = async (event) => {

  event.preventDefault();
  console.log('Form Submitted'); 
  console.log(user.password);
  console.log(user.email);

  const body = JSON.stringify({
    userEmail: user.email,
    userPassword: user.password
  });

const config = {
  headers: {
    'content-type' : 'application/json'
  }
  }
  const res = await axios.post('/login', body, config)
  console.log(res.data)  
  if(res.data.isLoggedIn === true){
    return(
      props.history.push('/dashboard')
  )
  } else {
    this.setState({alert_message: 'FAILURE -- INCORRECT CREDENTIALS'})
  } 
}

return (
  <div className='App'>
    <Navbar/>

    <div className="cardl">
      <div class="login-box">
        <h1>Login</h1>
    <form onSubmit={sendData}>

      <div className="textboxl">
      <i class="far fa-envelope"></i>
     <input type='email' onChange={updateUser} name='email' placeholder='email'/>
     </div>

     <div className="textboxl">
     <i class="fa fa-lock" aria-hidden="true"></i>
     <input type='password' onChange={updateUser} name='password' placeholder='password'/>
     </div>

     <button className="login-btn" type='submit'>Login</button>
    </form>
    </div>
    </div>
  </div>
)
}

export default withRouter(Login);
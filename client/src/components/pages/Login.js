import React, { useState, useEffect, setState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from '../Navbar' 
import axios from 'axios';
import './Login.css'

export default function Login(){

const [user, setUser] = useState({
  email: '',
  password: '',
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
    userPassword: user.password,
    userName: user.name,
    userAdmin: user.admin
  });

const config = {
  headers: {
    'content-type' : 'application/json'
  }
  }
  const res = await axios.post('/login', body, config)
  console.log(res.data)
  }
  if(user.admin === true){
    console.log('user.admin is true.') 
  } else {
    console.log('user.admin is false.')
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

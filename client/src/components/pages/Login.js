import React, { useState, useEffect, setState } from 'react';
import Navbar from '../Navbar' 
import axios from 'axios';

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
  if(user.admin === true){
    console.log('user.admin is true.')
  } else {
    console.log('user.admin is false.')
  }
}


return (
  <div className='App'>
    <Navbar/>
    <form onSubmit={sendData}>
      <label>Email</label>
     <input type='email' onChange={updateUser} name='email'/>
     <label>Password</label>
     <input type='password' onChange={updateUser} name='password'/>
     <button type='submit'>Login</button>
    </form>
  </div>
)
}

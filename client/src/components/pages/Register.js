import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar'
import './Register.css'



export default function Register(){

const [user, setUser] = useState({
  email: '',
  password: '',
  posts: []
});


const getApi = async () => {
    const res = await axios.get('https://opentdb.com/api.php?amount=10')
    console.log(res.data)
}

useEffect(() => {
  getApi();
}, [])




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
    const res = await axios.post('/register', body, config);
    console.log(res.data)
  }






  return (
    <div className='App'>
      <Navbar/>
      <div className="card">
      <div class="register-box">
        <h1>Register</h1>
      <form onSubmit={sendData}>

      <div className="textbox">
      <i class="fa fa-user" aria-hidden="true"></i>
        <input type='string' onChange={updateUser} name='name' placeholder='Name'/>
        </div>

        <div className="textbox">
          <i class="far fa-envelope"></i>
       <input type='email' onChange={updateUser} name='email' placeholder='Email'/>
        </div>

        <div className="textbox">
          <i class="fa fa-lock" aria-hidden="true"></i>
       <input type='password' onChange={updateUser} name='password' placeholder='Password'/>
        </div>

        <div className="textboxLast">
        <i class="fas fa-user-shield"></i>
        <label className="label">Admin?</label>
        <input type='checkbox' className="checkbox" onChange={updateUser} name='admin'/>
        </div>
       <button className="register-btn" type='submit'>Register</button>
      </form>
      </div>
      </div>
    </div>
  );  
}


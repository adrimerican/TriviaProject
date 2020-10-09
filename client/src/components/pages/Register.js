import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar'



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
      <form onSubmit={sendData}>
        <label>Email</label>
       <input type='email' onChange={updateUser} name='email'/>
       <label>Password</label>
       <input type='password' onChange={updateUser} name='password'/>
       <label>Name</label>
       <input type='string' onChange={updateUser} name='name'/>
       <label>Admin?</label>
       <input type='checkbox' onChange={updateUser} name='admin'/>
       <button type='submit'>Register</button>
      </form>
    </div>
  );  
}


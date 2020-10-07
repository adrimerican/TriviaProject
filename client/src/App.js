import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Footer from './components/Footer';

function App() {
const [user, setUser] = useState({
  email: '',
  password: '',
  posts: []
});

useEffect(() => {
  getApi();
}, [])

const getApi = async () => {
    // const res = await axios.get('/myApi')
    const res = await axios.get('https://opentdb.com/api.php?amount=10')
    console.log(res.data)

    // setJoke(res.data.value)
    // setSport({
    //   team1: res.data.Team1,
    //   team2: res.data.Team2,
    //   score: res.data.Score
    // })
}

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
    userPassword: user.password
  });

  const config = {
    headers: {
      'content-type' : 'application/json'
    }
  }

  const res = await axios.post('/register', body, config);
  // axios.delete('/deleteUser')
  // axios.put('...')
  console.log(res.data)

}

  console.log('My state is:');
  console.log(user);
  return (
    <div className='App'>
      {/* <h1>The joke is: {joke}</h1>
     <h1>Score: {sport.score}</h1>
      <h1>Team 2: {sport.team2}</h1> */}

      <Router>
      <Navbar />
      <Switch>
      <Route path='/' exact component= {Home}/>
      <Route path='/login' exact component={Login}/>
      <Route path='/register' exact component={Register}/>
      </Switch>
      </Router>
      <Footer/>

      {/* <form onSubmit={sendData}>
        <label>Email</label>
       <input type='email' onChange={updateUser} name='email'/>
       <label>Password</label>
       <input type='password' onChange={updateUser} name='password'/>
       <button type='submit'>Register</button>
      </form> */}
    </div>
  );  
}

export default App;

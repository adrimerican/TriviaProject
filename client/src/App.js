import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Footer from './components/Footer';

class App extends Component { 
  render() {
    return (
        
      <div className='App'>
        <Router>
      <Navbar />
      <Switch>
      <Route path='/' exact component= {Home}/>
      <Route path='/login' exact component={Login}/>
      <Route path='/register' exact component={Register}/>
      </Switch>
      </Router>
      <Footer/>
      </div>
    )
  }
}

export default App;
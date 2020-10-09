import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Dashboard from './components/pages/Dashboard';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Footer from './components/Footer';

class App extends Component { 
  render() {
    return (
        
      <div className='App'>
      <Router>
      <Switch>
      <Route path='/' exact component= {Home}/>
      <Route path='/login' exact component={Login}/>
      <Route path='/register' exact component={Register}/>
      <Route path='/dashboard' exact component={Dashboard}/>
      </Switch>
      </Router>
      <Footer/>
      </div>
    )
  }
}

export default App;
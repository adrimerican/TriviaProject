import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Dashboard from './components/pages/Dashboard';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Quiz from './components/pages/Quiz';
import Logout from './components/pages/Logout';
import Footer from './components/Footer';

class App extends Component { 
  render() {
    return (
        
      <div className='App'>
      <Router>
      <Switch>
      <Route path='/' exact component= {Home}/>
      <Route path='/login' exact component={Login} history={this.props.history}/>
      <Route path='/register' exact component={Register}/>
      <Route path='/dashboard' exact component={Dashboard}/>
      <Route path='/quiz' exact component={Quiz}/>
      <Route path='/logout' exact component={Logout}/>
      </Switch>
      </Router>
      <Footer/>
      </div>
    )
  }
}

export default App;
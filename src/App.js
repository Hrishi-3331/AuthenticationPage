import React from 'react';
import './bootstrap.min.css'
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignIn from './components/SignIn';
import Homepage from './components/Homepage';
import Signup from './components/Signup';
import Page404 from './components/404Page';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <center>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/login" component={SignIn}/>
            <Route exact path="/signup" component={Signup}/>
            <Route component={Page404}/>
          </Switch>
        </center>
      </div>
    </Router>
  );
}

export default App;

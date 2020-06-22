import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.component';
import Register from './components/register.component';
import Login from './components/login.component';
import './App.css';

function App() {
  return (
    <Router>
   <div className="container">
     <Navbar/>
     <Route path="/register" component={Register}/>
     <Route path="/login" component={Login}/>
   </div>
   </Router>
  );
}

export default App;

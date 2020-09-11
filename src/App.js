import React from 'react';
import logo from './logo.svg';
import './App.css';
import dashbords from "./component/dashbord"
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
function App() {
  return (
    <Router>
  <Route exact path="/dashbord" component={dashbords}/> 
  </Router>
  );
}

export default App;

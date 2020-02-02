import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm.js';
import Welcome from './Components/Welcome.js';
import About from './Components/About.js'
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <div className="AppBackground" style={{height:"100%"}}>
      {/* <LoginForm/> */}
      <Router>
        <Route exact path="/" component={LoginForm} />
        <Route path="/Welcome/:user" component={Welcome} /> 
        <Route path="/About" component={About} />
        <Route path="/ContactUs" component={ContactUs} />       
      </Router>
    </div>
  );
}

export default App;

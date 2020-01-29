import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Components/LoginForm.js';
import Welcome from './Components/Welcome.js';

function App() {
  return (
    <div className="App">
      {/* <LoginForm/> */}
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/Welcome/:user" component={Welcome} />
      </Router>
    </div>
  );
}

export default App;

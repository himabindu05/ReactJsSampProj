import React from 'react';
import './App.css';
// import Greet from './Components/Greet';
 import Welcome from './Components/Welcome';
// import Hello from './Components/Hello';
import Message from './Components/Message';

function App() {
  return (
    <div className="App">
      <Message></Message>
       {/* <Greet name="Hima Bindu" Role="Technology Analyst">
        <p>This is a children tag </p>
      </Greet> */}
      {/*<Greet name="Bhanu Chandra" Role="Associate Consultant">
        <button>Action</button>
      </Greet>
    <Greet name="Nandini" Role="Assistant Manager"/>*/}
      <Welcome name="Hima Bindu" Role="Technology Analyst">
        <p>This is a children tag </p>
      </Welcome>
      {/*<Welcome name="Bhanu Chandra" Role="Associate Consultant">
        <button>Action</button>
      </Welcome>
      <Welcome name="Nandini" Role="Assistant Manager"/>
      <Hello/> */}
    </div>
  );
}

export default App;

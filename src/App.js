import React, { Component } from 'react';
import Homepage from './components/Homepage'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Homepage />
          <h2></h2>
        </div>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;

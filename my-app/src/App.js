import React, { Component } from 'react';
import './App.css';
import MyComp from './components/mycomp';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h3>Hello</h3>
          <MyComp />
      </div>
    );
  }
}

export default App;

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';
import './App.css';
import Header from './views/header';
import Body from './views/body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;

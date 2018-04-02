import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './views/header';
import Home from './views/HomePage';
import Calendar from './views/CalendarPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calendar">Events Calendar</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route exact path="/calendar" component={Calendar} />
        </div>
        </Router>
      </div>
    );
  }
}

export default App;

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Page Imports
import Home from './views/HomePage';
import Calendar from './views/CalendarPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <div>
          <header className="navbar navbar-expand-lg navbar-light bg-light">
              <h1 className="navbar-brand mb-0 h1">Willand Village Hall</h1>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <span className="nav-link">
                  <Link to="/">Home</Link>
                </span>
              </li>
              <li className="nav-item">
              <span className="nav-link">
                <Link to="/calendar">Events Calendar</Link>
                </span>
              </li>
            </ul>

            </div>
          </header>
          <Route exact path="/" component={Home} />
          <Route exact path="/calendar" component={Calendar} />
        </div>
        </Router>
        <footer id="footer" className="footer">
          <p class="text-muted">Developed by Michael Hoe</p>
        </footer>
      </div>
    );
  }
}

export default App;

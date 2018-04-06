import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import React, { Component } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Page Imports
import HomePage from './views/HomePage';
import CalendarPage from './views/CalendarPage';
import ContactPage from './views/ContactPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <div className="body-bg">
          <header className="navbar navbar-expand-lg navbar-dark">
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
              <li className="nav-item">
              <span className="nav-link">
                <Link to="/contact">Contact Us</Link>
                </span>
              </li>
            </ul>

            </div>
          </header>
          <div className="alert alert-warning"><h2>Site Under Development</h2><span>Please bare with us.</span></div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/calendar" component={CalendarPage} />
          <Route exact path="/contact" component={ContactPage} />
        </div>
        </Router>
      </div>
    );
  }
}

export default App;

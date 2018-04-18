import "react-image-gallery/styles/css/image-gallery.css";
import "photo-sphere-viewer/dist/photo-sphere-viewer.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import React, { Component } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Page Imports
import HomePage from './views/HomePage';
import CalendarPage from './views/CalendarPage';
import ContactPage from './views/ContactPage';
import GalleryPage from './views/GalleryPage';

const CustomLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => {
        return ( <Link className={match ? "nav-link active" : "nav-link"} to={to}>{label}</Link> )
    }}
  />
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="body-bg">
            <header className="navbar sticky-top navbar-expand-lg navbar-dark">
              <a href="/"><h1 className="navbar-brand mb-0 h1">Willand Village Hall</h1></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                      <CustomLink activeOnlyWhenExact={true} label="Home" to="/" />
                  </li>
                  <li className="nav-item">
                      <CustomLink activeOnlyWhenExact={true} label="Event Calendar" to="/calendar" />
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href={`${process.env.PUBLIC_URL}/Documents/Floor_Plan.pdf`} target="_blank">Floor Plan</a>
                  </li>
                  <li className="nav-item">
                    <CustomLink activeOnlyWhenExact={true} label="Gallery" to="/gallery" />
                  </li>
                  <li className="nav-item">
                    <CustomLink activeOnlyWhenExact={true} label="Contact Us" to="/contact" />
                  </li>
                </ul>
              </div>
            </header>
            <div className="alert alert-warning"><h2>Site Under Development</h2><span>Please bear with us.</span></div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/calendar" component={CalendarPage} />
            <Route exact path="/gallery" component={GalleryPage} />
            <Route exact path="/contact" component={ContactPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

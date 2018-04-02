import React, { Component } from 'react';
import CalendarContainer from './calendarContainer';

class Body extends Component {
    render() {
      return (
        <div id="main-body" className="container-fluid">
            <h2>Calendar</h2>

            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Events Calendar</h2>
                <CalendarContainer />
                </div>
            </div>
        </div>
      );
    }
  }
  
export default Body;
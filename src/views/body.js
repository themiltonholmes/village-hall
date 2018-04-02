import React, { Component } from 'react';
import CalendarContainer from './calendarContainer';

class Body extends Component {
    render() {
      return (
        <div id="main-body">
            <p>Test</p>

            <div class="card">
                <CalendarContainer />
            </div>
        </div>
      );
    }
  }
  
export default Body;
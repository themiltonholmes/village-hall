import React, { Component } from 'react';
import Page from './PageComponent';
import CalendarContainer from './calendarContainer';

class CalendarPage extends Component {
    render() {
      return (
        <Page title="calendar">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Events Calendar</h2>
                <CalendarContainer />
                </div>
            </div>
        </Page>
      );
    }
  }
  
export default CalendarPage;
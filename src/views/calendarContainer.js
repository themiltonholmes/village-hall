import React, { Component } from 'react';

class CalendarContainer extends Component {
    render() {
      return (
        <div id="calendar-container">
            <iframe title="village hall calendar" src="https://calendar.google.com/calendar/embed?title=WVH&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=oq5iri42gjp5hsg38qhosfh000%40group.calendar.google.com&amp;color=%23711616&amp;src=7vntgebe8mliqm7oj9q6ka7m78%40group.calendar.google.com&amp;color=%23182C57&amp;src=trqkqbalr8ks8ec8ocfeq5ouok%40group.calendar.google.com&amp;color=%23125A12&amp;src=hnjei5c8iqjdj3k2aqgeffceq0%40group.calendar.google.com&amp;color=%2323164E&amp;ctz=Europe%2FLondon"
              width="800" height="600" frameborder="0" scrolling="no"></iframe>
        </div>
      );
    }
  }
  
export default CalendarContainer;
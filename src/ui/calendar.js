import React from 'react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import myEventsList from 'ui/events'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);
BigCalendar.momentLocalizer(moment)
const MyCalendar = props => (
  <div style={{height:500}}>
    <BigCalendar

        events={myEventsList}
      
    />
  </div>
);

export default MyCalendar
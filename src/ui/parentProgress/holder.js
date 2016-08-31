import React from 'react';
import moment from 'moment'
var newWeek= moment().startOf('week')
var newWeekVal = newWeek.valueOf()
var endWeek = moment().endOf('week')
var endWeekVal = endWeek.valueOf()

export default React.createClass({

  render: function () {
    return (
      <li style={{listStyle:"none", fontSize:24, marginBottom:25}}>{this.props.name}</li>
    )
  }
})
import React from 'react';
import moment from 'moment'
var newWeek= moment().startOf('week')
var newWeekVal = newWeek.valueOf()
var endWeek = moment().endOf('week')
var endWeekVal = endWeek.valueOf()

export default React.createClass({

  render: function () {
  	console.log(newWeek)
  	console.log(newWeekVal)
  	console.log(endWeekVal)
  	if(this.props.endDate < endWeekVal && this.props.startDate > newWeekVal){
    return (
      <li>{item.name}</li>
    )
	}else{
		return null
	}
  }
})
import React from 'react';
import {connect} from 'react-redux'
import moment from 'moment'
import Holder from 'ui/parentProgress/holder'

var newWeek= moment().startOf('week')
var newWeekVal = newWeek.valueOf()
var endWeek = moment().endOf('week')
var endWeekVal = endWeek.valueOf()
const Comp = React.createClass({
  render: function () {
    return (
    	<div style={{width:"50%"}}>
    		<h1> Chores completed this week</h1>
    		{this.props.complete.map(function(item){
    			return <Holder key={item.id} startDate={item.startDate} endDate={item.endDate} description={item.description} name={item.name} />
    		})}


    	</div>
      
    )
  }
})

const stateToProps = function(state) {
	return{
		complete:state.choreReducer.complete
	}
}

export default connect(stateToProps)(Comp)
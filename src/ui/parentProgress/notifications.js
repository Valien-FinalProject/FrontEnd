import React from 'react';
import {connect} from 'react-redux'

const Notifications =  React.createClass({
  render: function () {
    return (
      <div style={{width:"50%"}}>
      	 <h1>Current Points: {this.props.points}</h1>
      	<ul>
      		{this.props.rewards.map(function(reward){
      			<li key={reward.id}>{reward.description}----{reward.value}</li>
      		})}

      	</ul>

      </div>
    )
  }
})	

const stateToProps = function(state){
	return{
		rewards:state.rewardReducer.rewards,
    points:state.childReducer.points
	}
}


export default connect(stateToProps)(Notifications)
import React from 'react';
import {connect} from 'react-redux'
import {getChildPoints} from 'api/api'

const Notifications =  React.createClass({
  componentWillMount:function(){
    console.log(this.props.value)
  },
  render: function () {
    console.log(this.props.rewards, "rewards")
    return (
      <div style={{width:"50%", borderRight:"1px solid white"}}>
      	 <h1 style={{textAlign:"center"}}>Current Points: {this.props.points}</h1>
         <h2 style={{textAlign:"center"}}>Rewards Cashed In</h2>
      	<ul>
      		{this.props.rewards.map(function(reward){
      			return <li style={{fontSize:24}} key={reward.id}><p style={{width:200, display:"inline-block"}}>Reward: {reward.name}</p> <p style={{display:"inline-block", marginLeft:50}}>Points: {reward.points}</p></li>
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
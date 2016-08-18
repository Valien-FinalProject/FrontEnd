import React from 'react';
import {connect} from 'react-redux'
import {getAllRewards, getWishes} from 'api/api'
import TestRewards from 'ui/childRewards/testrewards'
import TestWishes from 'ui/childRewards/testwishes'

const Rewards = React.createClass({
  componentWillMount:function(){
    getAllRewards();
  },
  render: function () {
    console.log(this.props.rewards)
    return (
      <div>
      	<h1> Rewards Available </h1>
      	<ul> 
      		{this.props.rewards.map(function(reward){
            return <TestRewards key={reward.id} name={reward.description}/>
          })}
      		
      	</ul>




      </div>
    )
  }
})

const stateToProps = function(state){
  console.log("state", state)
  return{
    rewards:state.rewardReducer.rewards
  }
}

export default connect(stateToProps)(Rewards)


// <h2>Wishes</h2>
        // <ul>  
        //   {this.props.wishes.map(function(wish){
        //     return <TestWishes key={wish.id} id={wish.id} name={wish.description} />
        //   })}
        // </ul>
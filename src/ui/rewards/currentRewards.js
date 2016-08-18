import React from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import {connect} from 'react-redux'
import {getAllRewards} from 'api/api'



const style={
  display:"inline-block",
  width:"50%",
  textAlign:"center"
}
const CurrentRewards = React.createClass({
  componentWillMount:function(){
    getAllRewards()
  },
  render: function () {
    return (
      <div style={style}>
      	<h1> All available rewards </h1>
      		<ul>
          {this.props.rewards.map(function(item){
            return <li key={item.id}>{item.description}  Points: {item.points} <RaisedButton name="delete" label="delete" /></li>
          })}
      			
      		</ul>

      </div>
    )
  }
})	

const stateToProps = function(state){
  ("rewaards", state)
  return{
    rewards:state.rewardReducer.rewards
  }
}

export default connect(stateToProps)(CurrentRewards)
import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {connect} from 'react-redux'
import {getChildren, getRewardsById} from 'api/api'
import Graph from 'ui/parentProgress/graph'
import Notifications from 'ui/parentProgress/notifications'


const radioStyle={
  display:"flex",
  flexDirection:"row",
  width:120
}

const Progress =  React.createClass({
  getInitialState:function(){
    return{
      value:""
    }
  },
  componentWillMount:function(){
    getChildren()
  },
  handleChange:function(e, value){
    this.setState({
      value:value
    })
    getRewardsById(value)

  },
  render: function () {
    return (
      <div>
      	<h1>Progress</h1>
      	<h2>Toggle Child:</h2>
      
	      	<RadioButtonGroup style={radioStyle} name="children" onChange={(e, value) => this.handleChange(e, value)} >
          {this.props.children.map(function(item, i){
            return <RadioButton key={i} value={item.id} label={item.name} />
          })}
        </RadioButtonGroup>
        <div style={{width:1800, display:"flex", flexDirection:"row"}}>
          <div style={{width:900, height:700, backgroundColor:"red"}}>
        	<Graph value={this.state.value} />
          </div>
          <div style={{width:900, height:700, backgroundColor:"blue"}}>
        	<Notifications value={this.state.value} />
          </div>
        </div>
      </div>
    )
  }
})	


const stateToProps =function(state){
  return{
    children:state.parentReducer.children,
    rewards:state.rewardReducer.rewards
  }
}

export default connect(stateToProps)(Progress)
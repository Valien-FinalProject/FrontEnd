import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {connect} from 'react-redux'
import {getChildren, getRewardsByIdPath, getParentCompleteChoresById, getChildPoints} from 'api/api'
import Graph from 'ui/parentProgress/graph'
import Notifications from 'ui/parentProgress/notifications'
import ChoresComp from 'ui/parentProgress/choresComp'
import {fullWhite} from 'material-ui/styles/colors'


const radioStyle={
  display:"flex",
  flexDirection:"row",
  width:"100",
  color:fullWhite,

}

const Progress =  React.createClass({
  getInitialState:function(){
    return{
      value:localStorage.getItem('ChildIdforDefault')
    }
  },
  componentWillMount:function(){
    getChildren()
    
  },
  handleChange:function(e, value){
    this.setState({
      value:value
    })
    getRewardsByIdPath(value)
    getParentCompleteChoresById(value)
    getChildPoints(value)

  },
  render: function () {
    return (
      <div>
      	<h1 style={{textAlign:"center", fontSize:52}} >Progress</h1>
      	 <h2>Toggle Child:</h2>
      
	      	<RadioButtonGroup style={radioStyle} name="children" defaultSelected={localStorage.getItem('ChildIdforDefault')} onChange={(e, value) => this.handleChange(e, value)} >
              
            {this.props.children.map(function(item, i){
              return <RadioButton style={{width:75, marginRight:50}} labelStyle={{color:fullWhite, fontSize:20, fontFamily:"Chalky"}} key={i} value={item.id} label={item.name} />
            })}
          </RadioButtonGroup>
          <div style={{display:"flex", flexDirection:"row"}}>
          	<Notifications  />
            <ChoresComp value={this.state.value} />
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
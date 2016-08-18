import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {connect} from 'react-redux'
import {getChildren} from 'api/api'

const radioStyle={
  display:"flex",
  flexDirection:"row",
  width:120
}

const Progress =  React.createClass({
  componentWillMount:function(){
    getChildren()
  },
  render: function () {
    return (
      <div>
      	<h1>Progress</h1>
      	<h2>Toggle Child:</h2>
      
	      	<RadioButtonGroup style={radioStyle} name="children" defaultSelected="child1" >
          {this.props.children.map(function(item, i){
            return <RadioButton key={i} value={item.name} label={item.name} />
          })}
        </RadioButtonGroup>
      
      	<h3> Total Points: **graph with points***</h3>
      	<h3> Current Points</h3>

      </div>
    )
  }
})	


const stateToProps =function(state){
  return{
    children:state.parentReducer.children
  }
}

export default connect(stateToProps)(Progress)
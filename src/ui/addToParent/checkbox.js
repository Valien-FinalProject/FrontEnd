import React from 'react';
import Checkbox from 'material-ui/Checkbox'
import {connect} from 'react-redux'
import {fullWhite} from 'material-ui/styles/colors'
import {getChildren} from 'api/api'


const CheckboxCont =  React.createClass({
  getInitialState:function(){
  	return{
  		children:{}
  	}
  },
  componentWillMount:function(){
  	getChildren()
  },
  handleCheck:function(e,isChecked){
  	var newObj = {}
  	newObj[e] = isChecked
  	var newState =  {children:Object.assign(this.state.children, newObj)}
  	this.setState(newState)

  	this.props.getChildId(this.state.children)
  },
  render: function () {
   	return(
   		<div style={{display:"flex", flexDirection:"row"}}>
	    	{this.props.children.map(function(item){
	    	  return <Checkbox iconStyle={{fill:"white"}} style={{width:120}} key={item.id} id={item.id} value={item.name} label={item.name} onCheck={(e, isChecked) => this.handleCheck(item.id, isChecked)} labelStyle={{color:fullWhite, fontSize:20, fontFamily:"Chalky"}} labelPosition={'left'} />
	    	}.bind(this))}
    	</div>
 
    )
    
  }
})

const stateToProps = function(state){
	return{
		children:state.parentReducer.children
	}
}

export default connect(stateToProps)(CheckboxCont)
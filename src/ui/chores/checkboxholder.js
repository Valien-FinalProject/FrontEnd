import React from 'react';
import Checkbox from 'material-ui/Checkbox'
import {connect} from 'react-redux'

const radioStyle={
  display:"flex",
  flexDirection:"row",
  width:120
}


const CheckboxChild = React.createClass({
  getInitialState:function(){
  	var newObj={}
  	var newState =  Object.assign({}, this.props.children.map(function(child){
		if(child.name){
			return newObj[child.name] = false
		}
	}.bind(this)))
  	
  	return{
  		children: newObj
  	
  	}
  },
  componentWillMount:function(){
  },
  handleCheck:function(name, isChecked){
  	console.log(name)
    var newObj ={}
	newObj[name] = isChecked;
	var newdState =  {children:Object.assign(this.state.children, newObj)}
	this.setState(newdState);
	console.log("state, children", this.state.children)
  },
  render: function () {
  	
    return (
      <div style={radioStyle}>
      	<Checkbox style={{marginRight:20, marginLeft:5, width:33}} onCheck={(e, isChecked) => this.handleCheck(this.props.value, isChecked)} id={this.props.id} name={this.props.value} label={this.props.label} />

      </div>
    )
  }
})

const stateToProps = function(state){
	return{
		children:state.parentReducer.children
	}
}

export default connect(stateToProps)(CheckboxChild)



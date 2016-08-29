import React from 'react';
import TextField from 'material-ui/TextField'
import Checkboxer from 'ui/addToParent/checkbox'
import {lightWhite, fullWhite} from 'material-ui/styles/colors'
import RaisedButton from 'material-ui/RaisedButton'
import {deductPointsViaPath, addPointsViaPath} from 'api/api'

export default React.createClass({
  getInitialState:function(){
  	return{
  		points:0,
  		id:0
  	}
  },
  handleChange:function(e){
  	var newState=Object.assign({},this.state)
  	newState[e.target.name] = e.target.value
  	this.setState(newState)

  },
  getChildId:function(id){
  	this.setState({id:id})
  },
  handleAdd:function(){
  	for(var key in this.state.id){
  	if(Object.keys(this.state.id).length > 0 && this.state.id[key] === true){
      addPointsViaPath(key, this.state.points)
      console.log(key, this.state.points)
    	}
	}
  },
  handleDeduct:function(){
  	for(var key in this.state.id){
  	if(Object.keys(this.state.id).length > 0 && this.state.id[key] === true){
      deductPointsViaPath(key, this.state.points)
    	}
	}
  },
  render: function () {
    return (
      <div>
      <h1> Add or Deduct from Child</h1>
  		
  			<TextField onChange={this.handleChange} name="points" inputStyle={{color:fullWhite, fontSize:24, fontFamily:"Chalky"}} hintStyle={{color:lightWhite, fontSize:24, fontFamily:"Chalky"}} hintText="Assign Points" type="number" />
  			<Checkboxer getChildId={this.getChildId} />
  			<RaisedButton onTouchTap={this.handleAdd} label="Add"/>
  			<RaisedButton onTouchTap={this.handleDeduct} label="Deduct" />


  		
      </div>
    )
  }
})
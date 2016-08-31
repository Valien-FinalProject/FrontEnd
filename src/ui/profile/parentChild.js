import React from 'react';
import {RadioButtonGroup, RadioButton} from 'material-ui/RadioButton'
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider';
import {updateChildProfile, getChildren} from 'api/api'
import {lightWhite, fullWhite} from 'material-ui/styles/colors'
import RaisedButton from 'material-ui/RaisedButton'
import ChildSingle from 'ui/profile/childsingle'



const radioStyle={
  display:"flex",
  flexDirection:"row",
  width:220,
  textAlign:"center",
  color:"white",
  fontFamily:"Chalky"
}
const style={
	color:lightWhite,
	fontSize:24,
	fontFamily:"Chalky"
}

const inputStyle={
	color:fullWhite,
	fontSize:24,
	fontFamily:"Chalky"
}
const labelStyle={
	color:fullWhite,
	fontSize:12,
	fontFamily:"Chalky"
}

var firstVal=Number(localStorage.getItem('ChildIdforDefault'))

const ParentChild = React.createClass({
  getInitialState:function(){
  	return{
  		value:"",
  		email:"",
  		name:"",
  		password:"",
  		phone:"",
  		username:"",
      confirm:"",
  		visible:{display:"none"}
  	}
  },
  handleToggle:function(e, value){
  	this.setState({value:value})
    getChildren()

  },
  render: function () {
    return (
      <div style={{width:"50%"}}>
      	<h1>Update Child:</h1>
 		<div style={radioStyle}>
          
          <RadioButtonGroup style={radioStyle} name="children" defaultSelected={firstVal} onChange={(e, value) => this.handleToggle(e, value)}> 
          {this.props.children.map(function(item, i){
            return <RadioButton inputStyle={{borderColor:"white", color:"white"}} labelStyle={{color:"white", fontFamily:"Chalky", marginLeft:0}} key={i} value={item.id} label={(item.name).toUpperCase()}  />
          })}
          </RadioButtonGroup>
        </div>

        {this.props.children.map(function(item){
          return <ChildSingle value={this.state.value} key={item.id} id={item.id} name={item.name} un={item.username} />
        }.bind(this))}
      </div>
    )
  }
})	

const stateToProps=function(state){
	return{
		children:state.parentReducer.children
	}
}


export default connect(stateToProps)(ParentChild)
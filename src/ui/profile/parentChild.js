import React from 'react';
import {RadioButtonGroup, RadioButton} from 'material-ui/RadioButton'
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider';
import {updateChildProfile} from 'api/api'
import {lightWhite, fullWhite} from 'material-ui/styles/colors'
import RaisedButton from 'material-ui/RaisedButton'


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
  		value:firstVal,
  		email:"",
  		name:"",
  		password:"",
  		phone:"",
  		username:"",
  		visible:{display:"none"}
  	}
  },
  handleToggle:function(e, value){
  	this.setState({value:value})

  },
  handleChange:function(e){
  	var newState = Object.assign({},this.state)
  	newState[e.target.name] = e.target.value
  	this.setState(newState)
  },
  handleSubmit:function(e){
  	e.preventDefault()
  	if(this.state.password !== this.state.confirm){
  		this.setState({visible:{display:"block"}})
  	}else{
  		updateChildProfile(this.state.value, this.state.email, this.state.name, this.state.password, this.state.phone, this.state.username)
  	}
  },
  render: function () {
    return (
      <div style={{width:"50%"}}>
      	<h1>Update Child:</h1>
 		<div style={radioStyle}>
          
          <RadioButtonGroup style={radioStyle} name="children" defaultSelected={Number(localStorage.getItem('ChildIdforDefault'))} onChange={(e, value) => this.handleToggle(e, value)}> 
          {this.props.children.map(function(item, i){
            return <RadioButton inputStyle={{borderColor:"white", color:"white"}} labelStyle={{color:"white", fontFamily:"Chalky", marginLeft:0}} key={i} value={item.id} label={(item.name).toUpperCase()}  />
          })}
          </RadioButtonGroup>
        </div>

        <form onSubmit={this.handleSubmit} style={{width:"65%"}}>
        	<TextField onChange={this.handleChange}  name="username" inputStyle={inputStyle} hintText="Username" hintStyle={style} underlineShow={false} />
		    <Divider />
		    <TextField onChange={this.handleChange}  name="name" inputStyle={inputStyle} hintText="Name" hintStyle={style} underlineShow={false} />
		    <Divider />
		    <TextField onChange={this.handleChange} type="password" inputStyle={inputStyle} name="password" hintText="New PW" type="password" hintStyle={style} underlineShow={false} />
		    <Divider />
		    <TextField onChange={this.handleChange} type="password" inputStyle={inputStyle} name="confirm" hintText="Confirm New" type="password" hintStyle={style} underlineShow={false} />
		    <Divider />
		    <TextField onChange={this.handleChange} name="email" inputStyle={inputStyle} hintText="Email address" type="email" hintStyle={style} underlineShow={false} />
		    <Divider />
		    <TextField onChange={this.handleChange} name="phone" inputStyle={inputStyle} hintText="Phone" type="tel" hintStyle={style} underlineShow={false} />
		    <Divider />
		    <RaisedButton style={{marginTop:20}} type="submit" label="Update" />
        </form>
        	<p style={this.state.visible}>PASSWORDS DON'T MATCH</p>
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
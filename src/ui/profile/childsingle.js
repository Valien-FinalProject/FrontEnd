import React from 'react';
import connect from 'react-redux'
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton'
import {lightWhite, fullWhite} from 'material-ui/styles/colors'

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




export default React.createClass({
  getInitialState:function(){
  	return{
  		value:"",
  		email:"",
  		name:this.props.name,
  		password:"",
  		phone:"",
  		username:this.props.un,
      	confirm:"",
  		visible:{display:"none"}
  	}
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
  		updateChildProfile(this.props.value, this.state.email, this.state.name, this.state.password, this.state.phone, this.state.username)
  	
    this.setState({
      value:"",
      email:"",
      name:"",
      password:"",
      phone:"",
      username:"",
      confirm:"",
      visible:{display:"none"}
    })
    }
   },
  render: function () {
  	if(this.props.id == this.props.value){
	    return (
	      <div>
	      	<form onSubmit={this.handleSubmit} style={{width:"65%"}}>
	        	<TextField onChange={this.handleChange} value={this.state.username}  name="username" inputStyle={inputStyle} hintText="Username" hintStyle={style} underlineShow={false} />
			    <Divider />
			    <TextField onChange={this.handleChange} value={this.state.name}  name="name" inputStyle={inputStyle} hintText="Name" hintStyle={style} underlineShow={false} />
			    <Divider />
			    <TextField onChange={this.handleChange} value={this.state.password} type="password" inputStyle={inputStyle} name="password" hintText="New PW" type="password" hintStyle={style} underlineShow={false} />
			    <Divider />
			    <TextField onChange={this.handleChange} value={this.state.confirm} type="password" inputStyle={inputStyle} name="confirm" hintText="Confirm New" type="password" hintStyle={style} underlineShow={false} />
			    <Divider />
			    <TextField onChange={this.handleChange} value={this.state.email} name="email" inputStyle={inputStyle} hintText="Email address" type="email" hintStyle={style} underlineShow={false} />
			    <Divider />
			    <TextField onChange={this.handleChange} value={this.state.phone} name="phone" inputStyle={inputStyle} hintText="Phone" type="tel" hintStyle={style} underlineShow={false} />
			    <Divider />
			    <RaisedButton style={{marginTop:20}} type="submit" label="Update" />
	        </form>
	        	<p style={this.state.visible}>PASSWORDS DON'T MATCH</p>
	      </div>
	      )
	  }else{
	  	return (null)
	  }

    
  }
})
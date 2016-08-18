import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

import {createChild} from 'api/api'

const h1style={
	textAlign:"center"

}

const paperStyle={
	width:300,
	clear:"left",
	margin:50,
	display:"inline-block"
}
const paperStyle2={
	width:"33%",
	margin:50,
	display:"inline-block",
	margin:"auto"
}

const style={
	color:"red"

}
export default React.createClass({
  getInitialState:function(){
  	return{
  		username:"",
  		name:"",
  		email:"",
  		phone:"",
  		password:""
  	}
  },
  handleChange:function(e){
  	var newState = Object.assign({}, this.state)
  	newState[e.target.name] = e.target.value;
  	this.setState(newState)
  },
  handleSubmit:function(e){
  	e.preventDefault();
  	createChild(this.state.phone, this.state.email, this.state.name, this.state.password, this.state.username)
  	this.setState({username:"",name:"",email:"",phone:"",password:""})
  },
  render: function () {
    return (
      <div>
      	<h1 style={h1style}> USERNAME</h1>
      	<form onSubmit={this.handleSubmit} >
	      	<Paper zDepth={2} style={paperStyle2}>
	      		<h1> Create Child</h1>
	      		<TextField hintText="Username" onChange={this.handleChange} name="username" style={style} underlineShow={false} />
	      		<Divider />
			    <TextField hintText="Name" onChange={this.handleChange} name="name" style={style} underlineShow={false} />
			    <Divider />
			    <TextField hintText="Email" onChange={this.handleChange} type="email" name="email" style={style} underlineShow={false} />
			    <Divider />
			    <TextField hintText="Phone 123-234-2345" onChange={this.handleChange} name="phone" style={style} underlineShow={false} />
			    <Divider />
			    <TextField hintText="Password" onChange={this.handleChange} name="password" style={style} underlineShow={false} />
			    <Divider />
			    <RaisedButton type="submit" label="Create"/>
	  		</Paper>
  		</form>

      </div>
    )
  }
})
    
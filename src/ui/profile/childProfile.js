import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import Checkbox from 'material-ui/Checkbox'

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
	width:300,
	margin:50,
	display:"inline-block",
	float:"right"
}

const style={

}
export default React.createClass({
  handleChange:function(e){
  	var newState = Object.assign({}, this.state)
  	newState[e.target.name] = e.target.value
  	this.setState(newState)
  	},	
  handleCheck:function(e, isChecked){
  	var newState= Object.assign({},this.state)
  	newState[e] = isChecked
  	this.setState(newState)
  },
  handleSubmit:function(e){
  	e.preventDefault()
  	//some function updating user info
  },
	//Create a function that allows user to alter img src
  render: function () {
    return (
      <div>
      	<h1 style={h1style}> {localStorage.getItem("childUN")}'s profile</h1>
      	<img src="http://www.greeninc.nl/wp-content/uploads/2013/02/081129-Stock-Photo-YvZ-IMG_0238.jpg" width="200px" height="200px"/>
      	<form onSubmit={this.handleSubmit}>
      	<Paper zDepth={3} style={paperStyle}>
      		<h1>Update Info</h1>
		    <TextField hintText="Current PW" onChange={this.handleChange} style={style} name="currentpw" underlineShow={false} />
		    <Divider />
		    <TextField hintText="New PW" onChange={this.handleChange}type="password" name="newpw" style={style} underlineShow={false} />
		    <Divider />
		    <TextField hintText="Confirm New" onChange={this.handleChange} type="password" style={style} underlineShow={false} />
		    <Divider />
		    <TextField hintText="Email address" onChange={this.handleChange} type="email" name="email" style={style} underlineShow={false} />
		    <Divider />
		    <TextField hintText="Phone" onChange={this.handleChange} type="tel" style={style} name="phone" underlineShow={false} />
		    <Divider />
		    <Checkbox name="eopt" onCheck={(e, isChecked) => this.handleCheck("eopt", isChecked)} label="Opt in to Email notificaitons"/>
		    <Checkbox name="topt" onCheck={(e, isChecked) => this.handleCheck("popt", isChecked)} label="Opt in to Phone notificaitons"/>
		    <RaisedButton type="submit" label="Update" />

		</Paper>
		</form>

      </div>
    )
  }
})
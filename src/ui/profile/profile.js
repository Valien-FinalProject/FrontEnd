import React from 'react';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import Checkbox from 'material-ui/Checkbox'
import {updateParent, getParent} from 'api/api'
import {lightWhite, fullWhite} from 'material-ui/styles/colors'
import {connect} from 'react-redux'

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
const ProfPar = React.createClass({
  getInitialState:function(){
  	return{
  		email:this.props.email,
  		eopt:true,
  		name:this.props.parent.name,
  		password:"",
  		phone:this.props.phone,
  		popt:true,
  		username:this.props.parent.username,
  		confirm:"",
  		visible:{display:"none"}


  	}
  },
  componentWillMount:function(){

    console.log("parent", this.props.parent)
    console.log("email", this.props.email)
    console.log("phone", this.props.phone)
  },
  handleChange:function(e){
  	var newState = Object.assign({}, this.state)
  	newState[e.target.name] = e.target.value
  	this.setState(newState)

  },
  handleCheck:function(name, isChecked){
  	var newState = Object.assign({}, this.state)
  	newState[name]= isChecked
  	this.setState(newState)
  },
  handleSubmit:function(e){
  	e.preventDefault()
  	if(this.state.confirm !== this.state.password){
  		this.setState({visible:{display:"block"}})
  	}else{
  		updateParent(this.state.email, this.state.eopt, this.state.name, this.state.password, this.state.phone, this.state.popt, this.state.username)
      this.setState({
        email:"",
        name:"",
        password:"",
        username:"",
        confirm:"",
        phone:""
      })
  	}
  },
  render: function () {
    return (
      <div style={{width:"50%"}}>

      	<form style={{width:"65%", marginLeft:20}} onSubmit={this.handleSubmit} >
      	      	
      		<h1>Update Parent Info</h1>
		    <TextField onChange={this.handleChange} value={this.state.username} name="username" inputStyle={inputStyle} hintText="Username" hintStyle={style} underlineShow={false} />
		    <Divider />
		    <TextField onChange={this.handleChange} value={this.state.name} name="name" inputStyle={inputStyle} hintText="Name" hintStyle={style} underlineShow={false} />
		    <Divider />
		    <TextField onChange={this.handleChange} value={this.state.password} type="password" inputStyle={inputStyle} name="password" hintText="New PW" type="password" hintStyle={style} underlineShow={false} />
		    <Divider />
		    <TextField onChange={this.handleChange} value={this.state.confirm} type="password" inputStyle={inputStyle} name="confirm" hintText="Confirm New" type="password" hintStyle={style} underlineShow={false} />
		    <Divider />
		    <TextField onChange={this.handleChange} value={this.state.email} name="email" inputStyle={inputStyle} hintText="Email address" type="email" hintStyle={style} underlineShow={false} />
		    <Divider />
		    <TextField onChange={this.handleChange} value={this.state.phone} name="phone" inputStyle={inputStyle} hintText="Phone" type="tel" hintStyle={style} underlineShow={false} />
		    <Divider />
		    <Checkbox onCheck={(e,isChecked) => this.handleCheck("eopt", isChecked)} labelStyle={labelStyle} name="eopt" style={{fontSize:12, width:250}} label="Check to receive email notifications" labelPosition={'left'} defaultChecked={true} />
      		<Checkbox onCheck={(e,isChecked) => this.handleCheck("popt", isChecked)} labelStyle={labelStyle} name="popt" style={{fontSize:12, width:250}} label="Check to receive email notifications" labelPosition={'left'} defaultChecked={true} /> 
 		    <RaisedButton style={{marginTop:20}} type="submit" label="Update" />
		</form>
			<p style={this.state.visible}>PASSWORDS DON'T MATCH</p>
      </div>
    )
  }
})

const stateToProps = function(state){
  console.log(state)
  return{
    parent:state.parentReducer.parent,
    phone:state.parentReducer.phone,
    email:state.parentReducer.email
  }
}


export default connect(stateToProps)(ProfPar)
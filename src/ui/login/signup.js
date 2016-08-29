import React from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox'
import {browserHistory} from 'react-router'
import {register} from 'api/api'

const style ={
	margin:"auto",
  width:"40%"

} 

export default React.createClass({
  getInitialState:function(){
    return{
      email:"",
      eopt:true,
      name:"",
      pw:"",
      phone:"",
      popt:true,
      username:""
      
    }
  },
  handleChange:function(e){
    var newState = Object.assign({}, this.state)

    if(typeof e.target.value !== 'undefined' ){

      newState[e.target.name] = e.target.value
    }
    // }else{
    //   newState[e.target.name] = e.target.checked
    // }
    
    this.setState(newState)
  },
  handleCheck:function(e, isChecked){
    console.log("e", e)
    console.log("isChecked", isChecked)
    var newState = Object.assign({},this.state)
    newState[e] = isChecked
    this.setState(newState)
  },
  handleSubmit:function(e){
    e.preventDefault();
    register(this.state.email, this.state.eopt, this.state.name, this.state.pw,this.state.phone, this.state.popt, this.state.username)
    this.setState({value:""})
    browserHistory.push("/landing")
  },
  render: function () {
    console.log(this.state)
    return (
      <div style={style}>

      	<form onSubmit={this.handleSubmit} style={{width:"33%", margin:"auto"}}>
      		<h2>Register</h2>
      		<TextField onChange={this.handleChange} name="username" hintText="Username"/><br />
          <TextField onChange={this.handleChange} name="name" hintText="Actual Name"/><br />
      		<TextField onChange={this.handleChange} name="pw" hintText="Password" type="password"/><br />
          <TextField onChange={this.handleChange} name="email" hintText="Email" type="email" /><br />
          <TextField onChange={this.handleChange} name="phone" hintText="Phone 123-234-2345" type="tel" /><br />
          <Checkbox onCheck={(e,isChecked) => this.handleCheck("eopt", isChecked)} name="eopt" style={{fontSize:12, width:250}} label="Check to receive email notifications" labelPosition={'left'} defaultChecked={true} />
      		<Checkbox onCheck={(e,isChecked) => this.handleCheck("popt", isChecked)} name="popt" style={{fontSize:12, width:250}} label="Check to receive email notifications" labelPosition={'left'} defaultChecked={true} />
          <RaisedButton type="submit" label="Register" />

      	</form>


      </div>
    )
  }
})
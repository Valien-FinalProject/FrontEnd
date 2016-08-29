import React from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox'
import {browserHistory} from 'react-router'
import {register} from 'api/api'
import {lightWhite, fullWhite} from 'material-ui/styles/colors'

const style ={
	margin:"auto",
  width:"66%"
} 

const hintStyle={
  color:lightWhite,
  fontSize:24,
  fontFamily:"Chalky"

}

const inputStyle={
  color:fullWhite,
  fontSize:24,
  fontFamily:"Chalky"
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

      	<form onSubmit={this.handleSubmit} style={{width:"50%", margin:"auto"}}>
      		<h2 style={{fontSize:40, textAlign:"center", marginBttom:75}} >Register</h2>
      		<TextField onChange={this.handleChange} fullWidth={true} hintStyle={hintStyle} inputStyle={inputStyle} name="username" hintText="Username"/><br />
          <TextField onChange={this.handleChange} fullWidth={true} hintStyle={hintStyle} inputStyle={inputStyle} name="name" hintText="Actual Name"/><br />
      		<TextField onChange={this.handleChange} fullWidth={true} hintStyle={hintStyle} inputStyle={inputStyle} name="pw" hintText="Password" type="password"/><br />
          <TextField onChange={this.handleChange} fullWidth={true} hintStyle={hintStyle} inputStyle={inputStyle} name="email" hintText="Email" type="email" /><br />
          <TextField onChange={this.handleChange} fullWidth={true} hintStyle={hintStyle} inputStyle={inputStyle} name="phone" hintText="Phone 123-234-2345" type="tel" /><br />
          <Checkbox onCheck={(e,isChecked) => this.handleCheck("eopt", isChecked)} labelStyle={{fontSize:12, color:fullWhite, fontFamily:'Chalky'}} name="eopt" style={{fontSize:12, width:250}} label="Check to receive email notifications" labelPosition={'left'} defaultChecked={true} />
      		<Checkbox onCheck={(e,isChecked) => this.handleCheck("popt", isChecked)} labelStyle={{fontSize:12, color:fullWhite, fontFamily:'Chalky'}} name="popt" style={{fontSize:12, width:250}} label="Check to receive email notifications" labelPosition={'left'} defaultChecked={true} />
          <RaisedButton style={{margin:"auto",marginTop:30}} type="submit" label="Register" />

      	</form>


      </div>
    )
  }
})
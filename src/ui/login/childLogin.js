import React from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router'
import {childLogin} from 'api/api'
import {lightWhite, fullWhite} from 'material-ui/styles/colors'

const style ={
	width:"66%",
  margin:"auto"
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
      username:"",
      passowrd:""
    }
  },
  handleChange:function(e){
    var newState = Object.assign({}, this.state)
    newState[e.target.name] = e.target.value
    this.setState(newState)
  },
  handleSubmit:function(e){
    e.preventDefault()
    childLogin(this.state.username, this.state.password)

  },
  render: function () {
    return(
    <div style={style} >

        <form autoComplete="off" style={{width:"50%", margin:"auto"}} onSubmit={this.handleSubmit}>
          <h2 style={{fontSize:40, textAlign:"center", marginBttom:75}} >Child Login</h2>
          <TextField autoComplete="off" inputStyle={inputStyle} hintStyle={hintStyle} fullWidth={true} name="username" onChange={this.handleChange} hintText="Username" /><br />
          <TextField autoComplete="off" inputStyle={inputStyle} hintStyle={hintStyle} fullWidth={true} name="password" onChange={this.handleChange} hintText="Password" type="password"/><br />
          <RaisedButton style={{marginTop:30}} type="submit" label="Enter" />

        </form>


      </div>
    )
  }
})
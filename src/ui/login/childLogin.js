import React from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router'
import {childLogin} from 'api/api'

const style ={
	float:"right",
  display:"inline",
  width:"35%"
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
    return (
      <div style={style} >
        <Link to="/childLanding">Login </Link>

      	<form onSubmit={this.handleSubmit} >
          <h2>Child Login</h2>
      		<TextField onTouchTap={this.handleChange} name="username" hintText="Username" /><br />
      		<TextField onTouchTap={this.handleChange} name="password" hintText="Password" type="password"/><br />
      		<RaisedButton type="submit" label="Login" />

      	</form>


      </div>
    )
  }
})
import React from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import {login} from 'api/api'
import {connect} from 'react-redux'

const style ={
	textAlign:"center"
}
export default React.createClass({
  getInitialState:function(){
    return{
      username:"",
      password:""
    }
  },
  handleChange:function(e){
    var newState = Object.assign({}, this.state)

    newState[e.target.name] = e.target.value

    this.setState(newState)
  },
  handleSubmit:function(e){
    console.log("test")
    e.preventDefault()
    login(this.state.username, this.state.password)
    this.setState({username:"", password:""})

  },
  render: function () {
    return (
      <div style={style} >

      	<form autoComplete="off" onSubmit={this.handleSubmit}>
          <h2>Parent Login</h2>
      		<TextField autoComplete="off" name="username" onChange={this.handleChange} hintText="Username" /><br />
      		<TextField autoComplete="off" name="password" onChange={this.handleChange} hintText="Password" type="password"/><br />
      		<RaisedButton type="submit" label="Enter" />

      	</form>


      </div>
    )
  }
})

// const stateToProps = function(state){
//   return {
//     error: state.parentReducer.err
//   }

// }

// export default connect(stateToProps)(Login)




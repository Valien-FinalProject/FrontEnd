import React from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import {login} from 'api/api'
import {connect} from 'react-redux'
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

      	<form autoComplete="off" style={{width:"50%", margin:"auto"}} onSubmit={this.handleSubmit}>
          <h2 style={{fontSize:40, textAlign:"center", marginBttom:75}} >Parent Login</h2>
      		<TextField autoComplete="off" inputStyle={inputStyle} hintStyle={hintStyle} fullWidth={true} name="username" onChange={this.handleChange} hintText="Username" /><br />
      		<TextField autoComplete="off" inputStyle={inputStyle} hintStyle={hintStyle} fullWidth={true} name="password" onChange={this.handleChange} hintText="Password" type="password"/><br />
      		<RaisedButton style={{marginTop:30}} type="submit" label="Enter" />

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




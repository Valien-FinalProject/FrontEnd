import React from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {createReward} from 'api/api'
import {lightWhite, fullWhite} from 'material-ui/styles/colors'
import Points from 'ui/addToParent/givepoints'


var counter = 0

const style={
  color:"white",
  width:"50%",
  borderLeft:"1px solid white",
  paddingLeft:"10%"
}
const inputStyle={
  fontSize:24
}

const styles={
  errorStyle:{
    color:lightWhite,
    fontFamily:"Chalky",
    fontSize:24
  },
  floatingLabelStyle:{
    color:lightWhite,
    fontFamily:"Chalky"
  }
}
export default React.createClass({
  getInitialState:function(){
    return{
      reward:"",
      points:"",
      appear:{display:"none"},
      value:null
    }
  },
  handleChange:function(e){
    var newState = Object.assign({}, this.state)

    newState[e.target.name] = e.target.value

    this.setState(newState)
  },
  clearFields:function(){
    console.log(this.state.value)
  },
  handleSubmit:function(e){
    e.preventDefault()
    createReward(this.state.reward, this.state.points)
    this.setState({reward:"",points:"", appear:{display:"inline-block", marginTop:30, fontSize:24}})
    counter += 1

  },
  render: function () {
    console.log(this.state.points)
    return (
   	<div style={style}>
      <h1>Create Reward</h1>
        <div style={{height:40, width:"100%"}} />
      
        <form style={{width:"75%"}} onSubmit={this.handleSubmit}>
        	<TextField ref="reward" onChange={this.handleChange} value={this.state.reward} fullWidth={true} style={{marginRight:20}} inputStyle={{color:fullWhite, fontFamily:"Chalky", fontSize:24}} hintStyle={styles.errorStyle}   name="reward" type="text" hintText="Reward Description" /><br/>
          <div style={{height:30, width:"100%"}} />
        	<TextField ref="points" onChange={this.handleChange} value={this.state.points} fullWidth={true} inputStyle={{color:fullWhite, fontFamily:"Chalky", fontSize:24}} hintStyle={styles.errorStyle} name="points" type="number" hintText="Assign Points" /><br />
          <div style={{height:20, width:"100%"}} />
          <RaisedButton onTouchTap={this.clearFields} style={{margin:"auto"}}type="submit" label="Add Reward" />
        </form>
      <p style={this.state.appear}>{counter} : {counter === 1 ? "Reward" : "Rewards"} Created </p>

      <Points />
    </div>
    )
  }
})


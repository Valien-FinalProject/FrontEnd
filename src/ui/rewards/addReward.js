import React from 'react';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {createReward} from 'api/api'
// import {connect } from 'react-redux'


export default React.createClass({
  getInitialState:function(){
    return{
      reward:"",
      points:""
    }
  },
  handleChange:function(e){
    var newState = Object.assign({}, this.state)

    newState[e.target.name] = e.target.value

    this.setState(newState)
  },
  handleSubmit:function(e){
    e.preventDefault()
    createReward(this.state.reward, this.state.points)
    this.setState({reward:"",points:""})
  },
  render: function () {
    console.log(this.state.points)
    return (
   	<div>
      <h1>Create Reward</h1>
      <form onSubmit={this.handleSubmit}>
      	<TextField onChange={this.handleChange} name="reward" type="text" hintText="Reward Description" />
      	<TextField onChange={this.handleChange} name="points" type="number" hintText="Assign Points" />
        <RaisedButton type="submit" label="Add Reward" />
      </form>
    </div>
    )
  }
})


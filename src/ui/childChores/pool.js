import React from 'react';
import {getPoolChores} from 'api/api'
import {connect} from 'react-redux'

const style= {
	width:"25%",
	border:"1px solid black",
	marginLeft:"5%"
}
const PoolChores =  React.createClass({
  componentWillMount:function(){
    getPoolChores()
  },
  handleSubmit:function(){

  },
  render: function () {
    console.log(this.props.chores)
    return (
      <div style={style}>
      	<h1> Pick a chore from the Pool </h1>
      		<ul>
      			{this.props.chores.map(function(chore){
              return <li key={chore.id}>name:{chore.name} Description: {chore.description} Points: {chore.value}  <button type="submit" onTouchTap={this.handleSubmit}>Accept Chore</button></li>
            }.bind(this))}
      		</ul>


      </div>
    )
  }
})	

const stateToProps = function(state){
  return {
    chores:state.parentReducer.poolchores
  }
}

export default connect(stateToProps)(PoolChores)
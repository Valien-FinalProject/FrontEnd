import React from 'react';
import {getAllChores} from 'api/api'
import {connect} from 'react-redux'

const style= {
	width:"25%",
	border:"1px solid black",
	marginLeft:"5%"
}
export default React.createClass({
  componentWillMount:function(){
    getAllChores()
  },
  render: function () {
    console.log(this.props.chores)
    return (
      <div style={style}>
      	<h1> Pick a chore from the Pool </h1>
      		<ul>
      			<li> Pool task <button>Accept Chore</button></li>

      		</ul>


      </div>
    )
  }
})	

const stateToProps = function(state){
  return {
    chores:state.parentReducer.chores
  }
}
import React from 'react';
import {connect } from 'react-redux'


const Pending = React.createClass({
  render: function () {
    return (
      <div>
      	<h1> Pending Chores </h1>
      		<ul>
      		{this.props.pending.map(function(chore){
      			return <li key={chore.id}>{chore.name}</li> 
      		})}
      		</ul>
      </div>
    )
  }
})

const stateToProps =function(state){
	return{
		pending:state.choreReducer.pending
	}
}


export default connect(stateToProps)(Pending)
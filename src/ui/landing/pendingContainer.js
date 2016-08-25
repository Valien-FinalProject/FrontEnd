import React from 'react';
import {connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import {postToComplete,postToIncomplete} from 'api/api'


const Pending = React.createClass({
  approveChore:function(e){
    postToComplete(this.props.value, e)
  },
  denyChore:function(e){
    postToIncomplete(e)
  },
  render: function () {
    return (
      <div>
      	<h1> Pending Chores </h1>
      		<ul>
      		{this.props.pending.map(function(chore){
      			return <li key={chore.id}>{chore.name}<RaisedButton onTouchTap={(e) =>this.denyChore(chore.id)} label="Deny"/><RaisedButton onTouchTap={(e) =>this.approveChore(chore.id)} label="Approve"/></li> 
      		}.bind(this))}
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
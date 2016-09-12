import React from 'react';
import {connect} from 'react-redux'
import {getParentCompleteChoresById, deleteChore} from 'api/api'

const CompleteChores = React.createClass({
  componentWillMount:function(){
    getParentCompleteChoresById(53)
  },
  deleteMe:function(choreId){
    deleteChore(choreId)
  },
  render: function () {
    return (
      <div>
      	<h1>COMPLETED CHORES</h1>
      		<ol>
      			{this.props.complete.map(function(chore){
              {console.log(chore.id)}
              return <li style={{marginBottom:10}} key={chore.id}>{chore.name} <button onTouchTap={(e) => this.deleteMe(chore.id)} style={{float:"right"}} title="remove chore">X</button></li>
            }.bind(this))}
      		</ol>
      </div>
    )
  }
})

const stateToProps = function(state){
  return{
    complete:state.choreReducer.complete,
    value:state.childReducer.value
  }
}

export default connect(stateToProps)(CompleteChores)
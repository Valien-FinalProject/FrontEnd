import React from 'react';
import FlatButton from 'material-ui/FlatButton'
import {connect} from 'react-redux'
import {getPendingChoresById, postToComplete, postToIncomplete, getChildren} from 'api/api'

const PendingChores =  React.createClass({
  componentWillMount:function(){
      getPendingChoresById()

    
  },
  handleComplete:function(chore){
    postToComplete(localStorage.getItem("childId"), chore )
  },
  handleDeny:function(chore){
    postToIncomplete(chore)

  },
  render: function () {
    if(typeof this.props.value === 'undefined'){
      return(<div>hello</div>)
    }else{
      // getPendingChoresById(this.props.value)
    return (
      <div >
        <h1>PENDING CHORES</h1>
          <ol>
            {this.props.pending.map(function(chore){
               return <li key={chore.id}>{chore.name} <FlatButton hoverColor="green" onTouchTap={(e) => this.handleComplete(chore.id)} label="Complete" /> <FlatButton onTouchTap={(e) => this.handleDeny(chore.id)} hoverColor="red" label="Incomplete"/> </li>
             }.bind(this))}
          </ol>
      </div>
    )
  }
  }
})

const stateToProps = function(state){
  console.log(state)
  return{
    value:state.childReducer.value,
    pending:state.choreReducer.pending
  }
}

export default connect(stateToProps)(PendingChores)
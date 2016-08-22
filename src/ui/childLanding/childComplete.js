import React from 'react';
import {connect} from 'react-redux'
import {getCompleteChoresById} from 'api/api'

const CompleteChores = React.createClass({
  componentWillMount:function(){
    getCompleteChoresById()
  },
  render: function () {
    return (
      <div>
      	<h1>COMPLETED CHORES</h1>
      		<ol>
      			{this.props.complete.map(function(chore){
             return <li key={chore.id}>{chore.name} </li>
            })}
      		</ol>
      </div>
    )
  }
})

const stateToProps = function(state){
  return{
    complete:state.choreReducer.complete
  }
}

export default connect(stateToProps)(CompleteChores)
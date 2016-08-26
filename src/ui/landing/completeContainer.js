import React from 'react';
import {connect} from 'react-redux'

const Complete =  React.createClass({
  render: function () {
    return (
      <div>
      	<h1> COMPLETE</h1>
      		<ul>

      			{this.props.complete.map(function(item){
      				return <li key={item.id}>{item.name}</li>
      			})}


      		</ul>

      </div>
    )
  }
})

const stateToProps = function(state){
	console.log("state in complete", state)
	return{
		complete:state.choreReducer.complete
	}
}

export default connect(stateToProps)(Complete)
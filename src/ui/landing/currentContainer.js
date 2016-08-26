import React from 'react';
import {connect} from 'react-redux'


const Current = React.createClass({
  render: function () {
    return (
      <div>
      	<h1>CURRENT</h1>
	      	<ul>
		      	{this.props.current.map(function(item){
		      		return <li key={item.id}>{item.name}   </li>
		      	})}
	      	</ul>
      </div>
    )
  }
})



const stateToProps = function(state){
	return{
		current:state.choreReducer.current
	}
}

export default connect(stateToProps)(Current)
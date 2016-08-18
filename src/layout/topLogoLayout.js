import React from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux'

const topBar =  React.createClass({
  render: function () {
    return (
      <div>
      	<div id="topBar">
      	<Link to="/landing"> Something Might go Here eventually </Link>
        <p> {this.props.parent.username}</p>
      	</div>
      	{this.props.children}
      </div>
    )
  }
})

const stateToProps = function(state){
  return{
    parent:state.parentReducer.parent
  }
}

export default connect(stateToProps)(topBar)
import React from 'react';
import {getCompleteChoresById} from 'api/api'
import {connect} from 'react-redux'

const style = {
	width:"32%",
	border:"1px solid black",
	overflow:"scroll",
	height:350
}

const ChildEarned = React.createClass({
  componentWillMount:function(){
    getCompleteChoresById()
  },
  render: function () {
    return (
      <div style={style}>
      	<h2>Points Earned!  :)</h2>
      	<ul>
          {this.props.complete.map(function(item){

            return <li key={item.id} >You earned {item.value} {item.value === 1 ? "point" : "points"} for {item.name}!</li>
          })}
        </ul>

      </div>
    )
  }
})



const stateToProps = function(state){
  return{
    complete:state.choreReducer.complete
  }
}

export default connect(stateToProps)(ChildEarned)
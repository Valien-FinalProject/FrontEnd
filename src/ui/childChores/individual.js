import React from 'react';
import {connect} from 'react-redux'
import {getChoreByChildId, makeChorePending} from 'api/api'
import Cookie from 'js-cookie'


const style={
	width:"70%",
	border:"1px solid black"
}
const ChildRewards =  React.createClass({
  componentWillMount:function(){
    getChoreByChildId(localStorage.getItem("childId"))
  },
  handleSubmit:function(id){
    console.log(id)
    makeChorePending(id)

  },
  render: function () {
    console.log(this.props.chores)
    return (
      <div style={style}>
      	<h1>Chores available</h1>
      		<ul>
            {this.props.chores.map(function(chore){
              return <li key={chore.id} >Chore:{chore.name} Description:{chore.description} Points:{chore.value} <button type="submit" onTouchTap={(id) => this.handleSubmit(chore.id)} >Complete</button> </li>
            }.bind(this))}
      			
      		</ul>
            

      </div>
    )
  }
})

const stateToProps = function(state){
  console.log(state)
  return{
    chores:state.parentReducer.chores
  }
}

export default connect(stateToProps)(ChildRewards)
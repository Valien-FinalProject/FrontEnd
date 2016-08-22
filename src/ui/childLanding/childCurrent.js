import React from 'react';
import {getCurrentChoresById, postToComplete} from 'api/api'
import {connect} from 'react-redux'

const divStyle={
  backgroundColor:"rgba(0,145,0,.5)"
}
const CurrentChores =  React.createClass({
  componentWillMount:function(){
    getCurrentChoresById()

  },
  completeChore:function(choreId){
    postToComplete(localStorage.getItem("childId"),choreId )
  },
  render: function () {
    if(typeof this.props.value === 'undefined'){
      return (<div>hello</div>)
    }else{
    return (

      <div>
      	<h1>CHORES STILL TO DO</h1>
      		<ol>
            {this.props.current.map(function(chore){
              return <li key={chore.id}>{chore.description} <button type="submit" onTouchTap={(e) =>this.completeChore(chore.id)}>Move to Complete Test</button></li>
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
    current: state.choreReducer.current,
    value:state.childReducer.value
  }
}


export default connect(stateToProps)(CurrentChores)
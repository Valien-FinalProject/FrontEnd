import React from 'react';
import {getParentCurrentChoresById, postToComplete} from 'api/api'
import {connect} from 'react-redux'
import FlatButton from 'material-ui/FlatButton'



const CurrentChores =  React.createClass({
  componentWillMount:function(){
    getParentCurrentChoresById(53)

  },
  completeChore:function(choreId){
    postToComplete(2,choreId )
  },
  render: function () {
    if(typeof this.props.value === 'undefined'){
      return (<div>hello</div>)
    }else{
    return (

      <div>
      	<h1>CHORES STILL TO DO</h1>
      		<ul className="currentLanding">
            {this.props.current.map(function(chore){
              return <li key={chore.id} title={chore.description}>{chore.name} <FlatButton backgroundColor="white" hoverColor="rgba(0,145,0,.5)" type="submit" label="Complete Chore" onTouchTap={(e) =>this.completeChore(chore.id)}/></li>
            }.bind(this))}
          </ul>
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
import React from 'react';
import {getCurrentChoresById} from 'api/api'
import {connect} from 'react-redux'

const CurrentChores =  React.createClass({
  componentDidMount:function(){
     setTimeout(function(){ getCurrentChoresById(2) }.bind(this), 0);


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
              return <li key={chore.id}>{chore.description}</li>
            })}
          </ol>
      </div>
    )
  }
  } 
})


const stateToProps = function(state){
  return{
    current: state.childReducer.current,
    value:state.childReducer.value
  }
}


export default connect(stateToProps)(CurrentChores)
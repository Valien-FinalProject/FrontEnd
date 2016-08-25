import React from 'react';
import Current from 'ui/landing/currentContainer'
import Pending from 'ui/landing/pendingContainer'
import Complete from 'ui/landing/completeContainer'
import {cookieGetter} from 'api/api'
import {RadioButtonGroup, RadioButton} from 'material-ui/RadioButton'
import RaisedButton from 'material-ui/RaisedButton'
import {connect} from 'react-redux'
import {getChildren, handleValue, getParentCurrentChoresById,getParentCompleteChoresById,
 getParentPendingChoresById} from 'api/api'
import Cookie from 'js-cookie'

const div3 ={
  backgroundColor:"rgba(0,145,0,.5)",
  overflow:"auto"
}

const div2 ={
  backgroundColor:"rgba(255,255,0,.5)",
  overflow:"auto"

}
const div1 ={
  backgroundColor:"rgba(255,0,0,.5)",
  overflow:"auto"

}
const radioStyle={
  display:"flex",
  flexDirection:"row",
  width:220,
  textAlign:"center"
}
const parentLanding =  React.createClass({
  getInitialState:function(){
    return{
      value:0
    }
  },
  componentWillMount:function(){
    console.log(Cookie.get())
    getChildren()
  },
  handleClick:function(){
    cookieGetter()
  },
  handleChange:function(e, value){
    this.setState({
      value:value
    })
    handleValue(value)
    getParentCurrentChoresById(value)
    getParentCompleteChoresById(value)
    getParentPendingChoresById(value)

  },

  render: function () {
    
    return (
      <div>
        <div style={radioStyle}>
          <span>Toggle Child:</span>
          <RadioButtonGroup style={radioStyle} name="children"  onChange={(e, value) => this.handleChange(e, value)}> 
          {this.props.children.map(function(item, i){
            return <RadioButton key={i} value={item.id} label={item.name}  />
          })}
          </RadioButtonGroup>
        </div>
      <div id="landingPage">
      	<div style={div1} className="landingBox">
      		<Current value={this.state.value} />
      	</div>
        <div style={div2} className="landingBox">
          <Pending value={this.state.value} />
        </div>
        <div style={div3} className="landingBox">
          <Complete value={this.state.value} />
        </div>
      	
        <button onClick={this.handleClick}> Cookie Test</button>
      </div>
      </div>
    )
  }

})

const stateToProps = function(state){
  return{
    children:state.parentReducer.children,
    value:state.childReducer.value
  }
}

export default connect(stateToProps)(parentLanding)

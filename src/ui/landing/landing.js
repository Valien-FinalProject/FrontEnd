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
import {fullWhite} from 'material-ui/styles/colors'
import moment from 'moment'

var newDay = moment().startOf('day')
var newDayNum = newDay.valueOf()

const div3 ={
  // backgroundColor:"rgba(0,145,0,.3)",
  overflow:"auto",
  color:"white",
  fontFamily:"Chalky",
}

const radioStyle={
  display:"flex",
  flexDirection:"row",
  width:220,
  textAlign:"center",
  color:"white",
  fontFamily:"Chalky",
  marginLeft:30
}
const parentLanding =  React.createClass({
  getInitialState:function(){
    return{
      value:0
    }
  },
  componentWillMount:function(){
    getChildren()
    var x = Number(localStorage.getItem('ChildIdforDefault'))
    console.log(x)

    getParentCurrentChoresById(x)
    getParentCompleteChoresById(x)
    getParentPendingChoresById(x)
    
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
  getStartTime:function(time){
    this.setState({
      startDate:time
    })
  },
  getEndTime:function(time){
    this.setState({endDate:time})
  },
  render: function () {
    return (
      <div>
        <h1 style={{fontSize:52, textAlign:"center"}}>Chores on {moment().month()}/{moment().date()}</h1>
        <div style={{display:"inline-block", float:"right", height:30, width:208, marginTop:20, marginRight:20, border:"1px solid white", padding:3}}>
          <p style={{display:"inline-block", marginTop:4, marginBottom:4}} >KEY: &nbsp; </p>
          <span style={{backgroundColor:"rgba(255,255,0,.2)", padding:2, color:fullWhite, width:100, height:40, marginRight:5}}> Pending</span>
          <span style={{backgroundColor:"rgba(0,255,0,.2)", padding:2, color:fullWhite, width:100, height:40}}> Complete</span>

        </div>
        <div style={radioStyle}>
          <span>Toggle Child:</span>
          <RadioButtonGroup style={radioStyle} defaultSelected={Number(localStorage.getItem("ChildIdforDefault"))} name="children" onChange={(e, value) => this.handleChange(e, value)}> 
          {this.props.children.map(function(item, i){
            return <RadioButton style={{width:75, marginRight:50}} inputStyle={{borderColor:"white", color:"white", fontSize:24}} labelStyle={{color:"white", fontFamily:"Chalky", marginLeft:0, fontSize:20}} key={i} value={item.id} label={(item.name).toUpperCase()}  />
          })}
          </RadioButtonGroup>
        
      </div>
      
      <div id="landingPage">
      	<div style={div3} className="landingBox">
      		<Current getStartTime={this.getStartTime} getEndTime={this.getEndTime} value={this.state.value} />
      	</div>
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


// <div style={div2} className="landingBox">
        //   <Pending value={this.state.value} />
        // </div>
        // <div style={div1} className="landingBox">
        //   <Complete value={this.state.value} />
        // </div>
        
        // <button onClick={this.handleClick}> Cookie Test</button>

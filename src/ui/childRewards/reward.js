import React from 'react';
import {connect} from 'react-redux'
import {deductPointsChild} from 'api/api'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton'


const bodyStyle={
  fontFamily:"Chalky",
  color:"white",
  fontSize:48

}

const bodyStyle1={
  fontFamily:"Chalky",
  color:"white",
  fontSize:48,
  width:"50%",
  overflowX:"auto"

}


const Reward =  React.createClass({
  getInitialState:function(){
    return{
      label:"Cash In",
      disabled:false,
      color:""
    }
  },
  cashIn:function(id, points){
    deductPointsChild(id, points)
    if(this.props.totalPoints < points){
      this.setState({
        label:"XXX",
        disabled:true,
        color:"rgba(255,0,0,.15)"
      })
    }else{
    this.setState({
      label:"$$$",
      disabled:true,
      color:"rgba(0,255,0,.15)"
    })}

  },
  render: function () {
    return (
      <TableRow style={{lineHeight:1.3, backgroundColor:this.state.color}} key={this.props.id}> <TableRowColumn title={this.props.name} style={bodyStyle1}>{this.props.name}</TableRowColumn><TableRowColumn style={bodyStyle}>{this.props.points}</TableRowColumn> <TableRowColumn><RaisedButton disabled={this.state.disabled}   onTouchTap={(e, f) =>this.cashIn(this.props.id, this.props.points)} label={this.state.label}/></TableRowColumn></TableRow>
    )
  }
})

const stateToProps = function(state){
  return{
    totalPoints:state.childReducer.points
  }
}

export default connect(stateToProps)(Reward)
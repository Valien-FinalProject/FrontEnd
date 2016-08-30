import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton'
import {postToIncomplete, postToComplete} from 'api/api'
import moment from 'moment'

var newDay = moment().startOf('day')
var newDayNum = newDay.valueOf()
var endDay = moment().endOf('day')
var endDayNum =  endDay.valueOf()

const bodyStyle={
  fontFamily:"Chalky",
  color:"white",
  fontSize:30,
  width:"15%"

}
const bodyStyle2={
  fontFamily:"Chalky",
  color:"white",
  fontSize:30,
  width:"30%"

}
const bodyStyle3={
  fontFamily:"Chalky",
  color:"white",
  fontSize:30,
  width:"12%"


}

export default React.createClass({
  getInitialState:function(){
  	return {
  		color:"",
  		style:{},
      startDate:null,
      endDate:null
  	}
  },
  componentWillMount:function(){
  	if(this.props.pending){
  		this.setState({
  			color:"rgba(255,255,0,.15)",
  			style:{}
  		})
  	}else if(this.props.complete){
  		this.setState({
  			color:"rgba(255,0,0,.15)",
  			style:{display:"none"}
  		})
  	}else{
  		this.setState({
  			style:{display:"none"}
  		})
  	}
  },	
  denyChore:function(e){
  	postToIncomplete(e)
  	this.setState({
  		color:"",
  		style:{display:"none"}
  	})
  },
  dateFind:function(){
    console.log(this.props.startDate)
    console.log(this.props.endDate)
  },
  approveChore:function(e){
  	console.log(this.props.val)
  	postToComplete(this.props.val, e)

  },
  render: function () {
       return (   <TableRow onTouchTap={this.dateFind} style={{lineHeight:"130%", backgroundColor:this.state.color}} > <TableRowColumn title={this.props.name} style={bodyStyle}>{this.props.name}</TableRowColumn><TableRowColumn style={bodyStyle2}>{this.props.description}</TableRowColumn><TableRowColumn style={bodyStyle3}> {this.props.value} </TableRowColumn><TableRowColumn style={{width:"11%"}}><RaisedButton style={this.state.style}  onTouchTap={(e) =>this.denyChore(this.props.id)} label="Deny"/></TableRowColumn><TableRowColumn style={{width:"15%"}}><RaisedButton style={this.state.style} onTouchTap={(e) =>this.approveChore(this.props.id)} label="Approve"/> </TableRowColumn></TableRow>)
       
  }
})
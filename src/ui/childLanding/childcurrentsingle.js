import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton'
import {makeChorePending} from 'api/api'

const bodyStyle={
  fontFamily:"Chalky",
  color:"white",
  fontSize:30

}
const bodyStyle2={
  fontFamily:"Chalky",
  color:"white",
  fontSize:30,
  width:"33%"

}
const bodyStyle3={
  fontFamily:"Chalky",
  color:"white",
  fontSize:30,
  width:"21%"

}


export default React.createClass({
  getInitialState:function(){
  	return{
  		disabled:false,
  		title:"Finish!",
      color:""
  	}
  },
  componentWillMount:function(){
  	if(this.props.pending === "pending"){
  		this.setState({
  			disabled:true,
  			title:"✓✓✓",
        color:"rgba(255,255,0,.15)"
  		})
  	}
  	
  },
  completeChore:function(choreId){
  	this.setState({
  		disabled:true,
  		title:"✓✓✓",
      color:"rgba(255,255,0,.15)"

  	})
  	makeChorePending(choreId)
  },
  render: function () {
    return (
      <TableRow style={{lineHeight:"130%", backgroundColor:this.state.color}} key={this.props.id}> <TableRowColumn style={bodyStyle}>{this.props.name}</TableRowColumn><TableRowColumn style={bodyStyle2}>{this.props.description}</TableRowColumn><TableRowColumn style={bodyStyle3}>{this.props.value}</TableRowColumn><TableRowColumn style={{width:"21%"}}><RaisedButton disabled={this.state.disabled}  onTouchTap={(e) =>this.completeChore(this.props.id)} label={this.state.title}/></TableRowColumn> </TableRow>
    )
  }
})
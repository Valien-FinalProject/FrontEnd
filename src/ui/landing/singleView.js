import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton'
import {postToIncomplete, postToComplete} from 'api/api'



const bodyStyle={
  fontFamily:"Chalky",
  color:"white",
  fontSize:42,
  width:"15%"

}
const bodyStyle2={
  fontFamily:"Chalky",
  color:"white",
  fontSize:42,
  width:"30%"

}
const bodyStyle3={
  fontFamily:"Chalky",
  color:"white",
  fontSize:42,
  width:"12%"


}

export default React.createClass({
  getInitialState:function(){
  	return {
  		color:"",
  		style:{}
  	}
  },
  componentWillMount:function(){
  	if(this.props.pending){
  		this.setState({
  			color:"yellow",
  			style:{}
  		})
  	}else if(this.props.complete){
  		this.setState({
  			color:"red",
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
  approveChore:function(e){
  	console.log(this.props.val)
  	postToComplete(this.props.val, e)

  },
  render: function () {
    return (
          <TableRow style={{lineHeight:"130%", backgroundColor:this.state.color}} > <TableRowColumn title={this.props.name} style={bodyStyle}>{this.props.name}</TableRowColumn><TableRowColumn style={bodyStyle2}>{this.props.description}</TableRowColumn><TableRowColumn style={bodyStyle3}> {this.props.value} </TableRowColumn><TableRowColumn style={{width:"13%"}}><RaisedButton style={this.state.style}  onTouchTap={(e) =>this.denyChore(this.props.id)} label="Deny"/></TableRowColumn><TableRowColumn style={{width:"15%"}}><RaisedButton style={this.state.style} onTouchTap={(e) =>this.approveChore(this.props.id)} label="Approve"/> </TableRowColumn></TableRow>
    )
  }
})
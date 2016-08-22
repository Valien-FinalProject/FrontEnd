import React from 'react';
import {connect} from 'react-redux'
import {getCurrentChoresById, getChoreByChildId, makeChorePending} from 'api/api'
import Cookie from 'js-cookie'
import RaisedButton from 'material-ui/RaisedButton'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';



const style={
	width:"60%",
	border:"1px solid black"
}
const ChildRewards =  React.createClass({
  componentWillMount:function(){
    getCurrentChoresById()
    // getChoreByChildId()
  },
  handleSubmit:function(id){
    console.log(id)
    makeChorePending(id)

  },
  render: function () {
    console.log(this.props.chores)
    return (
      <div style={style}>
      	<h1>Chores Assigned</h1>
      		<Table >
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Chore</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
              <TableHeaderColumn>Points</TableHeaderColumn>
              <TableHeaderColumn>Delete</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.props.chores.map(function(chore){
             return <TableRow key={chore.id}> <TableRowColumn>{chore.name}</TableRowColumn><TableRowColumn>{chore.description}</TableRowColumn><TableRowColumn>{chore.value}</TableRowColumn> <TableRowColumn><RaisedButton  onTouchTap={(e) =>this.handleSubmit(chore.id)} label="Complete"/></TableRowColumn></TableRow>
            }.bind(this))}
            
          </TableBody>
        </Table>

      </div>
    )
  }
})

const stateToProps = function(state){
  console.log(state)
  return{
    chores:state.choreReducer.current,

  }
}

export default connect(stateToProps)(ChildRewards)
import React from 'react';
import {getPoolChores, changeChoreFromPool, deleteChore} from 'api/api'
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';



const style= {
	width:"40%",
	border:"1px solid black",
  overflow:"scroll",
  marginLeft:"1%",
  overflowX:"auto"
}
const PoolChores =  React.createClass({
  getInitialState:function(){
    return {
      id:""
    }
  },
  componentWillMount:function(){
    getPoolChores()
  },
  handleSubmit:function(choreId){
    console.log()
    var id = this.state.id
    changeChoreFromPool(choreId)  
    // deleteChore(choreId)
  },


  onCellClick:function(a,b){
      this.setState({
        id:a
      })
  },
  render: function () {
    return (
      <div style={style}>
        <h1>Extra Chores</h1>
          <Table onCellClick={(a,b) => this.onCellClick(a,b)}>
          <TableHeader selectable={true} adjustForCheckbox={true}>
            <TableRow>
              <TableHeaderColumn>Chore</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
              <TableHeaderColumn>Points</TableHeaderColumn>
              <TableHeaderColumn>Accept Chore</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.props.chores.map(function(chore){
             return <TableRow selectable={true} key={chore.id}> <TableRowColumn>{chore.name}</TableRowColumn><TableRowColumn>{chore.description}</TableRowColumn><TableRowColumn>{chore.value}</TableRowColumn> <TableRowColumn><RaisedButton  type="submit" onTouchTap={(e) =>this.handleSubmit(chore.id)} label="Add Chore"/></TableRowColumn></TableRow>
            }.bind(this))}
            
          </TableBody>
        </Table>

      </div>
    )
  }
})

const stateToProps = function(state){
  return{
    chores:state.choreReducer.poolchores
  }
}


export default connect(stateToProps)(PoolChores)
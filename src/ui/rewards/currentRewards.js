import React from 'react';
import {connect} from 'react-redux'
import {getAllRewards, deleteReward} from 'api/api'
import RaisedButton from 'material-ui/RaisedButton'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';



const style={
  display:"inline-block",
  width:"50%",
  textAlign:"center",
  borderRight:"1px dashed black",
  marginTop:0,
  marginBottom:0
}
const CurrentRewards = React.createClass({
  componentWillMount:function(){
    getAllRewards()
  },
  deleteReward:function(id){
    deleteReward(id)
  },
  render: function () {
    return (
      <div style={style}>
      	<h1 style={{textAlign:"center"}}> All available rewards </h1>

        
        <Table >
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Description</TableHeaderColumn>
              <TableHeaderColumn>Points</TableHeaderColumn>
              <TableHeaderColumn>Delete</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.props.rewards.map(function(reward){
             return <TableRow key={reward.id}> <TableRowColumn>{reward.description}</TableRowColumn><TableRowColumn>{reward.points}</TableRowColumn> <TableRowColumn><RaisedButton  onTouchTap={(e) =>this.deleteReward(reward.id)} label="Delete"/></TableRowColumn></TableRow>
            }.bind(this))}
            
          </TableBody>
        </Table>



      </div>
    )
  }
})	

const stateToProps = function(state){
  ("rewaards", state)
  return{
    rewards:state.rewardReducer.rewards
  }
}

export default connect(stateToProps)(CurrentRewards)
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
  color:"white",
  letterSpacing:".1em"
}

const headerRowStyle={
  color:"white",
  fontSize:24,
  fontFamily:"Chalky"
}
const headerRowStyle1={
  width:"50%",
  color:"white",
  fontSize:24,
  fontFamily:"Chalky"
}


const rowStyle={
  color:"white",
  fontSize:20,
  fontFamily:"Chalky"
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

        
        <Table className="rewardPTable">
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow className="rewardPTable">
              <TableHeaderColumn style={headerRowStyle1}>Description</TableHeaderColumn>
              <TableHeaderColumn style={headerRowStyle}>Points</TableHeaderColumn>
              <TableHeaderColumn style={headerRowStyle}>Delete</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.props.rewards.map(function(reward){
             return <TableRow style={rowStyle} className="rewardPTable" key={reward.id}> <TableRowColumn style={{fontSize:16, width:"50%"}}>{reward.name}</TableRowColumn><TableRowColumn style={{fontSize:16}}>{reward.points}</TableRowColumn> <TableRowColumn><RaisedButton  onTouchTap={(e) =>this.deleteReward(reward.id)} label="Delete"/></TableRowColumn></TableRow>
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
import React from 'react';
import {connect} from 'react-redux'
import {getRewards, getWishes, getPoints, addPoints, removePoints} from 'api/api'
import TestRewards from 'ui/childRewards/testrewards'
import TestWishes from 'ui/childRewards/testwishes'
import RaisedButton from 'material-ui/RaisedButton'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const Rewards = React.createClass({
  componentWillMount:function(){
    getRewards();
    getPoints()

  
  },
  cashIn:function(points){
    var id = localStorage.getItem("childId")
    addPoints(id, points)
  },
  render: function () {
    console.log(this.props.points )
    return (
      <div style={{width:"75%", margin:"auto", textAlign:"auto"}}>
      	<h1 style={{textAlign:"center"}}> Current Point Total: {this.props.points}</h1>
      	<Table >
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Description</TableHeaderColumn>
              <TableHeaderColumn>Points</TableHeaderColumn>
              <TableHeaderColumn>Cash In</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.props.rewards.map(function(reward){
             return <TableRow key={reward.id}> <TableRowColumn>{reward.description}</TableRowColumn><TableRowColumn>{reward.points}</TableRowColumn> <TableRowColumn><RaisedButton  onTouchTap={(e) =>this.cashIn(reward.points)} label="Cash In"/></TableRowColumn></TableRow>
            }.bind(this))}
            
          </TableBody>
        </Table>




        


      </div>
    )
  }
})

const stateToProps = function(state){
  console.log("state", state)
  return{
    rewards:state.rewardReducer.rewards,
    points:state.childReducer.points
  }
}

export default connect(stateToProps)(Rewards)




// <h2>Wishes</h2>
        // <ul>  
        //   {this.props.wishes.map(function(wish){
        //     return <TestWishes key={wish.id} id={wish.id} name={wish.description} />
        //   })}
        // </ul>




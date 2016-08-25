import React from 'react';
import {connect} from 'react-redux'
import {getRewards, getWishes, getPoints, deductPointsChild} from 'api/api'
import TestRewards from 'ui/childRewards/testrewards'
import TestWishes from 'ui/childRewards/testwishes'
import RaisedButton from 'material-ui/RaisedButton'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


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

const Rewards = React.createClass({
  componentWillMount:function(){
    getRewards();
    getPoints()
  },
  cashIn:function(points){
    console.log(points)
    deductPointsChild(points)
  },
  render: function () {
    console.log(this.props.points )
    return (
      <div style={{width:"95%", margin:"auto", textAlign:"auto", fontFamily:"Chalky", color:"white"} }>
        <h1 style={{textAlign:"center", fontSize:58}}> REWARD$</h1>
      	<h1 style={{textAlign:"center", fontSize:52}}> Current Point Total: {this.props.points}</h1>
      	<Table style={bodyStyle} className="tableLanding" >
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn style={{width:"50%", fontSize:52}}>Description</TableHeaderColumn>
              <TableHeaderColumn style={{fontSize:52}}>Points</TableHeaderColumn>
              <TableHeaderColumn style={{fontSize:52}}>Cash In</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.props.rewards.map(function(reward){
             return <TableRow style={{lineHeight:1.3}} key={reward.id}> <TableRowColumn title={reward.description} style={bodyStyle1}>{reward.description}</TableRowColumn><TableRowColumn style={bodyStyle}>{reward.points}</TableRowColumn> <TableRowColumn><RaisedButton  onTouchTap={(e) =>this.cashIn(reward.points)} label="Cash In"/></TableRowColumn></TableRow>
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




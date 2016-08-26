import React from 'react';
import {connect} from 'react-redux'
import {getRewards, getWishes, getPoints, deductPointsChild} from 'api/api'
import TestRewards from 'ui/childRewards/testrewards'
import TestWishes from 'ui/childRewards/testwishes'
import RaisedButton from 'material-ui/RaisedButton'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Reward from 'ui/childRewards/reward'

const bodyStyle={
  fontFamily:"Chalky",
  color:"white",
  fontSize:48

}


const Rewards = React.createClass({
  componentWillMount:function(){
    getRewards();
    getPoints()
  },
  render: function () {
    console.log(this.props.points )
    return (
      <div style={{width:"95%", margin:"auto", textAlign:"auto", fontFamily:"Chalky", color:"white"} }>
        <h1 style={{textAlign:"center", fontSize:58}}> REWARD$</h1>
      	<h1 style={{textAlign:"center", fontSize:52}}> Current Point Total: {this.props.points}</h1>
      	<Table style={bodyStyle} selectable={false} className="tableLanding" >
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn style={{width:"50%", fontSize:52}}>Reward</TableHeaderColumn>
              <TableHeaderColumn style={{fontSize:52}}>Points</TableHeaderColumn>
              <TableHeaderColumn style={{fontSize:52}}>Cash In</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody selectable={false} displayRowCheckbox={false}>
            {this.props.rewards.map(function(reward){
             return <Reward key={reward.id} id={reward.id} points={reward.points} name={reward.name} />
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



